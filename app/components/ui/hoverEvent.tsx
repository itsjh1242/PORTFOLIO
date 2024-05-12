"use client";
import { useEffect, useRef } from "react";

interface HoverTextOverInterface {
  child: React.ReactNode;
  text: string;
}
export const HoverTextOver = (props: HoverTextOverInterface) => {
  const { child, text } = props;

  const divWrapperRef = useRef<HTMLDivElement>(null);
  const hiddenDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divWrapper = divWrapperRef.current;
    const hiddenDiv = hiddenDivRef.current;
    const handleMouseOver = () => {
      if (hiddenDiv !== null) {
        hiddenDiv.style.opacity = "1";
        // hiddenDiv.style.display = "absolute";
      }
    };
    const handleMouseLeave = () => {
      if (hiddenDiv !== null) {
        hiddenDiv.style.opacity = "0";
        // hiddenDiv.style.display = "none";
      }
    };
    divWrapper?.addEventListener("mouseover", handleMouseOver);
    divWrapper?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      divWrapper?.removeEventListener("mouseover", handleMouseOver);
      divWrapper?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hiddenDivRef]);

  return (
    <div className="" ref={divWrapperRef}>
      <div ref={hiddenDivRef} className=" opacity-0">
        {text}
      </div>
      {child}
    </div>
  );
};
