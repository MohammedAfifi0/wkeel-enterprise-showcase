import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wkeel-text focus-visible:ring-offset-2 focus-visible:ring-offset-wkeel-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // WKEEL Enterprise variants
        primary: "bg-wkeel-primary-bg text-wkeel-primary-text rounded-lg hover:bg-wkeel-primary-hover",
        secondary: "border border-wkeel-secondary-border bg-transparent text-wkeel-text rounded-lg hover:bg-wkeel-secondary-hover hover:border-wkeel-muted",
        text: "text-wkeel-text hover:text-wkeel-muted bg-transparent border-none shadow-none",
        
        // Legacy shadcn variants (for compatibility)
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        default: "h-11 px-6 text-base rounded-lg",
        lg: "h-13 px-8 text-lg rounded-lg",
        xl: "h-16 px-10 text-xl rounded-lg",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
