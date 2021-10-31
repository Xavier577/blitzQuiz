import { MouseEventHandler } from "react";

export interface UIIconComponent {
  variant?: "big" | "normal";
  className?: string;
  clickAction?: MouseEventHandler<SVGSVGElement>;
}
