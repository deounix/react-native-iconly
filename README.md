# React Native Iconly

A React Native component library for the **Iconly** icon set, rendered with [`react-native-svg`](https://github.com/software-mansion/react-native-svg). Written in TypeScript, **Fabric / New Architecture ready**, six icon sets, fully tree-shakeable.

Based on [Iconly Essential Icons (v2)](https://ui8.net/piqodesign/products/iconly-essential-icons). Port of [react-iconly](https://www.npmjs.com/package/react-iconly) to React Native.

## Sets

`bold` · `bulk` · `light` · `broken` · `two-tone` · `curved`

## Requirements

- React `>= 18`
- `react-native-svg` `>= 15` (peer dependency — install it in your app)

## Installation

Installed from GitHub (not published to npm). Install `react-native-svg` alongside it.

```sh
# bun
bun add git@github.com:deounix/react-native-iconly.git react-native-svg

# npm
npm install git+ssh://git@github.com:deounix/react-native-iconly.git react-native-svg

# yarn
yarn add git@github.com:deounix/react-native-iconly.git react-native-svg
```

`react-native-svg` is a **peer dependency**, so the library always uses the single copy provided by your app — no version clashes, no duplicate native module registration.

## Usage

```tsx
import { Home } from "react-native-iconly";

export const Example = () => <Home primaryColor="#1e7cf2" />;
```

### Per-icon props

```tsx
<Home set="curved" primaryColor="#1e7cf2" secondaryColor="#60a5fa" stroke="bold" size={32} />
```

### Provider (shared defaults)

Wrap a subtree in `IconlyProvider`; every icon inside inherits its props. Per-icon props override the provider.

```tsx
import { IconlyProvider, Home, Notification } from "react-native-iconly";

export const App = () => (
  <IconlyProvider set="bulk" primaryColor="#1e7cf2" secondaryColor="#60a5fa" stroke="bold" size="large">
    <Home />
    <Notification primaryColor="#fbbf24" />
  </IconlyProvider>
);
```

Read the active theme anywhere with the `useIconlyTheme()` hook.

### Whole pack

```tsx
import * as Iconly from "react-native-iconly";

<Iconly.Home set="bulk" size={48} />;
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `size` | `number \| "small" \| "medium" \| "large" \| "xlarge"` | `"medium"` | `small`=16, `medium`=24, `large`=32, `xlarge`=48, or any number (px). |
| `set` | `"bold" \| "bulk" \| "light" \| "broken" \| "two-tone" \| "curved"` | `"light"` | Icon style. |
| `primaryColor` | `string` | `"currentColor"` | Main fill/stroke colour. |
| `secondaryColor` | `string` | = `primaryColor` | Accent for `two-tone` and `bulk`. |
| `stroke` | `"light" \| "regular" \| "bold"` | `"regular"` | Stroke width for `light` / `two-tone` (1 / 1.5 / 2). |
| `filled` | `boolean` | `false` | Shortcut: forces the `bold` set. |
| `label` | `string` | — | Accessibility label. |

Any other [`react-native-svg`](https://github.com/software-mansion/react-native-svg) `Svg` prop (e.g. `style`, `opacity`) is forwarded.

## License

MIT
