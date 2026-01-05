import * as React from "react";
import { cn } from "./cn";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export function Tooltip({ children, content, className, ...props }: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
      {open && (
        <div className="absolute z-20 -translate-x-1/2 left-1/2 mt-2 rounded-md bg-black px-2 py-1 text-xs text-white shadow">
          {content}
        </div>
      )}
    </div>
  );
}

