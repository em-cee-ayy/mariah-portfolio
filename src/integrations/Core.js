// src/integrations/Core.js

// This simulates an API call to send an email without needing a real server.
export const SendEmail = (emailData) => {
    console.log("Simulating email send...");
    console.log("Email to:", emailData.to);
    console.log("Subject:", emailData.subject);

    // We will simulate a 1-second network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            // This will always resolve successfully for now!
            resolve({ status: 200, message: "Email simulated successfully" });
        }, 1000);
    });
};

// --- 2. AI CHAT SIMULATION (NEW!) ---
export const ChatWithAI = (userPrompt) => {
    console.log("Simulating AI chat for prompt:", userPrompt);

    let reply;
    const lowerPrompt = userPrompt.toLowerCase();

    // Custom logic to answer common portfolio questions!

    // --- 1. CORE SKILLS & TECH STACK ---
    if (lowerPrompt.includes("skill") || lowerPrompt.includes("stack") || lowerPrompt.includes("tech") || lowerPrompt.includes("tool")) {
        reply = "mariah's core expertise is in ai engineering (prompt engineering, llm evaluation/tuning). she also has strong experience with technical development (python, sql, javascript, react native), cloud infrastructure (aws, firebase), and product strategy.";
    }

    // --- 2. UNIQUE INTERESTS (Neuroscience/Psychology) ---
    else if (lowerPrompt.includes("neuroscience") || lowerPrompt.includes("psychology") || lowerPrompt.includes("adhd")) {
        reply = "she leverages her background in neuroscience and psychology to approach product design by focusing on user empathy and building solutions that deliver a 'dopamine hit'—making them fun, intuitive, and highly sticky. this is central to her philosophy! 🧠✨";
    }

    // --- 3. TOOLS / FRAMEWORKS ---
    else if (lowerPrompt.includes("tailwind") || lowerPrompt.includes("vite") || lowerPrompt.includes("framer")) {
        reply = "her portfolio is built using react, vite, and tailwind css** for rapid, scalable development. she uses **framer motion for those beautiful, sassy animations! 💅";
    }

    // --- 4. PRODUCT FOCUS / ASPIRATION ---
    else if (lowerPrompt.includes("role") || lowerPrompt.includes("pm") || lowerPrompt.includes("engineer")) {
        reply = "she is seeking roles as an ai engineer or ai product manager, aiming to bridge the gap between technical possibility and user needs. her sweet spot is building intelligent, ethical ai solutions.";
    }

    // --- 5. PROJECTS ---
    // --- 5. PROJECTS (THE ULTIMATE GLOW-UP!) ---
    else if (lowerPrompt.includes("project") || lowerPrompt.includes("happy trails") || lowerPrompt.includes("flux")) {
        reply = "mariah has two iconic ai product mockups: **happy trails**, the 'waze for trails' that uses real-time community alerts (75+ beta testers loved it!), and **flux app**, an ai energy manager that syncs tasks with your neurotransmitters to beat adhd paralysis! 🧠⚡";
    }

    // --- DEFAULT FALLBACK ---
    else {
        reply = "i'm still learning! try asking me about her tech stack, neuroscience background, or her ai product philosophy! 🤖";
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ reply: reply });
        }, 1500); // simulate 1.5 second API call
    });
};