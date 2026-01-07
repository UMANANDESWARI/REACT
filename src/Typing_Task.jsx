import React, { useState, useEffect } from 'react';
import './Typing_Task_css.css'; // Add styles here

const paragraphs = {
  easy: "The sun rises in the east and sets in the west.",
  intermediate: "Typing practice improves speed, accuracy, and confidence over time.",
  advanced: "Advanced typists master rhythm, precision, and adaptability across diverse content."
};

export default function Typing_Task() {
  const [level, setLevel] = useState(null);
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let timer;
    if (startTime && input.length < text.length) {
      timer = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, input, text]);

  const handleLevelClick = (lvl) => {
    setLevel(lvl);
    setText(paragraphs[lvl]);
    setInput('');
    setStartTime(null);
    setElapsed(0);
    setShowResult(false);
  };

  const handleInputChange = (e) => {
    if (!startTime) setStartTime(Date.now());
    setInput(e.target.value);
  };

  const calculateResults = () => {
    const words = input.trim().split(/\s+/).length;
    const speed = ((words / elapsed) * 60).toFixed(2); // WPM
    return { words, speed, time: elapsed };
  };

  const renderText = () => {
    return text.split('').map((char, i) => {
      let color = '';
      if (i < input.length) {
        color = input[i] === char ? 'correct' : 'incorrect';
      }
      return <span key={i} className={color}>{char}</span>;
    });
  };

  return (
    <div className="typing-container">
      <div className="card-row">
        {['easy', 'intermediate', 'advanced'].map((lvl) => (
          <button key={lvl} onClick={() => handleLevelClick(lvl)}>{lvl.toUpperCase()}</button>
        ))}
      </div>

      {level && (
        <>
          <div className="paragraph">{renderText()}</div>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Start typing here..."
            rows={4}
          />
          <div className="timer">Time: {elapsed}s</div>
          <button onClick={() => setShowResult(true)}>Show Result</button>
        </>
      )}

      {showResult && (
        <div className="results">
          <p>Words: {calculateResults().words}</p>
          <p>Speed: {calculateResults().speed} WPM</p>
          <p>Time: {calculateResults().time}s</p>
        </div>
      )}
    </div>
  );
}
