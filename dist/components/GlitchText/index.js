"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var GlitchText = function (_a) {
    var text = _a.text, className = _a.className, playOnLoop = _a.playOnLoop, style = _a.style, props = __rest(_a, ["text", "className", "playOnLoop", "style"]);
    var words = text.split(" ");
    var charTotal = text.replace(/\s/g, "").length;
    var glitchChars = ["≥", "¶", "/", "˚", "░", "≤", "¢", "•", "≥", "˚"];
    var getRandomGlitchChar = function () {
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    };
    var _b = React.useState(text), glitchText = _b[0], setGlitchText = _b[1];
    React.useEffect(function () {
        var glitchCount = 0;
        var interval = setInterval(function () {
            setGlitchText(text
                .split("")
                .map(function () { return getRandomGlitchChar(); })
                .join(""));
            glitchCount++;
            if (!playOnLoop && glitchCount > Math.floor(Math.random() * 12) + 10) {
                clearInterval(interval);
                setGlitchText(text);
            }
        }, 100);
        return function () { return clearInterval(interval); };
    }, [text, playOnLoop]);
    return (React.createElement("div", { className: "body", style: style },
        React.createElement("style", null, "\n        * {\n          box-sizing: border-box;\n          transition: color 0.25s ease;\n        }\n\n        :root {\n          --color: inherit;\n          --count: 1;\n        }\n\n        .body {\n          font-size: 3.5rem;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n            Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n          font-weight: bold;\n        }\n\n        p[data-scroll=\"in\"] [data-char]:after {\n          animation-name: glitch-switch;\n        }\n\n        .reveal--2 [data-char]:after {\n          animation-iteration-count: var(--count);\n        }\n\n        .word {\n          position: relative;\n          display: inline-block;\n          color: inherit;\n        }\n\n        [data-char] {\n          color: transparent;\n          position: relative;\n          color: inherit;\n        }\n\n        [data-char]:after {\n          --txt: attr(data-char);\n          animation-duration: 0.2s;\n          animation-delay: 0.5s;\n          animation-timing-function: steps(1);\n          animation-fill-mode: backwards;\n          content: var(--txt);\n          color: inherit;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n\n        @keyframes glitch-switch {\n          0% {\n            content: var(--char-0);\n          }\n          10% {\n            content: var(--char-1);\n          }\n          20% {\n            content: var(--char-2);\n          }\n          30% {\n            content: var(--char-3);\n          }\n          40% {\n            content: var(--char-4);\n          }\n          50% {\n            content: var(--char-5);\n          }\n          60% {\n            content: var(--char-6);\n          }\n          70% {\n            content: var(--char-7);\n          }\n          80% {\n            content: var(--char-8);\n          }\n          90% {\n            content: var(--char-9);\n          }\n          100% {\n            content: var(--txt);\n          }\n        }\n      "),
        React.createElement("div", { className: "page" },
            React.createElement("p", __assign({ className: "reveal--2 words chars splitting ".concat(className), "aria-hidden": "true", "data-scroll": "in", "data-splitting": "", style: __assign({ "--word-total": words.length, "--char-total": charTotal }, style) }, props), glitchText.split(" ").map(function (word, wordIndex) { return (React.createElement(React.Fragment, { key: wordIndex },
                React.createElement("span", { className: "word", "data-word": word, style: { "--word-index": wordIndex } }, word.split("").map(function (char, charIndex) { return (React.createElement("span", { className: "char", "data-char": char, style: {
                        "--char-index": charIndex,
                        "--count": "1",
                    }, key: charIndex }, char)); })),
                React.createElement("span", { className: "whitespace" }, " "))); })))));
};
exports.default = GlitchText;
