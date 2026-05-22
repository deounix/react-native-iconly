var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { memo, useContext } from "react";
import Svg from "react-native-svg";
import { getOpacity, getSize, getStroke, getThemeProp } from "./utils";
import { IconlyContext } from "./context";
const withIcon = (
// Icons are generated and have slightly inconsistent inner prop types, so the
// wrapper accepts any element type and feeds it the resolved render props.
Component) => {
    const IconWrapper = (_a) => {
        var _b, _c, _d, _e, _f;
        var { size, label, primaryColor, secondaryColor, filled, set, stroke } = _a, restProps = __rest(_a, ["size", "label", "primaryColor", "secondaryColor", "filled", "set", "stroke"]);
        const theme = useContext(IconlyContext);
        const iconSize = getSize((_b = size !== null && size !== void 0 ? size : getThemeProp("size", theme)) !== null && _b !== void 0 ? _b : "medium");
        const color = (_c = primaryColor !== null && primaryColor !== void 0 ? primaryColor : getThemeProp("primaryColor", theme)) !== null && _c !== void 0 ? _c : "currentColor";
        const secondary = (_d = secondaryColor !== null && secondaryColor !== void 0 ? secondaryColor : getThemeProp("secondaryColor", theme)) !== null && _d !== void 0 ? _d : color;
        const strokeWidth = getStroke((_e = stroke !== null && stroke !== void 0 ? stroke : getThemeProp("stroke", theme)) !== null && _e !== void 0 ? _e : "regular");
        return (<Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" accessibilityLabel={label} {...restProps}>
        <Component color={color} opacity={getOpacity(primaryColor, secondaryColor)} secondaryColor={secondary} set={filled ? "bold" : ((_f = set !== null && set !== void 0 ? set : getThemeProp("set", theme)) !== null && _f !== void 0 ? _f : "light")} strokeWidth={strokeWidth}/>
      </Svg>);
    };
    return memo(IconWrapper);
};
export default withIcon;
