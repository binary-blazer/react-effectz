"use client";

import * as React from "react";

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
    <div className="body">
      <style>{`
        * {
          box-sizing: border-box;
          transition: color 0.25s ease;
        }

        :root {
          --color: #fff;
          --count: 1;
        }

        [data-theme="light"] {
          --color: #000;
        }

        .body {
          font-size: 3.5rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-weight: bold;
        }

        p[data-scroll="in"] [data-char]:after {
          animation-name: glitch-switch;
        }

        .reveal--2 [data-char]:after {
          animation-iteration-count: var(--count);
        }

        .word {
          position: relative;
          display: inline-block;
          color: var(--color);
        }

        [data-char] {
          color: transparent;
          position: relative;
          color: var(--color);
        }

        [data-char]:after {
          --txt: attr(data-char);
          animation-duration: 0.2s;
          animation-delay: 0.5s;
          animation-timing-function: steps(1);
          animation-fill-mode: backwards;
          content: var(--txt);
          color: var(--color);
          position: absolute;
          left: 0;
          top: 0;
        }

        @keyframes glitch-switch {
          0% {
            content: var(--char-0);
          }
          10% {
            content: var(--char-1);
          }
          20% {
            content: var(--char-2);
          }
          30% {
            content: var(--char-3);
          }
          40% {
            content: var(--char-4);
          }
          50% {
            content: var(--char-5);
          }
          60% {
            content: var(--char-6);
          }
          70% {
            content: var(--char-7);
          }
          80% {
            content: var(--char-8);
          }
          90% {
            content: var(--char-9);
          }
          100% {
            content: var(--txt);
          }
        }
      `}</style>
      <div className="page">
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
                className="word"
                data-word={word}
                style={{ "--word-index": wordIndex } as React.CSSProperties}
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    className="char"
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
              <span className="whitespace"> </span>
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GlitchText;