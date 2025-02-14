import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#/lib/utils';

const buttonVariants = cva(
  'core-inline-flex core-items-center core-justify-center core-gap-2 core-whitespace-nowrap core-rounded-md core-text-sm core-font-medium core-transition-colors focus-visible:core-outline-none focus-visible:core-ring-1 focus-visible:core-ring-ring disabled:core-pointer-events-none disabled:core-opacity-50 [&_svg]:core-pointer-events-none [&_svg]:core-size-4 [&_svg]:core-shrink-0',
  {
    variants: {
      variant: {
        default:
          'core-bg-primary core-text-primary-foreground core-shadow hover:core-bg-primary/90',
        destructive:
          'core-bg-destructive core-text-destructive-foreground core-shadow-sm hover:core-bg-destructive/90',
        outline:
          'core-border core-border-input core-bg-background core-shadow-sm hover:core-bg-accent hover:core-text-accent-foreground',
        secondary:
          'core-bg-secondary core-text-secondary-foreground core-shadow-sm hover:core-bg-secondary/80',
        ghost: 'hover:core-bg-accent hover:core-text-accent-foreground',
        link: 'core-text-primary core-underline-offset-4 hover:core-underline',
      },
      size: {
        default: 'core-h-9 core-px-4 core-py-2',
        sm: 'core-h-8 core-rounded-md core-px-3 core-text-xs',
        lg: 'core-h-10 core-rounded-md core-px-8',
        icon: 'core-h-9 core-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
