import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '#/lib/utils';

import type {
  AccordionComponent,
  AccordionContentProps,
  AccordionContentRef,
  AccordionItemProps,
  AccordionItemRef,
  AccordionTriggerProps,
  AccordionTriggerRef,
} from './types';

const Accordion = AccordionPrimitive.Root as AccordionComponent;
Accordion.displayName = 'Accordion';

Accordion.Item = React.forwardRef<AccordionItemRef, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('core-border-b', className)}
      {...props}
    />
  )
);
Accordion.Item.displayName = 'Accordion.Item';

Accordion.Trigger = React.forwardRef<
  AccordionTriggerRef,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="core-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'core-flex core-flex-1 core-items-center core-justify-between core-py-4 core-text-sm core-font-medium core-transition-all hover:core-underline core-text-left [&[data-state=open]>svg]:core-rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="core-h-4 core-w-4 core-shrink-0 core-text-muted-foreground core-transition-transform core-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
Accordion.Trigger.displayName = 'Accordion.Trigger';

Accordion.Content = React.forwardRef<
  AccordionContentRef,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="core-overflow-hidden core-text-sm data-[state=closed]:core-animate-accordion-up data-[state=open]:core-animate-accordion-down"
    {...props}
  >
    <div className={cn('core-pb-4 core-pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
Accordion.Content.displayName = 'Accordion.Content';

export { Accordion };
