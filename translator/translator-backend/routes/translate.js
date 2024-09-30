import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const LIBRE_TRANSLATE_URL = 'https://libretranslate.com/translate';

router.post('/translate', async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;

  try {
    const response = await fetch(LIBRE_TRANSLATE_URL, {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: sourceLang,
        target: targetLang,
        format: "text",
        alternatives: 3,
        api_key: "" // No API key required for free usage
      }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    
    // Log the full response from the LibreTranslate API
    console.log("API response data:", data);

    // Send the translation back to the client if it exists
    if (data.translatedText) {
      res.json({ translatedText: data.translatedText });
    } else {
      res.status(500).json({ error: "Translation failed", details: data });
    }
  } catch (error) {
    console.error("Error in translation:", error.message);
    res.status(500).json({ error: "Translation failed", details: error.message });
  }
});

export default router;
