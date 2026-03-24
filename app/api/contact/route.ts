import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ── 1. THE HONEYPOT CHECK ──
    // If a bot fills out the hidden 'botTrap' field, we silently return success 
    // without actually sending the data anywhere.
    if (body.botTrap) {
      console.log("Bot trapped in contact form.");
      return NextResponse.json({ success: true });
    }

    // ── 2. STRICT SERVER-SIDE VALIDATION ──
    // Don't trust the frontend. Make sure we actually have the required data.
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic check to ensure the email looks like an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // ── 3. MAP DATA FOR APPS SCRIPT ──
    const gasPayload = {
      timestamp: new Date().toLocaleString(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || "",
      company: body.crm || "", // Mapping 'crm' from your form to 'Company' in the Sheet
      date: "", 
      time: "", 
      plan: "General Inquiry", // Hardcoded to separate from Discovery Calls
      message: body.message,
    };

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("Missing GOOGLE_APPS_SCRIPT_URL environment variable");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // ── 4. SEND TO GOOGLE SHEETS ──
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gasPayload),
    });

    if (!response.ok) {
      throw new Error("Failed to log data to Google Sheets");
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Apps Script returned an error");
    }

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("Contact Form Error:", error.message);
    return NextResponse.json(
      { error: "Something went wrong while submitting your message." },
      { status: 500 }
    );
  }
}