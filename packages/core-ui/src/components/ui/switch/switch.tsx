import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'core-peer core-inline-flex core-h-5 core-w-9 core-shrink-0 core-cursor-pointer core-items-center core-rounded-full core-border-2 core-border-transparent core-shadow-sm core-transition-colors focus-visible:core-outline-none focus-visible:core-ring-2 focus-visible:core-ring-ring focus-visible:core-ring-offset-2 focus-visible:core-ring-offset-background disabled:core-cursor-not-allowed disabled:core-opacity-50 data-[state=checked]:core-bg-primary data-[state=unchecked]:core-bg-input',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'core-pointer-events-none core-block core-h-4 core-w-4 core-rounded-full core-bg-background core-shadow-lg core-ring-0 core-transition-transform data-[state=checked]:core-translate-x-4 data-[state=unchecked]:core-translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = 'Switch';

export { Switch };
