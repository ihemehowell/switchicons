import {
  forwardRef,
  createElement,
  type ReactNode,
} from "react";

import type { IconProps } from "./types";

export function createIcon(
  displayName: string,
  children: ReactNode
) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    (
      {
        size = 24,
        strokeWidth = 2,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      createElement(
        "svg",
        {
          ref,
          xmlns: "http://www.w3.org/2000/svg",
          width: size,
          height: size,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: color,
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: className
            ? `switch-icon ${className}`
            : "switch-icon",
          "aria-label": ariaLabel,
          "aria-hidden":
            ariaHidden ?? (ariaLabel ? undefined : true),
          role: ariaLabel ? "img" : undefined,
          focusable: "false",
          ...props,
        },
        children
      )
  );

  Icon.displayName = displayName;

  return Icon;
}