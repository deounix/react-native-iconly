import * as React from "react";
import { memo, useContext } from "react";
import Svg, { type SvgProps } from "react-native-svg";

import { getOpacity, getSize, getStroke, getThemeProp } from "./utils";
import { IconlyContext } from "./context";
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

const withIcon = (
  // Icons are generated and have slightly inconsistent inner prop types, so the
  // wrapper accepts any element type and feeds it the resolved render props.
  Component: React.ElementType,
): React.MemoExoticComponent<(props: IconProps) => React.ReactElement> => {
  const IconWrapper = ({
    size,
    label,
    primaryColor,
    secondaryColor,
    filled,
    set,
    stroke,
    ...restProps
  }: IconProps): React.ReactElement => {
    const theme = useContext(IconlyContext);

    const iconSize: number = getSize(size ?? getThemeProp("size", theme) ?? "medium");
    const color: string =
      primaryColor ?? getThemeProp("primaryColor", theme) ?? "currentColor";
    const secondary: string =
      secondaryColor ?? getThemeProp("secondaryColor", theme) ?? color;
    const strokeWidth: number = getStroke(
      stroke ?? getThemeProp("stroke", theme) ?? "regular",
    );

    return (
      <Svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        accessibilityLabel={label}
        {...restProps}
      >
        <Component
          color={color}
          opacity={getOpacity(primaryColor, secondaryColor)}
          secondaryColor={secondary}
          set={filled ? "bold" : (set ?? getThemeProp("set", theme) ?? "light")}
          strokeWidth={strokeWidth}
        />
      </Svg>
    );
  };

  return memo(IconWrapper);
};

export default withIcon;
