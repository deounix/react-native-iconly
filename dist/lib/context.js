import * as React from "react";
import { createContext, useContext } from "react";
const defaultValue = {
    primaryColor: "currentColor",
    set: "light",
    size: "medium",
    stroke: "regular",
};
export const IconlyContext = createContext(defaultValue);
IconlyContext.displayName = "IconlyContext";
export const IconlyProvider = ({ children, primaryColor, secondaryColor, set, size, stroke, }) => (<IconlyContext.Provider value={{
        primaryColor: primaryColor !== null && primaryColor !== void 0 ? primaryColor : "currentColor",
        secondaryColor,
        set: set !== null && set !== void 0 ? set : "light",
        size: size !== null && size !== void 0 ? size : "medium",
        stroke: stroke !== null && stroke !== void 0 ? stroke : "regular",
    }}>
    {children}
  </IconlyContext.Provider>);
export const useIconlyTheme = () => useContext(IconlyContext);
