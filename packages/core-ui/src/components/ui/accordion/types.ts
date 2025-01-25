import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

export type AccordionItemRef = React.ComponentRef<
  typeof AccordionPrimitive.Item
>;
export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export type AccordionTriggerRef = React.ComponentRef<
  typeof AccordionPrimitive.Trigger
>;
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

export type AccordionContentRef = React.ComponentRef<
  typeof AccordionPrimitive.Content
>;
export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

export type AccordionComponent = typeof AccordionPrimitive.Root & {
  Item: React.ForwardRefExoticComponent<
    AccordionItemProps & React.RefAttributes<AccordionItemRef>
  >;
  Trigger: React.ForwardRefExoticComponent<
    AccordionTriggerProps & React.RefAttributes<AccordionTriggerRef>
  >;
  Content: React.ForwardRefExoticComponent<
    AccordionContentProps & React.RefAttributes<AccordionContentRef>
  >;
};
