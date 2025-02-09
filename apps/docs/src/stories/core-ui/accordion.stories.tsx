import { Accordion } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';

/**
 * A vertically stacked set of interactive headings that each reveal a section of content.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Core UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-screen max-w-[400px]',
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

/**
 * The default Accordion story demonstrates a single-type accordion
 * with collapsible functionality enabled.
 */
export const Single: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the first item.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the second item.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Accordion Title 3</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the third item.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

/**
 * Demonstrates an accordion with 'multiple' type, allowing
 * multiple items to be open simultaneously.
 */
export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Item 1</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 1.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Item 2</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 2.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Accordion Item 3</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 3.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

/**
 * An Accordion story that demonstrates a non-collapsible
 * single-type accordion.
 */
export const NonCollapsible: Story = {
  args: {
    type: 'single',
    collapsible: false,
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>
          You cannot collapse this once opened.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>
          Second item that cannot be collapsed once opened.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
