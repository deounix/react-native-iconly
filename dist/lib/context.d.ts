import * as React from "react";
import type { SizeName, StrokeName } from "./constants";
export type IconSet = "bold" | "bulk" | "light" | "broken" | "two-tone" | "curved";
export interface Theme {
    primaryColor?: string;
    secondaryColor?: string;
    size?: number | SizeName;
    set?: IconSet;
    stroke?: StrokeName;
}
interface ProviderProps extends Theme {
    children: React.ReactNode;
}
export declare const IconlyContext: React.Context<Theme>;
export declare const IconlyProvider: ({ children, primaryColor, secondaryColor, set, size, stroke, }: ProviderProps) => React.ReactElement;
export declare const useIconlyTheme: () => Theme;
export {};
