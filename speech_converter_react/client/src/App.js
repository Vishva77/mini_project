import React, { useState } from 'react';
import './App.css';
import { useSpeechSynthesis } from "react-speech-kit";

function App() {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  const handleSubmit = () => {
    speak({ text: text });
  }

  return (
    <div className="container">
      <h1>TEXT TO VOICE CONVERTER</h1>
      <textarea className="textAreaStyle" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      <button className="buttonStyle" onClick={handleSubmit}>Listen</button>
    </div>
  );
}

export default App;
