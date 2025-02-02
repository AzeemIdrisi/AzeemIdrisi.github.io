import React, { useState } from "react";

const ScrambleText = ({ text, duration = 1000, small, className = "" }) => {
  const characters = small
    ? "abcdefghijklmnopqrstuvwxyz*"
    : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const startScramble = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    let scrambledText = text.split("");
    let iterations = -2;

    const interval = setInterval(() => {
      scrambledText = scrambledText.map((char, i) =>
        i < iterations
          ? text[i]
          : characters[Math.floor(Math.random() * characters.length)]
      );

      setDisplayText(scrambledText.join(""));

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
      iterations++;
    }, duration / text.length);
  };

  return (
    <span
      onMouseEnter={startScramble}
      className={`cursor-pointer ${className}`}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
