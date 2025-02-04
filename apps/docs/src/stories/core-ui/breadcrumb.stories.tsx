import { Breadcrumb } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'core-ui/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};

export const CustomSeparator: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>*</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>*</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};

export const OverflowEllipsis: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/level1">Level 1</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/level5">Level 5</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};

export const CustomLinks: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <button onClick={() => alert('Home clicked')}>Home</button>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};

export const StyledBreadcrumb: Story = {
  render: (args) => (
    <Breadcrumb {...args} className="rounded-md bg-gray-100 p-4">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            className="text-blue-600 hover:underline"
            href="/dashboard"
          >
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link
            className="text-blue-600 hover:underline"
            href="/profile"
          >
            Profile
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Settings</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
};
