import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  MenubarCheckboxItemProps,
  MenubarCheckboxItemRef,
  MenubarComponent,
  MenubarContentProps,
  MenubarContentRef,
  MenubarItemProps,
  MenubarItemRef,
  MenubarLAbelProps,
  MenubarLabelRef,
  MenubarRadioItemProps,
  MenubarRadioItemRef,
  MenubarSeparatorProps,
  MenubarSeparatorRef,
  MenubarShortcutProps,
  MenubarSubContentProps,
  MenubarSubContentRef,
  MenubarSubTriggerProps,
  MenubarSubTriggerRef,
  MenubarTriggerProps,
  MenubarTriggerRef,
} from './types';

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'bg-background flex h-9 items-center space-x-1 rounded-md border p-1 shadow-sm',
      className
    )}
    {...props}
  />
)) as MenubarComponent;
Menubar.displayName = MenubarPrimitive.Root.displayName;

Menubar.Menu = MenubarPrimitive.Menu;
Menubar.Menu.displayName = 'Menubar.Menu';

Menubar.Group = MenubarPrimitive.Group;
Menubar.Group.displayName = 'Menubar.Group';

Menubar.Portal = MenubarPrimitive.Portal;
Menubar.Portal.displayName = 'Menubar.Portal';

Menubar.Sub = MenubarPrimitive.Sub;
Menubar.Sub.displayName = 'Menubar.Sub';

Menubar.RadioGroup = MenubarPrimitive.RadioGroup;
Menubar.RadioGroup.displayName = 'Menubar.RadioGroup';

Menubar.Trigger = React.forwardRef<MenubarTriggerRef, MenubarTriggerProps>(
  ({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none',
        className
      )}
      {...props}
    />
  )
);
Menubar.Trigger.displayName = 'Menubar.Trigger';

Menubar.SubTrigger = React.forwardRef<
  MenubarSubTriggerRef,
  MenubarSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
));
Menubar.SubTrigger.displayName = 'Menubar.SubTrigger';

Menubar.SubContent = React.forwardRef<
  MenubarSubContentRef,
  MenubarSubContentProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
      className
    )}
    {...props}
  />
));
Menubar.SubContent.displayName = 'Menubar.SubContent';

Menubar.Content = React.forwardRef<MenubarContentRef, MenubarContentProps>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md',
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
Menubar.Content.displayName = 'Menubar.Content';

Menubar.Item = React.forwardRef<MenubarItemRef, MenubarItemProps>(
  ({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item
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
Menubar.Item.displayName = 'Menubar.Item';

Menubar.CheckboxItem = React.forwardRef<
  MenubarCheckboxItemRef,
  MenubarCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
Menubar.CheckboxItem.displayName = 'Menubar.CheckboxItem';

Menubar.RadioItem = React.forwardRef<
  MenubarRadioItemRef,
  MenubarRadioItemProps
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
Menubar.RadioItem.displayName = 'Menubar.RadioItem';

Menubar.Label = React.forwardRef<MenubarLabelRef, MenubarLAbelProps>(
  ({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
Menubar.Label.displayName = 'Menubar.Label';

Menubar.Separator = React.forwardRef<
  MenubarSeparatorRef,
  MenubarSeparatorProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
));
Menubar.Separator.displayName = 'Menubar.Separator';

Menubar.Shortcut = ({ className, ...props }: MenubarShortcutProps) => {
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
Menubar.Shortcut.displayName = 'Menubar.Shortcut';

export { Menubar };
