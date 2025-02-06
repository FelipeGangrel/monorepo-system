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
        'core-flex core-h-full core-w-full core-flex-col core-overflow-hidden core-rounded-md core-bg-popover core-text-popover-foreground',
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
      <Dialog.Content className="core-overflow-hidden core-p-0">
        <Command className="[&_[cmdk-group-heading]]:core-px-2 [&_[cmdk-group-heading]]:core-font-medium [&_[cmdk-group-heading]]:core-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:core-pt-0 [&_[cmdk-group]]:core-px-2 [&_[cmdk-input-wrapper]_svg]:core-h-5 [&_[cmdk-input-wrapper]_svg]:core-w-5 [&_[cmdk-input]]:core-h-12 [&_[cmdk-item]]:core-px-2 [&_[cmdk-item]]:core-py-3 [&_[cmdk-item]_svg]:core-h-5 [&_[cmdk-item]_svg]:core-w-5">
          {children}
        </Command>
      </Dialog.Content>
    </Dialog>
  );
};
Command.Dialog.displayName = 'Command.Dialog';

Command.Input = React.forwardRef<CommandInputRef, CommandInputProps>(
  ({ className, ...props }, ref) => (
    <div
      className="core-flex core-items-center core-border-b core-px-3"
      cmdk-input-wrapper=""
    >
      <Search className="core-mr-2 core-h-4 core-w-4 core-shrink-0 core-opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'core-flex core-h-10 core-w-full core-rounded-md core-bg-transparent core-py-3 core-text-sm core-outline-none placeholder:core-text-muted-foreground disabled:core-cursor-not-allowed disabled:core-opacity-50',
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
        'core-max-h-[300px] core-overflow-y-auto core-overflow-x-hidden',
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
      className="core-py-6 core-text-center core-text-sm"
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
        'core-overflow-hidden core-p-1 core-text-foreground [&_[cmdk-group-heading]]:core-px-2 [&_[cmdk-group-heading]]:core-py-1.5 [&_[cmdk-group-heading]]:core-text-xs [&_[cmdk-group-heading]]:core-font-medium [&_[cmdk-group-heading]]:core-text-muted-foreground',
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
    className={cn('core--mx-1 core-h-px core-bg-border', className)}
    {...props}
  />
));
Command.Separator.displayName = 'Command.Separator';

Command.Item = React.forwardRef<CommandItemRef, CommandItemProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'core-relative core-flex core-cursor-default core-gap-2 core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none data-[disabled=true]:core-pointer-events-none data-[selected=true]:core-bg-accent data-[selected=true]:core-text-accent-foreground data-[disabled=true]:core-opacity-50 [&_svg]:core-pointer-events-none [&_svg]:core-size-4 [&_svg]:core-shrink-0',
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
        'core-ml-auto core-text-xs core-tracking-widest core-text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
Command.Shortcut.displayName = 'Command.Shortcut';

export { Command };
