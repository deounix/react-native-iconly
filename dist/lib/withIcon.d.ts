import * as React from "react";
import { type SvgProps } from "react-native-svg";
import type { SizeName, StrokeName } from "./constants";
export interface IconProps extends SvgProps {
    label?: string;
    filled?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    size?: number | SizeName;
    set?: "bold" | "bulk" | "light" | "broken" | "two-tone" | "curved";
    stroke?: StrokeName;
}
declare const withIcon: (Component: React.ElementType) => React.MemoExoticComponent<(props: IconProps) => React.ReactElement>;
export default withIcon;
