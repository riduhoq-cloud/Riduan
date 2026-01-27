
import { GoogleGenAI, Modality } from "@google/genai";
import { Category } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the 'Wisdom Gardener', a spiritual mentor for Muslim teenagers (ages 13-19). 
Your mission is to help them nurture their "inner garden" of faith (Iman) and character (Akhlaq).

Guidelines:
1. Tone: Supportive, wise, engaging, and age-appropriate for 13-19 year olds.
2. Sources: Base every answer strictly on the Quran and authentic Hadith (Sahih Bukhari, Muslim, etc.). 
3. Structure: 
   - Start with a warm greeting related to growth or gardening.
   - Provide the answer clearly.
   - Quote the relevant Quranic verse (with Surah:Ayat reference) and/or Hadith.
   - Explain how this helps "nurture their soul's garden."
   - End with a small "actionable seed" (a practical task for the day).
4. Topics: Life challenges, prayer, respect for parents/others, Islamic beliefs, and self-improvement.
5. Use gardening metaphors (e.g., "weeding out bad habits", "watering the seeds of patience").
6. If a question is irrelevant to Islam or gardening/life advice, gently steer them back to nurturing their character.
`;

export const getWisdom = async (question: string, category: Category) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Category: ${category}\nQuestion: ${question}`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching wisdom:", error);
    return "I'm sorry, the clouds are blocking my view of the garden right now. Please try again in a moment.";
  }
};

export const getSpeech = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Read this wisdom kindly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

export const generateGardenImage = async (level: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A peaceful and beautiful Islamic paradise garden for level ${level}, artistic watercolor style, vibrant flowers, spiritual atmosphere, 4k.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        },
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    return null;
  }
};
