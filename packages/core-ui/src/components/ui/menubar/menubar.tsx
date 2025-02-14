import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '#/lib/utils';

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
      'core-flex core-h-9 core-items-center core-space-x-1 core-rounded-md core-border core-bg-background core-p-1 core-shadow-sm',
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
        'core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-3 core-py-1 core-text-sm core-font-medium core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[state=open]:core-bg-accent data-[state=open]:core-text-accent-foreground',
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
      'core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[state=open]:core-bg-accent data-[state=open]:core-text-accent-foreground',
      inset && 'core-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="core-ml-auto core-h-4 core-w-4" />
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
      'core-z-50 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-lg data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
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
          'core-z-50 core-min-w-[12rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-md data-[state=open]:core-animate-in data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
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
        'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
        inset && 'core-pl-8',
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
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="core-h-4 core-w-4" />
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
      'core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50',
      className
    )}
    {...props}
  >
    <span className="core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="core-h-4 core-w-4 core-fill-current" />
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
        'core-px-2 core-py-1.5 core-text-sm core-font-semibold',
        inset && 'core-pl-8',
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
    className={cn('core--mx-1 core-my-1 core-h-px core-bg-muted', className)}
    {...props}
  />
));
Menubar.Separator.displayName = 'Menubar.Separator';

Menubar.Shortcut = ({ className, ...props }: MenubarShortcutProps) => {
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
Menubar.Shortcut.displayName = 'Menubar.Shortcut';

export { Menubar };
