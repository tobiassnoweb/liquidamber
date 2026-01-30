import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Material Filled Button
        default: "bg-primary text-primary-foreground rounded-full shadow-elevation-2 hover:shadow-elevation-3 active:shadow-elevation-1 hover:brightness-105",
        // Material Outlined Button
        outline: "border-2 border-primary text-primary bg-transparent rounded-full hover:bg-primary/10",
        // Material Filled Tonal Button
        secondary: "bg-secondary text-secondary-foreground rounded-full hover:brightness-95",
        // Material Text Button
        ghost: "text-primary hover:bg-primary/10 rounded-full",
        // Material Elevated Button
        elevated: "bg-surface-container-low text-foreground rounded-full shadow-elevation-2 hover:shadow-elevation-3",
        // Destructive
        destructive: "bg-destructive text-destructive-foreground rounded-full shadow-elevation-2 hover:brightness-95",
        // Link style
        link: "text-primary underline-offset-4 hover:underline",
        // Hero CTA - Filled with emphasis
        hero: "bg-primary text-primary-foreground rounded-full shadow-elevation-3 hover:shadow-elevation-4 hover:-translate-y-0.5 font-medium",
        // Hero outline
        "hero-outline": "border-2 border-foreground/20 text-foreground bg-transparent rounded-full hover:bg-foreground/5",
        // Nav button
        nav: "bg-transparent text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
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
