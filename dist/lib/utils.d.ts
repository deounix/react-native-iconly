import { type SizeName, type StrokeName } from "./constants";
import type { Theme } from "./context";
export declare const getSize: (size?: number | SizeName) => number;
export declare const getStroke: (stroke?: StrokeName) => number;
export declare const getOpacity: (primaryColor: string | undefined, secondaryColor: string | undefined) => string;
export declare const getThemeProp: <K extends keyof Theme>(prop: K, theme: Theme) => Theme[K];
