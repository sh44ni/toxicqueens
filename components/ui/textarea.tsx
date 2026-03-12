import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-28 w-full rounded-md border border-gold-muted/40 bg-accent/80 px-3 py-2 text-sm text-foreground placeholder:text-gold-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
