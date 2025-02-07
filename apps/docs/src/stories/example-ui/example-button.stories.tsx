import { ExampleButton } from '@felipegangrel/example-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * A button that extends from the button present on the core-ui package.
 * Its purpose is only for demonstrating how we can create multiple component
 * packages by extending from another.
 */
const meta: Meta<typeof ExampleButton> = {
  title: 'example-ui/Example Button',
  component: ExampleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ExampleButton>;

export const Default: Story = {
  args: {
    children: 'Example Button',
  },
};
