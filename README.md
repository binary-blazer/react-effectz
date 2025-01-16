# react-effectz

> 💭 react effects npm package including some effects in form as components

## 📋 Requirements

- React 18.2.0 or later
- Node.js 18.0.0 or later
- (for Next.js) Next.js 13.0.0 or later

## 📦 Installation

```bash
npm install react-effectz
# or
yarn add react-effectz
# or
pnpm add react-effectz
# or
bun add react-effectz
```

## 📚 Usage

```jsx
import { GlitchText, FadeInText, BounceText } from "react-effectz";

const App = () => {
  return (
    <>
      <GlitchText text="Hello, World!" className="text-xl" playOnLoop={false} />
      <FadeInText text="Welcome to React!" className="text-xl" playOnLoop={true} />
      <BounceText text="Let's bounce!" className="text-xl" playOnLoop={true} />
    </>
  );
};
```

## 📖 Documentation

- [GlitchText](#glitchtext)
- [FadeInText](#fadeintext)
- [BounceText](#bouncetext)
  > Rest will be available soon

### GlitchText

```jsx
import { GlitchText } from "react-effectz";

const App = () => {
  return (
    <GlitchText text="Hello, World!" className="text-xl" playOnLoop={true} />
  );
};
```

#### Props

- `text` (string): Text to apply glitch effect on
- `className` (string): Classname to apply on the text
- `playOnLoop` (boolean): Play the glitch effect on loop
- `duration` (number): Duration of the glitch effect <(soon)>

### FadeInText

```jsx
import { FadeInText } from "react-effectz";

const App = () => {
  return (
    <FadeInText text="Welcome to React!" className="text-xl" playOnLoop={true} />
  );
};
```

#### Props

- `text` (string): Text to apply fade-in effect on
- `className` (string): Classname to apply on the text
- `playOnLoop` (boolean): Play the fade-in effect on loop
- `style` (object): Inline styles to apply to the text

### BounceText

```jsx
import { BounceText } from "react-effectz";

const App = () => {
  return (
    <BounceText text="Let's bounce!" className="text-xl" playOnLoop={true} />
  );
};
```

#### Props

- `text` (string): Text to apply bounce effect on
- `className` (string): Classname to apply on the text
- `playOnLoop` (boolean): Play the bounce effect on loop
- `style` (object): Inline styles to apply to the text

## 📚 Examples

You can find examples on how to use the (currently only GlitchText) in the [examples](./examples)

## 📜 License

Apache-2.0 License © [Jonas Franke <@binary-blazer>](https://github.com/binary-blazer/react-effectz/blob/main/LICENSE)
