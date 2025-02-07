import { ContextMenu } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 */
const meta: Meta<typeof ContextMenu> = {
  title: 'core-ui/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

/**
 * An example usage of the `ContextMenu` component, showcasing various menu items,
 * submenus, shortcuts, and states (e.g., disabled, checked).
 *
 * Right-click to open the context menu
 */
export const Example: Story = {
  args: {
    children: (
      <>
        <ContextMenu.Trigger className="docs-flex docs-h-[150px] docs-w-[300px] docs-items-center docs-justify-center docs-rounded-md docs-border docs-border-dashed docs-text-sm">
          Right click here
        </ContextMenu.Trigger>
        <ContextMenu.Content className="docs-w-64">
          <ContextMenu.Item inset>
            Back
            <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item inset disabled>
            Forward
            <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item inset>
            Reload
            <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
            <ContextMenu.SubContent className="docs-w-48">
              <ContextMenu.Item>
                Save Page As...
                <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
              <ContextMenu.Item>Name Window...</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Developer Tools</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.CheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.RadioGroup value="pedro">
            <ContextMenu.Label inset>People</ContextMenu.Label>
            <ContextMenu.Separator />
            <ContextMenu.RadioItem value="pedro">
              Pedro Duarte
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="colm">
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </>
    ),
  },
};
