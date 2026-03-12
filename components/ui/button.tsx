import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-light disabled:pointer-events-none disabled:opacity-50 h-11 px-5",
  {
    variants: {
      variant: {
        default: "bg-gold-primary text-black hover:bg-gold-light",
        outline: "border border-gold-primary/40 bg-transparent hover:bg-gold-primary/10 text-foreground"
      }
    },
    defaultVariants: { variant: "default" }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
));
Button.displayName = "Button";

export { Button, buttonVariants };
