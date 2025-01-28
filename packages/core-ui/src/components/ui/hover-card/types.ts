import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

export type HoverCardContentRef = React.ComponentRef<
  typeof HoverCardPrimitive.Content
>;
export type HoverCardContentProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
>;

export type HoverCardArrowRef = React.ComponentRef<
  typeof HoverCardPrimitive.Arrow
>;
export type HoverCardArrowProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Arrow
>;

export type HoverCardComponent = typeof HoverCardPrimitive.Root & {
  Trigger: typeof HoverCardPrimitive.Trigger;
  Arrow: React.ForwardRefExoticComponent<
    HoverCardArrowProps & React.RefAttributes<HoverCardArrowRef>
  >;
  Content: React.ForwardRefExoticComponent<
    HoverCardContentProps & React.RefAttributes<HoverCardContentRef>
  >;
};
