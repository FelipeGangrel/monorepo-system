import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '#/lib/utils';

import type {
  RadioGroupComponent,
  RadioGroupItemProps,
  RadioGroupItemRef,
  RadioGroupProps,
  RadioGroupRef,
} from './types';

const RadioGroup = React.forwardRef<RadioGroupRef, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn('core-grid core-gap-2', className)}
        {...props}
        ref={ref}
      />
    );
  }
) as RadioGroupComponent;
RadioGroup.displayName = 'RadioGroup';

RadioGroup.Item = React.forwardRef<RadioGroupItemRef, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          'core-aspect-square core-h-4 core-w-4 core-rounded-full core-border core-border-primary core-text-primary core-shadow focus:core-outline-none focus-visible:core-ring-1 focus-visible:core-ring-ring disabled:core-cursor-not-allowed disabled:core-opacity-50',
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="core-flex core-items-center core-justify-center">
          <Circle className="core-h-3.5 core-w-3.5 core-fill-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroup.Item.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup };
