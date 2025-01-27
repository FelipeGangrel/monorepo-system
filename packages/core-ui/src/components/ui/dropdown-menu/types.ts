import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';

export type DropdownMenuSubTriggerRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.SubTrigger
>;
export type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export type DropdownMenuSubContentRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.SubContent
>;
export type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

export type DropdownManuContentRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.Content
>;
export type DropdownMenuContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

export type DropdownMenuItemRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.Item
>;
export type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean;
};

export type DropdownMenuCheckboxItemRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
export type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export type DropdownMenuRadioItemRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.RadioItem
>;
export type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

export type DropdownMenuLabelRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.Label
>;
export type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
> & {
  inset?: boolean;
};

export type DropdownMenuSeparatorRef = React.ComponentRef<
  typeof DropdownMenuPrimitive.Separator
>;
export type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

export type DropdownShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

export type DropdownMenuComponent = typeof DropdownMenuPrimitive.Root & {
  Trigger: typeof DropdownMenuPrimitive.Trigger;
  Group: typeof DropdownMenuPrimitive.Group;
  Portal: typeof DropdownMenuPrimitive.Portal;
  Sub: typeof DropdownMenuPrimitive.Sub;
  RadioGroup: typeof DropdownMenuPrimitive.RadioGroup;
  SubTrigger: React.ForwardRefExoticComponent<
    DropdownMenuSubTriggerProps & React.RefAttributes<DropdownMenuSubTriggerRef>
  >;
  SubContent: React.ForwardRefExoticComponent<
    DropdownMenuSubContentProps & React.RefAttributes<DropdownMenuSubContentRef>
  >;
  Content: React.ForwardRefExoticComponent<
    DropdownMenuContentProps & React.RefAttributes<DropdownManuContentRef>
  >;
  Item: React.ForwardRefExoticComponent<
    DropdownMenuItemProps & React.RefAttributes<DropdownMenuItemRef>
  >;
  CheckboxItem: React.ForwardRefExoticComponent<
    DropdownMenuCheckboxItemProps &
      React.RefAttributes<DropdownMenuCheckboxItemRef>
  >;
  RadioItem: React.ForwardRefExoticComponent<
    DropdownMenuRadioItemProps & React.RefAttributes<DropdownMenuRadioItemRef>
  >;
  Label: React.ForwardRefExoticComponent<
    DropdownMenuLabelProps & React.RefAttributes<DropdownMenuLabelRef>
  >;
  Separator: React.ForwardRefExoticComponent<
    DropdownMenuSeparatorProps & React.RefAttributes<DropdownMenuSeparatorRef>
  >;
  Shortcut: React.FunctionComponent<DropdownShortcutProps>;
};
