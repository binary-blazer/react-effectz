"use client";

import * as React from "react";

const FadeInText = ({
  text,
  className,
  playOnLoop,
  style,
  ...props
}: {
  text: string;
  className?: string;
  playOnLoop: boolean;
  style?: React.CSSProperties;
}) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
    if (!playOnLoop) {
      return;
    }
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [playOnLoop]);

  return (
    <div className={`fade-in-text ${className}`} style={style} {...props}>
      <style>{`
        .fade-in-text {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .fade-in-text.visible {
          opacity: 1;
        }
      `}</style>
      <span className={visible ? "visible" : ""}>{text}</span>
    </div>
  );
};

export default FadeInText;
