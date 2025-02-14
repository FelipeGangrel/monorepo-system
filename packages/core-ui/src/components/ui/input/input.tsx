import * as React from 'react';

import { cn } from '#/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'core-flex core-h-9 core-w-full core-rounded-md core-border core-border-input core-bg-transparent core-px-3 core-py-1 core-text-base core-shadow-sm core-transition-colors file:core-border-0 file:core-bg-transparent file:core-text-sm file:core-font-medium file:core-text-foreground placeholder:core-text-muted-foreground focus-visible:core-outline-none focus-visible:core-ring-1 focus-visible:core-ring-ring disabled:core-cursor-not-allowed disabled:core-opacity-50 md:core-text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
