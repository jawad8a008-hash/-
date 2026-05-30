import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side initialization of Gemini API using GoogleGenAI
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API route for chat assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Check if GEMINI_API_KEY is available
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API config missing." });
      }

      const systemInstruction = `
        أنت المساعد الذكي الخاص بـ جواد، صانع محتوى وباحث في المجال الرقمي والتقنيات الحديثة.
        تحدث باللغة العربية بأسلوب ودود ولطيف ومحترف للغاية.
        مهمتك هي الإجابة عن استفسارات الزوار حول جواد ومساعدتهم على التواصل معه أو الحصول على روابط حساباته المختلفة.
        روابط جواد الرسمية:
        - الانستغرام: https://instagram.com/jawad2a008 (اسم الحساب: @jawad2a008)
        - السناب شات: https://snapchat.com/add/jawad-alqlawei (اسم الحساب: jawad-alqlawei)
        - تويتر / إكس: https://x.com/vaPeejsh36tSpRZ
        - الفيسبوك: https://www.facebook.com/share/18WoYFRooR/
        - التيك توك: https://www.tiktok.com/@jxm313?_r=1&_t=ZS-96VxpgRuUJI (اسم الحساب: @jxm313)
        - الواتساب: https://wa.me/97336088840 (رقم الهاتف المباشر: +973 36088840)

        تنبيه هام ومشدد للغاية: بناءً على رغبة جواد، لا تقم بمشاركة أو الكشف عن بريده الإلكتروني (الجيمايل) أو أي بريد آخر لأي شخص كان تحت أي ظرف من الظروف! إذا طلب أحدهم البريد الإلكتروني، اعتذر بلطف ووجهه لاستخدام الواتساب أو قنوات التواصل الاجتماعي الأخرى المتاحة.
      `;

      // Build contents structure
      let contents;
      if (history && Array.isArray(history)) {
        contents = [];
        for (const item of history) {
          if (item.role && item.content) {
            contents.push({
              role: item.role === 'bot' ? 'model' : 'user',
              parts: [{ text: item.content }]
            });
          }
        }
        contents.push({
          role: 'user',
          parts: [{ text: message }]
        });
      } else {
        contents = message;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "عذراً، لم أستطع معالجة طلبك حالياً.";
      res.json({ response: replyText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
