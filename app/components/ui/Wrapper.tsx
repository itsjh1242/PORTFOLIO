import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Center = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn("flex justify-center items-center", className)}>{children}</div>;
};

export const MaxWidth = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn("w-2/3 max-sm:w-full max-sm:px-3", className)}>{children}</div>;
};

export const FlexRow = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn("flex flex-row w-full", className)}>{children}</div>;
};

export const FlexCol = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn("flex flex-col w-full", className)}>{children}</div>;
};

export const HalfWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn("w-1/2", className)}>{children}</div>;
};

export const TitleText = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <p className={cn("text-3xl font-medium max-sm:text-base", className)}>{children}</p>;
};
