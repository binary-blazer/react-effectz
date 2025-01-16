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
var FadeInText = function (_a) {
    var text = _a.text, className = _a.className, playOnLoop = _a.playOnLoop, style = _a.style, props = __rest(_a, ["text", "className", "playOnLoop", "style"]);
    var _b = React.useState(false), visible = _b[0], setVisible = _b[1];
    React.useEffect(function () {
        setVisible(true);
        if (!playOnLoop) {
            return;
        }
        var interval = setInterval(function () {
            setVisible(false);
            setTimeout(function () { return setVisible(true); }, 100);
        }, 2000);
        return function () { return clearInterval(interval); };
    }, [playOnLoop]);
    return (React.createElement("div", __assign({ className: "fade-in-text ".concat(className), style: style }, props),
        React.createElement("style", null, "\n        .fade-in-text {\n          opacity: 0;\n          transition: opacity 1s ease-in-out;\n        }\n        .fade-in-text.visible {\n          opacity: 1;\n        }\n      "),
        React.createElement("span", { className: visible ? "visible" : "" }, text)));
};
exports.default = FadeInText;
//# sourceMappingURL=index.js.map