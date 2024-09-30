import React, { useState } from 'react';
import TranslationComponent from './components/TranslationComponent.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container" style={{alignContent:'center'}}>
      <h1>Chat Translator</h1>
      <div className="chat-container">
        <TranslationComponent user="User 1" />
        <TranslationComponent user="User 2" />
      </div>
    </div>
  );
}

export default App;
