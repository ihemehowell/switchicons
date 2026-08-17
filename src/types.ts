import type { SVGAttributes } from "react";

export type IconVariant = "outline" | "solid";

export interface IconProps
  extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
  /**
   * Icon dimensions.
   * Accepts numbers or valid CSS size strings.
   */
  size?: number | string;

  /**
   * SVG stroke width for outline icons.
   */
  strokeWidth?: number;

  /**
   * Icon color.
   * Defaults to currentColor so Tailwind/text color works naturally.
   */
  color?: string;

  /**
   * Visual style of the icon.
   */
  variant?: IconVariant;
}