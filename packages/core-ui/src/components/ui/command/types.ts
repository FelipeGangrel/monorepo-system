import type { DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';

export type CommandRef = React.ComponentRef<typeof CommandPrimitive>;
export type CommandProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
>;

export type CommandDialogProps = DialogProps;

export type CommandInputRef = React.ComponentRef<typeof CommandPrimitive.Input>;
export type CommandInputProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

export type CommandListRef = React.ComponentRef<typeof CommandPrimitive.List>;
export type CommandListProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;

export type CommandEmptyRef = React.ComponentRef<typeof CommandPrimitive.Empty>;
export type CommandEmptyProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
>;

export type CommandGroupRef = React.ComponentRef<typeof CommandPrimitive.Group>;
export type CommandGroupProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

export type CommandSeparatorRef = React.ComponentRef<
  typeof CommandPrimitive.Separator
>;
export type CommandSeparatorProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;

export type CommandItemRef = React.ComponentRef<typeof CommandPrimitive.Item>;
export type CommandItemProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;

export type CommandShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

export type CommandComponent = React.ForwardRefExoticComponent<
  CommandProps & React.RefAttributes<CommandRef>
> & {
  Input: React.ForwardRefExoticComponent<
    CommandInputProps & React.RefAttributes<CommandInputRef>
  >;
  Dialog: React.FunctionComponent<CommandDialogProps>;
  List: React.ForwardRefExoticComponent<
    CommandListProps & React.RefAttributes<CommandListRef>
  >;
  Empty: React.ForwardRefExoticComponent<
    CommandEmptyProps & React.RefAttributes<CommandEmptyRef>
  >;
  Group: React.ForwardRefExoticComponent<
    CommandGroupProps & React.RefAttributes<CommandGroupRef>
  >;
  Separator: React.ForwardRefExoticComponent<
    CommandSeparatorProps & React.RefAttributes<CommandSeparatorRef>
  >;
  Item: React.ForwardRefExoticComponent<
    CommandItemProps & React.RefAttributes<CommandItemRef>
  >;
  Shortcut: React.FunctionComponent<CommandShortcutProps>;
};
