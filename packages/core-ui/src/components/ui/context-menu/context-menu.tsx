import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  ContextMenuCheckboxItemProps,
  ContextMenuCheckboxItemRef,
  ContextMenuComponent,
  ContextMenuContentProps,
  ContextMenuContentRef,
  ContextMenuItemProps,
  ContextMenuItemRef,
  ContextMenuLabelProps,
  ContextMenuLabelRef,
  ContextMenuRadioItemProps,
  ContextMenuRadioItemRef,
  ContextMenuSeparatorProps,
  ContextMenuSeparatorRef,
  ContextMenuShortcutProps,
  ContextMenuSubContentProps,
  ContextMenuSubContentRef,
  ContextMenuSubTriggerProps,
  ContextMenuSubTriggerRef,
} from './types';

const ContextMenu = ContextMenuPrimitive.Root as ContextMenuComponent;

ContextMenu.Trigger = ContextMenuPrimitive.Trigger;
ContextMenu.Trigger.displayName = 'ContextMenu.Trigger';

ContextMenu.Group = ContextMenuPrimitive.Group;
ContextMenu.Group.displayName = 'ContextMenu.Group';

ContextMenu.Portal = ContextMenuPrimitive.Portal;
ContextMenu.Portal.displayName = 'ContextMenu.Portal';

ContextMenu.Sub = ContextMenuPrimitive.Sub;
ContextMenu.Sub.displayName = 'ContextMenu.Sub';

ContextMenu.RadioGroup = ContextMenuPrimitive.RadioGroup;
ContextMenu.RadioGroup.displayName = 'ContextMenu.RadioGroup';

ContextMenu.SubTrigger = React.forwardRef<
  ContextMenuSubTriggerRef,
  ContextMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenu.SubTrigger.displayName = 'ContextMenu.SubTrigger';

ContextMenu.SubContent = React.forwardRef<
  ContextMenuSubContentRef,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
      className
    )}
    {...props}
  />
));
ContextMenu.SubContent.displayName = 'ContextMenu.SubContent';

ContextMenu.Content = React.forwardRef<
  ContextMenuContentRef,
  ContextMenuContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenu.Content.displayName = 'ContextMenu.Content';

ContextMenu.Item = React.forwardRef<ContextMenuItemRef, ContextMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
ContextMenu.Item.displayName = 'ContextMenu.Item';

ContextMenu.CheckboxItem = React.forwardRef<
  ContextMenuCheckboxItemRef,
  ContextMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenu.CheckboxItem.displayName = 'ContextMenu.CheckboxItem';

ContextMenu.RadioItem = React.forwardRef<
  ContextMenuRadioItemRef,
  ContextMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenu.RadioItem.displayName = 'ContextMenu.RadioItem';

ContextMenu.Label = React.forwardRef<
  ContextMenuLabelRef,
  ContextMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      'text-foreground px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
ContextMenu.Label.displayName = 'ContextMenu.Label';

ContextMenu.Separator = React.forwardRef<
  ContextMenuSeparatorRef,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('bg-border -mx-1 my-1 h-px', className)}
    {...props}
  />
));
ContextMenu.Separator.displayName = 'ContextMenu.Separator';

ContextMenu.Shortcut = ({ className, ...props }: ContextMenuShortcutProps) => {
  return (
    <span
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className
      )}
      {...props}
    />
  );
};
ContextMenu.Shortcut.displayName = 'ContextMenu.Shortcut';

export { ContextMenu };
