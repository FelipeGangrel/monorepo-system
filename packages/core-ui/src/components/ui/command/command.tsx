import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';

import { Dialog } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import type {
  CommandComponent,
  CommandDialogProps,
  CommandEmptyProps,
  CommandEmptyRef,
  CommandGroupProps,
  CommandGroupRef,
  CommandInputProps,
  CommandInputRef,
  CommandItemProps,
  CommandItemRef,
  CommandListProps,
  CommandListRef,
  CommandProps,
  CommandRef,
  CommandSeparatorProps,
  CommandSeparatorRef,
  CommandShortcutProps,
} from './types';

const Command = React.forwardRef<CommandRef, CommandProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        className
      )}
      {...props}
    />
  )
) as CommandComponent;
Command.displayName = 'Command';

Command.Dialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <Dialog.Content className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </Dialog.Content>
    </Dialog>
  );
};
Command.Dialog.displayName = 'Command.Dialog';

Command.Input = React.forwardRef<CommandInputRef, CommandInputProps>(
  ({ className, ...props }, ref) => (
    // eslint-disable-next-line react/no-unknown-property
    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
);
Command.Input.displayName = 'Command.Input';

Command.List = React.forwardRef<CommandListRef, CommandListProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.List
      ref={ref}
      className={cn(
        'max-h-[300px] overflow-y-auto overflow-x-hidden',
        className
      )}
      {...props}
    />
  )
);
Command.List.displayName = 'Command.List';

Command.Empty = React.forwardRef<CommandEmptyRef, CommandEmptyProps>(
  (props, ref) => (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm"
      {...props}
    />
  )
);
Command.Empty.displayName = 'Command.Empty';

Command.Group = React.forwardRef<CommandGroupRef, CommandGroupProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className
      )}
      {...props}
    />
  )
);
Command.Group.displayName = 'Command.Group';

Command.Separator = React.forwardRef<
  CommandSeparatorRef,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('bg-border -mx-1 h-px', className)}
    {...props}
  />
));
Command.Separator.displayName = 'Command.Separator';

Command.Item = React.forwardRef<CommandItemRef, CommandItemProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className
      )}
      {...props}
    />
  )
);
Command.Item.displayName = 'Command.Item';

Command.Shortcut = ({ className, ...props }: CommandShortcutProps) => {
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
Command.Shortcut.displayName = 'Command.Shortcut';

export { Command };
