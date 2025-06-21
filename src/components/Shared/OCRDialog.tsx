import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";

interface IProps {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  trigger?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  hiddenButtonExit?: boolean;
  classNameContainer?: string;
  classNameContent?: string;
  classNameHeader?: string;
  classNameFooter?: string;
}

const OCRDialog = ({
  open,
  footer,
  trigger,
  title,
  children,
  hiddenButtonExit = false,
  classNameContainer,
  classNameContent,
  classNameFooter,
  classNameHeader,
  onOpenChange,
}: IProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={classNameContainer} hidden={hiddenButtonExit}>
        <DialogHeader className={classNameHeader}>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div
          className={cn("flex max-h-full flex-grow flex-col", classNameContent)}
        >
          {children}
        </div>
        <footer className={classNameFooter}>{footer}</footer>
      </DialogContent>
    </Dialog>
  );
};

export default OCRDialog;
