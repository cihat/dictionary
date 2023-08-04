import React from "react";
import cx from "@/lib/cx";

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  size?: "default" | "large" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full";
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  as = "div",
  size = "default",
  children,
  className,
  ...props }: IContainerProps) {
  const sizes = {
    default: "max-w-screen-md mx-auto px-4 md:px-0",
    large: "max-w-screen-l mx-auto px-4 md:px-6  lg:px-8",
    xl: "max-w-screen-xl mx-auto px-4 md:px-6  lg:px-8",
    "2xl": "max-w-screen-2xl mx-auto px-4 md:px-6  lg:px-8",
    "3xl": "max-w-screen-3xl mx-auto px-4 md:px-6  lg:px-8",
    "4xl": "max-w-screen-4xl mx-auto px-4 md:px-6  lg:px-8",
    "5xl": "max-w-screen-5xl mx-auto px-4 md:px-6  lg:px-8",
    "6xl": "max-w-screen-6xl mx-auto px-4 md:px-6  lg:px-8",
    "7xl": "max-w-screen-7xl mx-auto px-4 md:px-6  lg:px-8",
    full: "max-w-screen-full mx-auto px-4 md:px-6  lg:px-8",
  };

  return React.createElement(
    as,
    { className: cx(sizes[size], className), ...props },
    children
  );
};