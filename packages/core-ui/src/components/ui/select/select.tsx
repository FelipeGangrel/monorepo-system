import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import {
  SelectComponent,
  SelectContentProps,
  SelectContentRef,
  SelectItemProps,
  SelectItemRef,
  SelectLabelProps,
  SelectLabelRef,
  SelectScrollDownButtonProps,
  SelectScrollDownButtonRef,
  SelectScrollUpButtonProps,
  SelectScrollUpButtonRef,
  SelectSeparatorProps,
  SelectSeparatorRef,
  SelectTriggerProps,
  SelectTriggerRef,
} from '#/components/ui/select/types';
import { cn } from '#/lib/utils';

const Select = SelectPrimitive.Root as SelectComponent;
Select.displayName = 'Select';

Select.Group = SelectPrimitive.Group;
Select.Group.displayName = 'Select.Group';

Select.Value = SelectPrimitive.Value;
Select.Value.displayName = 'Select.Value';

Select.Trigger = React.forwardRef<SelectTriggerRef, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'core-flex core-h-9 core-w-full core-items-center core-justify-between core-whitespace-nowrap core-rounded-md core-border core-border-input core-bg-transparent core-px-3 core-py-2 core-text-sm core-shadow-sm core-ring-offset-background placeholder:core-text-muted-foreground focus:core-outline-none focus:core-ring-1 focus:core-ring-ring disabled:core-cursor-not-allowed disabled:core-opacity-50 [&>span]:core-line-clamp-1',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="core-h-4 core-w-4 core-opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
Select.Trigger.displayName = 'Select.Trigger';

Select.ScrollUpButton = React.forwardRef<
  SelectScrollUpButtonRef,
  SelectScrollUpButtonProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'core-flex core-cursor-default core-items-center core-justify-center core-py-1',
      className
    )}
    {...props}
  >
    <ChevronUp className="core-h-4 core-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
Select.ScrollUpButton.displayName = 'Select.ScrollUpButton';

Select.ScrollDownButton = React.forwardRef<
  SelectScrollDownButtonRef,
  SelectScrollDownButtonProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'core-flex core-cursor-default core-items-center core-justify-center core-py-1',
      className
    )}
    {...props}
  >
    <ChevronDown className="core-h-4 core-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
Select.ScrollDownButton.displayName = 'Select.ScrollDownButton';

Select.Content = React.forwardRef<SelectContentRef, SelectContentProps>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          'core-relative core-z-50 core-max-h-96 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-text-popover-foreground core-shadow-md data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:core-translate-y-1 data-[side=left]:core--translate-x-1 data-[side=right]:core-translate-x-1 data-[side=top]:core--translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <Select.ScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'core-p-1',
            position === 'popper' &&
              'core-h-[var(--radix-select-trigger-height)] core-w-full core-min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <Select.ScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
Select.Content.displayName = 'Select.Content';

Select.Label = React.forwardRef<SelectLabelRef, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Label
      ref={ref}
      className={cn(
        'core-px-2 core-py-1.5 core-text-sm core-font-semibold',
        className
      )}
      {...props}
    />
  )
);
Select.Label.displayName = 'Select.Label';

Select.Item = React.forwardRef<SelectItemRef, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'core-relative core-flex core-w-full core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-2 core-pr-8 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
        className
      )}
      {...props}
    >
      <span className="core-absolute core-right-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="core-h-4 core-w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
Select.Item.displayName = 'Select.Item';

Select.Separator = React.forwardRef<SelectSeparatorRef, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
      ref={ref}
      className={cn('core--mx-1 core-my-1 core-h-px core-bg-muted', className)}
      {...props}
    />
  )
);
Select.Separator.displayName = 'Select.Separator';

export { Select };
