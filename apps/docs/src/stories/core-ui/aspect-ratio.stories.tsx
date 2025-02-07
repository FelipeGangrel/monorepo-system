import { AspectRatio } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';

/**
 * Displays content within a desired ratio.
 */
const meta: Meta<typeof AspectRatio> = {
  title: 'core-ui/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="docs-w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

const Image = (
  <img
    src="https://images.unsplash.com/photo-1605030753481-bb38b08c384a?&auto=format&fit=crop&w=400&q=80"
    alt="A house in a forest"
    className="h-full w-full object-cover"
  />
);

export const Ratio1by1: Story = {
  args: {
    children: Image,
    ratio: 1,
  },
  render: (args) => <AspectRatio {...args} />,
};

export const Ratio4by3: Story = {
  args: {
    children: Image,
    ratio: 4 / 3,
  },
  render: (args) => <AspectRatio {...args} />,
};

export const Ratio16by9: Story = {
  args: {
    children: Image,
    ratio: 16 / 9,
  },
};

export const Ratio21by9: Story = {
  args: {
    children: Image,
    ratio: 21 / 9,
  },
};
