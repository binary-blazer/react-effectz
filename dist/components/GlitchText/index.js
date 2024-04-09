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
require("./style.css");
var GlitchText = function (_a) {
    var text = _a.text, className = _a.className, playOnLoop = _a.playOnLoop, props = __rest(_a, ["text", "className", "playOnLoop"]);
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
    return (React.createElement("div", { className: "body" },
        React.createElement("div", { className: "page" },
            React.createElement("p", __assign({ className: "reveal--2 words chars splitting " + className, "aria-hidden": "true", "data-scroll": "in", "data-splitting": "", style: {
                    "--word-total": words.length,
                    "--char-total": charTotal,
                } }, props), glitchText.split(" ").map(function (word, wordIndex) { return (React.createElement(React.Fragment, { key: wordIndex },
                React.createElement("span", { className: "word", "data-word": word, style: { "--word-index": wordIndex } }, word.split("").map(function (char, charIndex) { return (React.createElement("span", { className: "char", "data-char": char, style: {
                        "--char-index": charIndex,
                        "--count": "1",
                    }, key: charIndex }, char)); })),
                React.createElement("span", { className: "whitespace" }, " "))); })))));
};
exports.default = GlitchText;
