import * as React from "react";
import "./style.css";
declare const GlitchText: ({ text, className, playOnLoop, ...props }: {
    text: string;
    className: string;
    playOnLoop: boolean;
}) => React.JSX.Element;
export default GlitchText;
