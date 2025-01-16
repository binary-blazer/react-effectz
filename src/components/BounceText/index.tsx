"use client";

import * as React from "react";

const BounceText = ({
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
  const [bouncing, setBouncing] = React.useState(false);

  React.useEffect(() => {
    setBouncing(true);
    if (!playOnLoop) {
      return;
    }
    const interval = setInterval(() => {
      setBouncing(false);
      setTimeout(() => setBouncing(true), 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [playOnLoop]);

  return (
    <div className={`bounce-text ${className}`} style={style} {...props}>
      <style>{`
        .bounce-text {
          display: inline-block;
          transition: transform 0.5s ease-in-out;
        }
        .bounce-text.bouncing {
          transform: translateY(-20px);
        }
      `}</style>
      <span className={bouncing ? "bouncing" : ""}>{text}</span>
    </div>
  );
};

export default BounceText;
