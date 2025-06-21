import { cn } from "@/lib/utils";
import React from "react";

interface OCRContainerProps extends React.PropsWithChildren {
  className?: string;
}

const OCRContainer = ({ children, className }: OCRContainerProps) => {
  return <section className={cn("w-full h-screen overflow-y-auto p-6 bg-neutral-100", className)}>{children}</section>;
};

export default OCRContainer;
