import { Command } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';
import * as React from 'react';

/**
 * Fast, composable, unstyled command menu for React.
 */
const meta: Meta<typeof Command> = {
  title: 'core-ui/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Example: Story = {
  args: {
    className: 'docs-w-screen docs-max-w-[400px]',
    children: (
      <>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>Calendar</Command.Item>
            <Command.Item>Search Emoji</Command.Item>
            <Command.Item>Calculator</Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>Profile</Command.Item>
            <Command.Item>Billing</Command.Item>
            <Command.Item>Settings</Command.Item>
          </Command.Group>
        </Command.List>
      </>
    ),
  },
};

/**
 * A Command component demonstrating a dialog with keyboard shortcut support.
 * Features include:
 * - Shortcut: Press ⌘+J (Mac) or Ctrl+J (Windows) to open/close the command menu.
 * - Includes input for searching and categorized command groups.
 * - Interactive list items with icons and shortcuts for quick access.
 */
export const WithKeyboardShortcut = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <p className="docs-text-muted-foreground docs-text-sm">
        Press{' '}
        <kbd className="docs-bg-muted docs-text-muted-foreground docs-pointer-events-none docs-inline-flex docs-h-5 docs-select-none docs-items-center docs-gap-1 docs-rounded docs-border docs-px-1.5 docs-font-mono docs-text-[10px] docs-font-medium docs-opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <Calendar />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <Smile />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <Calculator />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <User />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <CreditCard />
              <span>Billing</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <Settings />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};
