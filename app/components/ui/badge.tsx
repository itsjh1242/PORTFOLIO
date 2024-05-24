import React from "react";
import { IconType } from "react-icons";

interface badgeProps {
  icon: IconType | null;
  iconSize: string | null;
  bgColor: string;
  fontColor: string;
  fontSize: string;
  context: string | number;
}
const Badge = (props: badgeProps) => {
  const { icon, bgColor, fontColor, fontSize, context } = props;
  return (
    <div className={`flex justify-center items-center gap-1 px-4 py-2 rounded-3xl ${bgColor} ${fontColor} ${fontSize}`}>
      {icon && <div className="flex justify-center items-center">{React.createElement(icon, { size: "1em" })}</div>}
      <p className="max-sm:text-xs">{context}</p>
    </div>
  );
};

export default Badge;
