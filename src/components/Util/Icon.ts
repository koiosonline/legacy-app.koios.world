import { cloneElement } from "react";
import { SvgSprite } from "./SvgSprite";

type IconProps = {
  type: keyof typeof SvgSprite;
  className?: string;
  onClick?: () => void;
};

export const Icon = ({ type, className, onClick }: IconProps) => {
  const iconClass = `icon icon--${type} ${className ? className : ''}`;

  if (SvgSprite[type]) {
    return cloneElement(SvgSprite[type], { className: iconClass, onClick });
  }
  return null;
};
