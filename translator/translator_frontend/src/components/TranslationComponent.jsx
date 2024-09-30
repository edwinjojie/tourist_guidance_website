import React, { useState } from 'react';
import './TranslationComponent.css';

function TranslationComponent({ user }) {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const handleTranslate = async () => {
    const response = await fetch('http://localhost:5000/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text,
        sourceLang: sourceLang,
        targetLang: targetLang,
      }),
    });
    const data = await response.json();
    setTranslatedText(data.translatedText);
  };

  return (
    <div className="translation-component">
      <h2>{user}</h2>
      <label>Select your language:</label>
      <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="zh">Chinese</option>
        {/* Add more languages */}
      </select>

      <label>Select target language:</label>
      <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="zh">Chinese</option>
        {/* Add more languages */}
      </select>

      <textarea
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>

      <div className="translated-text">
        <strong>Translated:</strong> {translatedText}
      </div>
    </div>
  );
}

export default TranslationComponent;
