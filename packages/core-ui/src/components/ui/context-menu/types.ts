import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as React from 'react';

export type ContextMenuSubTriggerRef = React.ComponentRef<
  typeof ContextMenuPrimitive.SubTrigger
>;
export type ContextMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export type ContextMenuSubContentRef = React.ComponentRef<
  typeof ContextMenuPrimitive.SubContent
>;
export type ContextMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
>;

export type ContextMenuContentRef = React.ComponentRef<
  typeof ContextMenuPrimitive.Content
>;
export type ContextMenuContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
>;

export type ContextMenuItemRef = React.ComponentRef<
  typeof ContextMenuPrimitive.Item
>;
export type ContextMenuItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> & {
  inset?: boolean;
};

export type ContextMenuCheckboxItemRef = React.ComponentRef<
  typeof ContextMenuPrimitive.CheckboxItem
>;
export type ContextMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
>;

export type ContextMenuRadioItemRef = React.ComponentRef<
  typeof ContextMenuPrimitive.RadioItem
>;
export type ContextMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
>;

export type ContextMenuLabelRef = React.ComponentRef<
  typeof ContextMenuPrimitive.Label
>;
export type ContextMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> & {
  inset?: boolean;
};

export type ContextMenuSeparatorRef = React.ComponentRef<
  typeof ContextMenuPrimitive.Separator
>;
export type ContextMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Separator
>;

export type ContextMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

export type ContextMenuComponent = typeof ContextMenuPrimitive.Root & {
  Trigger: typeof ContextMenuPrimitive.Trigger;
  Group: typeof ContextMenuPrimitive.Group;
  Portal: typeof ContextMenuPrimitive.Portal;
  Sub: typeof ContextMenuPrimitive.Sub;
  RadioGroup: typeof ContextMenuPrimitive.RadioGroup;
  SubTrigger: React.ForwardRefExoticComponent<
    ContextMenuSubTriggerProps & React.RefAttributes<ContextMenuSubTriggerRef>
  >;
  SubContent: React.ForwardRefExoticComponent<
    ContextMenuSubContentProps & React.RefAttributes<ContextMenuSubContentRef>
  >;
  Content: React.ForwardRefExoticComponent<
    ContextMenuContentProps & React.RefAttributes<ContextMenuContentRef>
  >;
  Item: React.ForwardRefExoticComponent<
    ContextMenuItemProps & React.RefAttributes<ContextMenuItemRef>
  >;
  CheckboxItem: React.ForwardRefExoticComponent<
    ContextMenuCheckboxItemProps &
      React.RefAttributes<ContextMenuCheckboxItemRef>
  >;
  RadioItem: React.ForwardRefExoticComponent<
    ContextMenuRadioItemProps & React.RefAttributes<ContextMenuRadioItemRef>
  >;
  Label: React.ForwardRefExoticComponent<
    ContextMenuLabelProps & React.RefAttributes<ContextMenuLabelRef>
  >;
  Separator: React.ForwardRefExoticComponent<
    ContextMenuSeparatorProps & React.RefAttributes<ContextMenuSeparatorRef>
  >;
  Shortcut: React.FunctionComponent<ContextMenuShortcutProps>;
};
