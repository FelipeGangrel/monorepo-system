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
      'core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[state=open]:core-bg-accent data-[state=open]:core-text-accent-foreground',
      inset && 'core-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="core-ml-auto core-h-4 core-w-4" />
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
      'core-z-50 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-lg data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
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
        'core-z-50 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-md data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
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
        'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
        inset && 'core-pl-8',
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
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="core-h-4 core-w-4" />
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
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
      className
    )}
    {...props}
  >
    <span className="core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="core-h-4 core-w-4 core-fill-current" />
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
      'core-px-2 core-py-1.5 core-text-sm core-font-semibold core-text-foreground',
      inset && 'core-pl-8',
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
    className={cn('core--mx-1 core-my-1 core-h-px core-bg-border', className)}
    {...props}
  />
));
ContextMenu.Separator.displayName = 'ContextMenu.Separator';

ContextMenu.Shortcut = ({ className, ...props }: ContextMenuShortcutProps) => {
  return (
    <span
      className={cn(
        'core-ml-auto core-text-xs core-tracking-widest core-text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
ContextMenu.Shortcut.displayName = 'ContextMenu.Shortcut';

export { ContextMenu };
