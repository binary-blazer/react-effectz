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
var BounceText = function (_a) {
    var text = _a.text, className = _a.className, playOnLoop = _a.playOnLoop, style = _a.style, props = __rest(_a, ["text", "className", "playOnLoop", "style"]);
    var _b = React.useState(false), bouncing = _b[0], setBouncing = _b[1];
    React.useEffect(function () {
        setBouncing(true);
        if (!playOnLoop) {
            return;
        }
        var interval = setInterval(function () {
            setBouncing(false);
            setTimeout(function () { return setBouncing(true); }, 100);
        }, 2000);
        return function () { return clearInterval(interval); };
    }, [playOnLoop]);
    return (React.createElement("div", __assign({ className: "bounce-text ".concat(className), style: style }, props),
        React.createElement("style", null, "\n        .bounce-text {\n          display: inline-block;\n          transition: transform 0.5s ease-in-out;\n        }\n        .bounce-text.bouncing {\n          transform: translateY(-20px);\n        }\n      "),
        React.createElement("span", { className: bouncing ? "bouncing" : "" }, text)));
};
exports.default = BounceText;
//# sourceMappingURL=index.js.map