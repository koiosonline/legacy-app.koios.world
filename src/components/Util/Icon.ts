import { cloneElement } from "react";
import { SvgSprite } from "./SvgSprite";

type IconProps = {
  type: keyof typeof SvgSprite;
  className?: string;
  onClick?: () => void;
};

export const Icon = ({ type, className, onClick }: IconProps) => {

  if (SvgSprite[type]) {
    return cloneElement(SvgSprite[type], { className: `icon icon-${type} ${className || ''}`, onClick });
  }
  return null;
};
