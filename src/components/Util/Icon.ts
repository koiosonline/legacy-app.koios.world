import { cloneElement } from "react";
import { SvgSprite } from "./SvgSprite";

type IconProps = {
  type: keyof typeof SvgSprite;
  className?: string;
}

export const Icon = ({ type, className }: IconProps) => {
  if (SvgSprite[type]) {
    return cloneElement(SvgSprite[type], { className: className });

  }
  return null;
}
