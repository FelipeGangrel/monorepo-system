import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

export type PopoverArrowRef = React.ComponentRef<typeof PopoverPrimitive.Arrow>;
export type PopoverArrowProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Arrow
>;

export type PopoverContentRef = React.ComponentRef<
  typeof PopoverPrimitive.Content
>;
export type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

export type PopoverComponent = typeof PopoverPrimitive.Root & {
  Trigger: typeof PopoverPrimitive.Trigger;
  Anchor: typeof PopoverPrimitive.Anchor;
  Arrow: React.ForwardRefExoticComponent<
    PopoverArrowProps & React.RefAttributes<PopoverArrowRef>
  >;
  Close: typeof PopoverPrimitive.Close;
  Content: React.ForwardRefExoticComponent<
    PopoverContentProps & React.RefAttributes<PopoverContentRef>
  >;
};
