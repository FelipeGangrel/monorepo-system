import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

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
      className={cn('border-b', className)}
      {...props}
    />
  )
);
Accordion.Item.displayName = 'Accordion.Item';

Accordion.Trigger = React.forwardRef<
  AccordionTriggerRef,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
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
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
Accordion.Content.displayName = 'Accordion.Content';

export { Accordion };
