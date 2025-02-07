import { Alert } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { AlertTriangleIcon } from 'lucide-react';

/**
 * Displays a callout for user attention.
 */
const meta: Meta<typeof Alert> = {
  title: 'core-ui/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Example: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <Alert.Title>Default Alert</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </>
    ),
  },
  render: (args) => <Alert {...args} />,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <Alert.Title>Destructive Alert</Alert.Title>
        <Alert.Description>
          This is a destructive alert. It indicates an error or critical action.
        </Alert.Description>
      </>
    ),
  },
  render: (args) => <Alert {...args} />,
};

export const WithCustomStyles: Story = {
  args: {
    variant: 'default',
    className: 'docs-bg-blue-100 docs-text-blue-900 docs-border-blue-300',
    children: (
      <>
        <Alert.Title>Custom Styled Alert</Alert.Title>
        <Alert.Description>
          This alert has custom styles applied to it via the `className` prop.
        </Alert.Description>
      </>
    ),
  },
  render: (args) => <Alert {...args} />,
};

export const WithoutTitle: Story = {
  args: {
    variant: 'default',
    children: (
      <Alert.Description>
        This alert only has a description and no title.
      </Alert.Description>
    ),
  },
  render: (args) => <Alert {...args} />,
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    children: (
      <div className="docs-flex docs-items-center">
        <AlertTriangleIcon className="docs-h-4 docs-w-4 docs-mr-4" />
        <div>
          <Alert.Title>Alert with icon</Alert.Title>
          <Alert.Description>This is a alert with icon.</Alert.Description>
        </div>
      </div>
    ),
  },
  render: (args) => <Alert {...args} />,
};
