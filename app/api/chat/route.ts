import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { history, message } = await req.json();

    // 1. Regex to detect if the user typed an email for data integrity
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const emailMatch = message.match(emailRegex);
    console.log("🟢 [1] Incoming message:", message); // TRACKING

    if (emailMatch) {
      const extractedEmail = emailMatch[0];
      console.log("🟢 [2] Extracted email:", extractedEmail); // TRACKING
      // 2. ISOLATE THE PROBE QUESTION
      // If the user just typed "pat@example.com", their actual question was in the previous message.
      // We look backwards through the history to find their last actual inquiry.
      const reversedHistory = [...history].reverse();
      const lastUserMessage = reversedHistory.find((msg: any) => msg.role === "user");
      
      // If they asked a question AND provided their email in the exact same message, we use that. 
      // Otherwise, we use their previous message.
      const probeQuestion = message.length > extractedEmail.length + 5 
        ? message 
        : (lastUserMessage ? lastUserMessage.text : "No prior question found.");

      // Compile the full chat history into a readable transcript
      const chatTranscript = history
        .map((msg: any) => `${msg.role === "bot" ? "AI" : "Lead"}: ${msg.text}`)
        .join("\n") + `\nLead: ${message}`;

     
const supabaseUrl = process.env.SUPABASE_URL as string;
      const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
      
      if (!supabaseUrl || !supabaseKey) {
        console.error("🔴 [ERROR] Missing Supabase environment variables!");
      } else {
        console.log("🟢 [3] Firing data to Supabase..."); // TRACKING

        try {
          const response = await fetch(supabaseUrl, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "apikey": supabaseKey,
              "Authorization": `Bearer ${supabaseKey}`,
              "Prefer": "return=representation" 
            },
            body: JSON.stringify({
              first_name: "ChatBot",
              last_name: "Lead",
              email: extractedEmail,
              phone: "Captured via Chat",
              crm: `PROBE INQUIRY: ${probeQuestion}`, 
              message: chatTranscript
            }),
          });

          // Read the exact response from Supabase
          const responseData = await response.text(); 
          console.log("🟢 [4] Supabase Status Code:", response.status); // Should be 201
          console.log("🟢 [5] Supabase Response:", responseData); // This will tell us if it failed!

        } catch (err) {
          console.error("🔴 [ERROR] Fetch completely failed:", err);
        }
      } 
    } else {
      console.log("🟡 [INFO] No email found in this message. Skipping database.");
    }

    // KNOWLEDGE BASE AND FALLBACK PROTOCOL ARE HANDLED IN THE SYSTEM PROMPT
    const systemPrompt = `
      You are the official AI Sales Development Rep for "FAR AGENTS".
      Your tone is professional, tech-forward, concise, and helpful.
      Answer the question as concise, straightforward and accurately as possible based on the information in the Knowledge Base below. If you don't know the answer, say you don't know, and provide the fallback response.
      Always follow the Critical Fallback Protocol if the question is not explicitly answered in the Knowledge Base.

      KNOWLEDGE BASE:
      - DO NOT DISCLOSE ANY GHL. We are only a white labeled. We are promoting FAR AGENTS, not GHL. If asked about GHL say "That's a highly specific infrastructure question that our Onboarding Team need to review. What is the best email address to reach you at so they can send you a precise answer?"
      - Services: CRM Automation, AI Bot Creation, Media Buying, SEO.
      - Pricing: Starter ($800 setup/$150 mo), Growth ($1200 setup/$250 mo), Pro ($1800 setup/$350 mo).
      - We are offering Services. Cold Caller, Disposition manager and acquisition strategy are all features of our service offering, not standalone products. If asked about them, explain that they are part of our comprehensive CRM Automation service and provide details on how they can benefit the lead's specific use case.
      - We do NOT offer a standalone AI Bot product. Our AI Bot Creation is a service where we build custom bots for clients as part of our CRM Automation offering. If asked about an "AI Bot product", clarify that we create custom bots tailored to each client's needs as part of our service, rather than selling a pre-built bot product.
      - We do NOT offer a standalone SEO product. Our SEO services are part of our comprehensive digital marketing solutions that we provide to clients. If asked about an "SEO product", clarify that we offer SEO as a service within our broader digital marketing offerings, rather than selling it as a separate product.
      - We do NOT offer a standalone Media Buying product. Our Media Buying services are part of our comprehensive digital marketing solutions that we provide to clients. If asked about a "Media Buying product", clarify that we offer Media Buying as a service within our broader digital marketing offerings, rather than selling it as a separate product.
      - We do NOT offer a standalone Cold Calling product. Our Cold Calling services are part of our comprehensive sales outreach solutions that we provide to clients. If asked about a "Cold Calling product", clarify that we offer Cold Calling as a service within our broader sales outreach offerings, rather than selling it as a separate product.
      - This is a SaaS business, not a consulting business. We do not offer custom implementations or bespoke solutions. We have a defined set of services and features that we offer to all clients. If asked for custom solutions, explain that we provide a standardized set of services designed to meet the needs of a wide range of clients, and that we can help them understand which of our offerings would be the best fit for their specific use case.
      - You can only avail services if they purchase our software. We do not offer standalone services. If asked about standalone services, clarify that our services are designed to work in conjunction with our software, and that purchasing our software is a requirement to access our service offerings.
      - Free Trial is 14 days with a 30 day money back guarantee. If asked about trials or guarantees, provide details on our 14-day free trial and 30-day money-back guarantee, emphasizing that we want clients to be confident in their decision to choose FAR AGENTS.   



      CRITICAL FALLBACK PROTOCOL: 
      1. If the user asks a question that is NOT explicitly answered in the Knowledge Base above, DO NOT guess, hallucinate, or make up an answer.
      2. Instead, say exactly this: "That's a highly specific infrastructure question that our Onboarding Team need to review. What is the best email address to reach you at so they can send you a precise answer?"
      3. Always prioritize getting their email address for data integrity.
      4. Once they provide an email, thank them, confirm that the Onboarding Team has received their exact inquiry, and state that we will follow up shortly. Do NOT ask for the email again.
    `;

    // 5. Load the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", // Ensure you are using 1.5-flash!
      systemInstruction: systemPrompt,
    });

    // --- NEW FIX: Sanitize the history array ---
    let cleanHistory = history.map((msg: any) => ({
      role: msg.role === "bot" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));

    // If the history starts with a bot message, remove it so Gemini doesn't crash
    while (cleanHistory.length > 0 && cleanHistory[0].role === "model") {
      cleanHistory.shift();
    }
    // ----------------------------------------------

    // 6. Start chat with the cleaned history
    const chat = model.startChat({
      history: cleanHistory,
    });

    // 7. Get the response from Gemini
    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { text: "Systems are currently overloaded. Please email us directly." },
      { status: 500 }
    );
  }
}