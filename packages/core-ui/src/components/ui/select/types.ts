import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';

export type SelectTriggerRef = React.ComponentRef<
  typeof SelectPrimitive.Trigger
>;
export type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;

export type SelectScrollUpButtonRef = React.ComponentRef<
  typeof SelectPrimitive.ScrollUpButton
>;
export type SelectScrollUpButtonProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollUpButton
>;

export type SelectScrollDownButtonRef = React.ComponentRef<
  typeof SelectPrimitive.ScrollDownButton
>;
export type SelectScrollDownButtonProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollDownButton
>;

export type SelectContentRef = React.ComponentRef<
  typeof SelectPrimitive.Content
>;
export type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;

export type SelectLabelRef = React.ComponentRef<typeof SelectPrimitive.Label>;
export type SelectLabelProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Label
>;

export type SelectItemRef = React.ComponentRef<typeof SelectPrimitive.Item>;
export type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

export type SelectSeparatorRef = React.ComponentRef<
  typeof SelectPrimitive.Separator
>;
export type SelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;

export type SelectComponent = typeof SelectPrimitive.Root & {
  Group: typeof SelectPrimitive.Group;
  Value: typeof SelectPrimitive.Value;
  Trigger: React.ForwardRefExoticComponent<
    SelectTriggerProps & React.RefAttributes<SelectTriggerRef>
  >;
  ScrollUpButton: React.ForwardRefExoticComponent<
    SelectScrollUpButtonProps & React.RefAttributes<SelectScrollUpButtonRef>
  >;
  ScrollDownButton: React.ForwardRefExoticComponent<
    SelectScrollDownButtonProps & React.RefAttributes<SelectScrollDownButtonRef>
  >;
  Content: React.ForwardRefExoticComponent<
    SelectContentProps & React.RefAttributes<SelectContentRef>
  >;
  Label: React.ForwardRefExoticComponent<
    SelectLabelProps & React.RefAttributes<SelectLabelRef>
  >;
  Item: React.ForwardRefExoticComponent<
    SelectItemProps & React.RefAttributes<SelectItemRef>
  >;
  Separator: React.ForwardRefExoticComponent<
    SelectSeparatorProps & React.RefAttributes<SelectSeparatorRef>
  >;
};
