import { forwardRef, createElement, type ReactNode } from "react";
import type { IconProps } from "./types";

/**
 * Builds a forwardRef solid/filled icon component from raw SVG child nodes.
 * Unlike createIcon (stroke-based), this fills shapes with `color` by
 * default. Some icons mix a filled body with a thin stroke accent (e.g. a
 * padlock's shackle) — strokeWidth still applies to any child elements
 * that explicitly set stroke="currentColor" in their own markup.
 */
export function createSolidIcon(displayName: string, children: ReactNode) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    (
      {
        size = 24,
        strokeWidth = 2,
        color = "currentColor",
        className,
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
          fill: color,
          stroke: "none",
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: className
            ? `switch-icon switch-icon-solid ${className}`
            : "switch-icon switch-icon-solid",
          "aria-hidden": props["aria-label"] ? undefined : true,
          ...props,
        },
        children
      )
  );

  Icon.displayName = displayName;
  return Icon;
}
