![react-effectz](https://raw.githubusercontent.com/binary-blazer/repo-svgs/main/out/react-effectz/image.svg)



























# react-effectz
> 💭 react effects npm package including some effects in form as components

## 📦 Installation
```bash
npm install react-effectz
# or
yarn add react-effectz
# or
pnpm add react-effectz
# or
bun install react-effectz
```

## 📚 Usage
```jsx
import { GlitchText } from 'react-effectz';

const App = () => {
  return (
    <GlitchText text="Hello, World!" className="text-xl" playOnLoop={true} />
  );
};
```

## 📖 Documentation
- [GlitchText](#glitchtext)
> Rest will be available soon

### GlitchText
```jsx
import { GlitchText } from 'react-effectz';

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

## 📜 License
Apache-2.0 License © [Jonas Franke <@binary-blazer>](https://github.com/binary-blazer/react-effectz/blob/main/LICENSE)