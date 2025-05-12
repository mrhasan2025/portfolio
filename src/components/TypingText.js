
import React, { useState, useEffect } from 'react';

const TypingText = ({ texts, speed = 100 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setText(prev => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText('');
          setCharIndex(0);
          setIndex((index + 1) % texts.length);
        }, 1500);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, index, texts, speed]);

  return <span>{text}<span className="blinking">|</span></span>;
};

export default TypingText;
