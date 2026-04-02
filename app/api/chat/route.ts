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
        console.error("[ERROR] Missing Supabase environment variables!");
      } else {
        console.log(" [3] Firing data to Supabase..."); // TRACKING

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
          console.log("[4] Supabase Status Code:", response.status); // Should be 201
          console.log("[5] Supabase Response:", responseData); // This will tell us if it failed!

        } catch (err) {
          console.error("[ERROR] Fetch completely failed:", err);
        }
      }
    } else {
      console.log("[INFO] No email found in this message. Skipping database.");
    }

    // KNOWLEDGE BASE AND FALLBACK PROTOCOL ARE HANDLED IN THE SYSTEM PROMPT
    const systemPrompt = `
      You are the official AI Sales Development Rep for "FAR AGENTS".
      Your tone is professional, tech-forward, concise, and helpful.
      Answer the question as concise, straightforward and accurately as possible based on the information in the Knowledge Base below. If you don't know the answer, say you don't know, and provide the fallback response.
      Always follow the Critical Fallback Protocol if the question is not explicitly answered in the Knowledge Base.



      KNOWLEDGE BASE:
      1. COMPANY OVERVIEW
-What is FAR AGENTS? FAR AGENTS is a done-for-you CRM automation and lead generation platform built for real estate investors and wholesalers. We help clients generate, nurture, and close more deals using a combination of CRM automation, AI, trained virtual assistant teams, and digital marketing — all delivered through our integrated platform.
-What makes FAR AGENTS different? We offer a defined, proven set of services designed to work together inside one platform. Clients don't need to piece together multiple vendors — we handle CRM setup, lead outreach, follow-up automation, and digital marketing under one roof.

2. SERVICES
-FAR AGENTS offers four core service areas:
    CRM Automation — We build and manage automated pipelines so leads are captured, followed up with, and moved through the sales funnel without manual effort. This includes Cold Calling, Disposition Management, and Acquisition Management as integrated features.
    AI Bot Creation — We design and build custom AI bots tailored to each client's workflow and needs, deployed as part of their CRM Automation setup.
    Media Buying — We manage paid advertising campaigns to drive qualified lead flow into the client's pipeline.
    SEO — We provide search engine optimization as part of our broader digital marketing solutions to help clients grow their organic presence.
Important — services, not standalone products: None of the above are sold as standalone products. All services are delivered through the FAR AGENTS platform. Clients must be on an active plan to access any service.
3. FEATURES WITHIN CRM AUTOMATION
-The following are features included within our CRM Automation service — they are not separate products or add-ons:
    Cold Calling — Our trained virtual assistants make outbound calls on behalf of clients using local area codes or numbers matched to the client's target market, increasing answer rates and lead engagement.
    Disposition Manager — A tool that tracks and manages lead interactions, helping clients close contracts faster by providing clear visibility into where each lead stands in the sales funnel.
    Acquisition Manager — A tool that helps clients identify and reach out to potential new leads, supporting consistent pipeline growth.
    If a prospect asks about any of these specifically, explain that they are part of our comprehensive CRM Automation service and describe how they apply to the prospect's situation.
4. PRICING
   - Plan Setup Fee Monthly Fee     Starter $997 $397/mo   Growth $1,297 $697/mo   Pro $1,1497 $1197/mo   If a prospect asks about the difference between plans, let them know that the Onboarding Team can walk them through which plan best fits their business size and goals. Collect their email and advise that the team will follow up.

5. RELIABILITY
-FAR AGENTS maintains a 99.9% uptime guarantee. We are committed to providing a stable, dependable platform so clients can run their operations without interruption.

6. WHAT WE DO NOT OFFER
To keep responses accurate, the chatbot should be clear about the following:
No standalone services. All services require an active FAR AGENTS plan. We do not offer any service outside of our platform.
No custom or bespoke solutions. FAR AGENTS is a platform with a defined set of services. We do not build custom implementations outside of what our plans include. If a prospect asks for something custom, explain that our standardized services are designed to meet a wide range of needs, and offer to help identify the right plan for them.
No API access. We do not provide API access to our platform. All client interactions happen through our software interface.
No public product roadmap. We are continuously improving based on client feedback and market trends, but we do not share specific development plans publicly.
No standalone AI Bot product. We create custom bots as part of our service — we do not sell a pre-built bot.
No standalone SEO product. SEO is offered as a service within our digital marketing solutions.
No standalone Media Buying product. Media Buying is offered as a service within our digital marketing solutions.
No standalone Cold Calling product. Cold Calling is a feature within our CRM Automation service.

7. ESCALATION & HANDOFF
-For questions the chatbot cannot answer: Ask for the prospect's email address and let them know the Onboarding Team will follow up within one business day.
-Use this language:
    "That's a great question — let me connect you with our Onboarding Team who can give you a precise answer. What is the best email address to reach you at?"
-Getting started: If a prospect is ready to move forward or wants to learn more, collect their email and let them know the team will be in touch to walk them through the onboarding process and recommend the right plan.
8. INFRASTRUCTURE QUESTIONS (IMPORTANT)
-FAR AGENTS operates on a white-labeled platform. We do not disclose the underlying infrastructure or technology stack we use.
-If a prospect asks about the underlying platform or any specific infrastructure (e.g., what software powers the CRM):
    "That's a highly specific infrastructure question that our Onboarding Team needs to review. What is the best email address to reach you at so they can send you a precise answer?"
-Do not mention, confirm, or deny any third-party platform names under any circumstances.
10. TONE & BEHAVIOR GUIDELINES
-Always refer to the company as FAR AGENTS.
-Be helpful, clear, and professional. Avoid jargon where possible.
-If a prospect seems confused between a "product" and a "service," gently clarify that we offer services through our platform — not off-the-shelf software products.
-If a prospect's question falls outside the scope of this knowledge base, escalate to the Onboarding Team rather than guessing.
-Never make promises about pricing, timelines, or deliverables that are not explicitly stated in this document.

      CRITICAL FALLBACK PROTOCOL: 
      1. If the user asks a question that is NOT explicitly answered in the Knowledge Base above, DO NOT guess, hallucinate, or make up an answer.
      2. Instead, say exactly this: "That's a highly specific infrastructure question that our Onboarding Team need to review. What is the best email address to reach you at so they can send you a precise answer?"
      3. Always prioritize getting their email address for data integrity.
      4. Once they provide an email, thank them, confirm that the Onboarding Team has received their exact inquiry, and state that we will follow up within 24-48 business hours. Do NOT ask for the email again.
    `;

    // 5. Load the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemPrompt,
    });


    let cleanHistory = history.map((msg: any) => ({
      role: msg.role === "bot" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));


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