import { sizes, strokes, type SizeName, type StrokeName } from "./constants";
import type { Theme } from "./context";

export const getSize = (size: number | SizeName = "medium"): number =>
  typeof size === "number" ? size : sizes[size];

export const getStroke = (stroke: StrokeName = "regular"): number => strokes[stroke];

export const getOpacity = (
  primaryColor: string | undefined,
  secondaryColor: string | undefined,
): string => {
  if (!secondaryColor) return "0.4";
  return primaryColor === secondaryColor ? "0.4" : "1";
};

export const getThemeProp = <K extends keyof Theme>(
  prop: K,
  theme: Theme,
): Theme[K] => theme[prop];
