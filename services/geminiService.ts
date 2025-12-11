import { GoogleGenAI } from "@google/genai";

// Safely access process.env to avoid ReferenceError in environments where process is undefined
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignore error
  }
  return '';
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

export const generatePersonalizedInvite = async (profession: string, reason: string): Promise<string> => {
  if (!apiKey) {
    return "AI Insight Preview: Access personalized career trajectory mapping upon approval.";
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are the AI Gatekeeper for MissionGenAI, an exclusive, futuristic professional network.
      The user is a "${profession}" who wants to join because "${reason}".
      
      Write a 2-sentence sophisticated, encouraging, and futuristic welcome message explaining specifically how MissionGenAI's 'Knowledge Engine' will accelerate their specific career path. 
      Do not say "Welcome to MissionGenAI". Start directly with the insight.
      Tone: Elite, Intelligent, Visionary.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "AI Insight Preview: Access personalized career trajectory mapping upon approval.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI Insight Preview: Access personalized career trajectory mapping upon approval.";
  }
};