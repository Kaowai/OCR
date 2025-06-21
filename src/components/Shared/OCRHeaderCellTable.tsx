import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface IProps {
  id?: string;
  label?: string | ReactNode;
  className?: string;
  iconEnd?: ReactNode;
  onClick?: () => void;
}

const OCRHeaderCellTable = ({
  id,
  label,
  className,
  iconEnd,
  onClick,
}: IProps) => {
  const handleClickHeader = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      id={id}
      onClick={handleClickHeader}
      className={cn(
        `caption-m flex items-center gap-2 font-bold hover:cursor-pointer ${
          iconEnd ? "text-neutral-950" : "text-neutral-500"
        }`,
        className
      )}
    >
      {label}
      {iconEnd}
    </div>
  );
};

export default OCRHeaderCellTable;
