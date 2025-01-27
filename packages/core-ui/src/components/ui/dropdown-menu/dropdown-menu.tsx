import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

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
      'focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
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
      'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
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
        'bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
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
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
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
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
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
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
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
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
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
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
));
DropdownMenu.Separator.displayName = 'DropdownMenu.Separator';

DropdownMenu.Shortcut = ({ className, ...props }: DropdownShortcutProps) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};
DropdownMenu.Shortcut.displayName = 'DropdownMenu.Shortcut';

export { DropdownMenu };
