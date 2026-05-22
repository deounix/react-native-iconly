import * as React from "react";
import { createContext, useContext } from "react";

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

const defaultValue: Theme = {
  primaryColor: "currentColor",
  set: "light",
  size: "medium",
  stroke: "regular",
};

export const IconlyContext = createContext<Theme>(defaultValue);
IconlyContext.displayName = "IconlyContext";

export const IconlyProvider = ({
  children,
  primaryColor,
  secondaryColor,
  set,
  size,
  stroke,
}: ProviderProps): React.ReactElement => (
  <IconlyContext.Provider
    value={{
      primaryColor: primaryColor ?? "currentColor",
      secondaryColor,
      set: set ?? "light",
      size: size ?? "medium",
      stroke: stroke ?? "regular",
    }}
  >
    {children}
  </IconlyContext.Provider>
);

export const useIconlyTheme = (): Theme => useContext(IconlyContext);
