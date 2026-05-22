export const sizes = {
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 48,
} as const;

export const strokes = {
  light: 1,
  regular: 1.5,
  bold: 2,
} as const;

export type SizeName = keyof typeof sizes;
export type StrokeName = keyof typeof strokes;
