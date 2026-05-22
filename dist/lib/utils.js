import { sizes, strokes } from "./constants";
export const getSize = (size = "medium") => typeof size === "number" ? size : sizes[size];
export const getStroke = (stroke = "regular") => strokes[stroke];
export const getOpacity = (primaryColor, secondaryColor) => {
    if (!secondaryColor)
        return "0.4";
    return primaryColor === secondaryColor ? "0.4" : "1";
};
export const getThemeProp = (prop, theme) => theme[prop];
