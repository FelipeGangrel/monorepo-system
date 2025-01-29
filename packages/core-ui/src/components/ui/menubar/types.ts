import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { MenubarRadioItem } from '@radix-ui/react-menubar';
import * as React from 'react';

export type MenubarTriggerRef = React.ComponentRef<
  typeof MenubarPrimitive.Trigger
>;
export type MenubarTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
>;

export type MenubarSubTriggerRef = React.ComponentRef<
  typeof MenubarPrimitive.SubTrigger
>;
export type MenubarSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export type MenubarSubContentRef = React.ComponentRef<
  typeof MenubarPrimitive.SubContent
>;
export type MenubarSubContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
>;

export type MenubarContentRef = React.ComponentRef<
  typeof MenubarPrimitive.Content
>;
export type MenubarContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
>;

export type MenubarItemRef = React.ComponentRef<typeof MenubarPrimitive.Item>;
export type MenubarItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> & {
  inset?: boolean;
};

export type MenubarCheckboxItemRef = React.ComponentRef<
  typeof MenubarPrimitive.CheckboxItem
>;
export type MenubarCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
>;

export type MenubarRadioItemRef = React.ComponentRef<typeof MenubarRadioItem>;
export type MenubarRadioItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarRadioItem
>;

export type MenubarLabelRef = React.ComponentRef<typeof MenubarPrimitive.Label>;
export type MenubarLAbelProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & {
  inset?: boolean;
};

export type MenubarSeparatorRef = React.ComponentRef<
  typeof MenubarPrimitive.Separator
>;
export type MenubarSeparatorProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
>;

export type MenubarShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

export type MenubarComponent = typeof MenubarPrimitive.Root & {
  Menu: typeof MenubarPrimitive.Menu;
  Group: typeof MenubarPrimitive.Group;
  Portal: typeof MenubarPrimitive.Portal;
  Sub: typeof MenubarPrimitive.Sub;
  RadioGroup: typeof MenubarPrimitive.RadioGroup;
  Trigger: React.ForwardRefExoticComponent<
    MenubarTriggerProps & React.RefAttributes<MenubarTriggerRef>
  >;
  SubTrigger: React.ForwardRefExoticComponent<
    MenubarSubTriggerProps & React.RefAttributes<MenubarSubTriggerRef>
  >;
  SubContent: React.ForwardRefExoticComponent<
    MenubarSubContentProps & React.RefAttributes<MenubarSubContentRef>
  >;
  Content: React.ForwardRefExoticComponent<
    MenubarContentProps & React.RefAttributes<MenubarContentRef>
  >;
  Item: React.ForwardRefExoticComponent<
    MenubarItemProps & React.RefAttributes<MenubarItemRef>
  >;
  CheckboxItem: React.ForwardRefExoticComponent<
    MenubarCheckboxItemProps & React.RefAttributes<MenubarCheckboxItemRef>
  >;
  RadioItem: React.ForwardRefExoticComponent<
    MenubarRadioItemProps & React.RefAttributes<MenubarRadioItemRef>
  >;
  Label: React.ForwardRefExoticComponent<
    MenubarLAbelProps & React.RefAttributes<MenubarLabelRef>
  >;
  Separator: React.ForwardRefExoticComponent<
    MenubarSeparatorProps & React.RefAttributes<MenubarSeparatorRef>
  >;
  Shortcut: React.FunctionComponent<MenubarShortcutProps>;
};
