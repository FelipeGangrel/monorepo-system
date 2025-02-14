import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '#/lib/utils';

import type {
  DropdownManuContentRef,
  DropdownMenuCheckboxItemProps,
  DropdownMenuCheckboxItemRef,
  DropdownMenuComponent,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuItemRef,
  DropdownMenuLabelProps,
  DropdownMenuLabelRef,
  DropdownMenuRadioItemProps,
  DropdownMenuRadioItemRef,
  DropdownMenuSeparatorProps,
  DropdownMenuSeparatorRef,
  DropdownMenuSubContentProps,
  DropdownMenuSubContentRef,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubTriggerRef,
  DropdownShortcutProps,
} from './types';

const DropdownMenu = DropdownMenuPrimitive.Root as DropdownMenuComponent;

DropdownMenu.Trigger = DropdownMenuPrimitive.Trigger;
DropdownMenu.Trigger.displayName = 'DropdownMenu.Trigger';

DropdownMenu.Group = DropdownMenuPrimitive.Group;
DropdownMenu.Group.displayName = 'DropdownMenu.Group';

DropdownMenu.Portal = DropdownMenuPrimitive.Portal;
DropdownMenu.Portal.displayName = 'DropdownMenu.Portal';

DropdownMenu.Sub = DropdownMenuPrimitive.Sub;
DropdownMenu.Sub.displayName = 'DropdownMenu.Sub';

DropdownMenu.RadioGroup = DropdownMenuPrimitive.RadioGroup;
DropdownMenu.RadioGroup.displayName = 'DropdownMenu.RadioGroup';

DropdownMenu.SubTrigger = React.forwardRef<
  DropdownMenuSubTriggerRef,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'core-flex core-cursor-default core-gap-2 core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent data-[state=open]:core-bg-accent [&_svg]:core-pointer-events-none [&_svg]:core-size-4 [&_svg]:core-shrink-0',
      inset && 'core-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="core-ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenu.SubTrigger.displayName = 'DropdownMenu.SubTrigger';

DropdownMenu.SubContent = React.forwardRef<
  DropdownMenuSubContentRef,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'core-z-50 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-lg data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownMenu.SubContent.displayName = 'DropdownMenu.SubContent';

DropdownMenu.Content = React.forwardRef<
  DropdownManuContentRef,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'core-z-50 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-md',
        'data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenu.Content.displayName = 'DropdownMenu.Content';

DropdownMenu.Item = React.forwardRef<
  DropdownMenuItemRef,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-gap-2 core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none core-transition-colors focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50 [&>svg]:core-size-4 [&>svg]:core-shrink-0',
      inset && 'core-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenu.Item.displayName = 'DropdownMenu.Item';

DropdownMenu.CheckboxItem = React.forwardRef<
  DropdownMenuCheckboxItemRef,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none core-transition-colors focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="core-h-4 core-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenu.CheckboxItem.displayName = 'DropdownMenu.CheckboxItem';

DropdownMenu.RadioItem = React.forwardRef<
  DropdownMenuRadioItemRef,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none core-transition-colors focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
      className
    )}
    {...props}
  >
    <span className="core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="core-h-2 core-w-2 core-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenu.RadioItem.displayName = 'DropdownMenu.RadioItem';

DropdownMenu.Label = React.forwardRef<
  DropdownMenuLabelRef,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'core-px-2 core-py-1.5 core-text-sm core-font-semibold',
      inset && 'core-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenu.Label.displayName = 'DropdownMenu.Label';

DropdownMenu.Separator = React.forwardRef<
  DropdownMenuSeparatorRef,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('core--mx-1 core-my-1 core-h-px core-bg-muted', className)}
    {...props}
  />
));
DropdownMenu.Separator.displayName = 'DropdownMenu.Separator';

DropdownMenu.Shortcut = ({ className, ...props }: DropdownShortcutProps) => {
  return (
    <span
      className={cn(
        'core-ml-auto core-text-xs core-tracking-widest core-opacity-60',
        className
      )}
      {...props}
    />
  );
};
DropdownMenu.Shortcut.displayName = 'DropdownMenu.Shortcut';

export { DropdownMenu };
