import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => (
  <input
    className={cn(
      "flex h-11 w-full rounded-md border border-gold-muted/40 bg-accent/80 px-3 py-2 text-sm text-foreground placeholder:text-gold-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
