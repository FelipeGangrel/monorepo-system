import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '#/lib/utils';

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'core-peer core-h-4 core-w-4 core-shrink-0 core-rounded-sm core-border core-border-primary core-shadow focus-visible:core-outline-none focus-visible:core-ring-1 focus-visible:core-ring-ring disabled:core-cursor-not-allowed disabled:core-opacity-50 data-[state=checked]:core-bg-primary data-[state=checked]:core-text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'core-flex core-items-center core-justify-center core-text-current'
      )}
    >
      <Check className="core-h-4 core-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
