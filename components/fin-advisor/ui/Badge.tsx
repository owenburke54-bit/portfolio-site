import * as React from "react";
import { cn } from "./cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const styles =
    variant === "secondary"
      ? "bg-gray-100 text-gray-900"
      : variant === "outline"
        ? "border border-gray-300 text-gray-800 bg-transparent"
        : "bg-black text-white";
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", styles, className)}
      {...props}
    />
  );
}

