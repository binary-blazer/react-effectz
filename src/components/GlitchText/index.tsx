"use client";

import * as React from "react";
import styles from "./style.module.css";

const GlitchText = ({
  text,
  className,
  playOnLoop,
  ...props
}: {
  text: string;
  className: string;
  playOnLoop: boolean;
}) => {
  const words = text.split(" ");
  const charTotal = text.replace(/\s/g, "").length;

  const glitchChars = ["≥", "¶", "/", "˚", "░", "≤", "¢", "•", "≥", "˚"];

  const getRandomGlitchChar = () => {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  };

  const [glitchText, setGlitchText] = React.useState(text);

  React.useEffect(() => {
    let glitchCount = 0;
    const interval = setInterval(() => {
      setGlitchText(
        text
          .split("")
          .map(() => getRandomGlitchChar())
          .join(""),
      );
      glitchCount++;
      if (!playOnLoop && glitchCount > Math.floor(Math.random() * 12) + 10) {
        clearInterval(interval);
        setGlitchText(text);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, playOnLoop]);

  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <p
          className={`reveal--2 words chars splitting ${className}`}
          aria-hidden="true"
          data-scroll="in"
          data-splitting=""
          style={
            {
              "--word-total": words.length,
              "--char-total": charTotal,
            } as React.CSSProperties
          }
          {...props}
        >
          {glitchText.split(" ").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              <span
                className={styles.word}
                data-word={word}
                style={{ "--word-index": wordIndex } as React.CSSProperties}
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    className={styles.char}
                    data-char={char}
                    style={
                      {
                        "--char-index": charIndex,
                        "--count": "1",
                      } as React.CSSProperties
                    }
                    key={charIndex}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className={styles.whitespace}> </span>
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GlitchText;