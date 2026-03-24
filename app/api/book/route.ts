// app/api/book/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, company, message, date, time, plan } =
      await req.json();

    // ── Validate ──
    if (!firstName || !lastName || !email || !date || !time) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── Check env var is set ──
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("[BOOKING] GOOGLE_APPS_SCRIPT_URL is not set in .env.local");
      return NextResponse.json(
        { error: "Booking service is not configured yet. Please contact us directly." },
        { status: 503 }
      );
    }

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric",
    });

    const bookedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });

    // ── Send to Apps Script with a 10s timeout ──
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    let scriptRes: Response;
    try {
      scriptRes = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: bookedAt,
          firstName,
          lastName,
          email,
          phone:   phone   || "",
          company: company || "",
          date:    formattedDate,
          time,
          plan:    plan    || "General Consultation",
          message: message || "",
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!scriptRes.ok) {
      const text = await scriptRes.text();
      console.error("[BOOKING] Apps Script error:", text);
      throw new Error("Failed to log booking. Please try again.");
    }

    return NextResponse.json({ success: true });

  } catch (err: any) {
    if (err.name === "AbortError") {
      console.error("[BOOKING] Apps Script timed out");
      return NextResponse.json(

        
        { error: "Request timed out. Please try again." },
        { status: 504 }
      );
    }
    console.error("[BOOKING ERROR]", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    );
  }
}