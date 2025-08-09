import React, { useState } from "react";

const HoverGlitchText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleMouseEnter = () => {
    const original = text;
    const glitch = generateRandomString(5);
    setDisplayedText(glitch);

    setTimeout(() => {
      setDisplayedText(original);
    }, 300); // milliseconds to return to original text
  };

  return (
    <h1 className="hover-text" onMouseEnter={handleMouseEnter}>
      {displayedText}
    </h1>
  );
};

export default HoverGlitchText;
