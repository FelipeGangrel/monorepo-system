import { Button, Card, Switch } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { BellRingIcon, CheckIcon } from 'lucide-react';

const meta: Meta<typeof Card.Root> = {
  title: 'core-ui/Card',
  component: Card.Root,
  tags: ['autodocs'],
  args: {
    className: 'w-screen max-w-[400px]',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Card.Root>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Card title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </>
    ),
  },
};

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

export const NotificationsExample: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Notifications</Card.Title>
          <Card.Description>You have 3 unread messages.</Card.Description>
        </Card.Header>
        <Card.Content className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <BellRingIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-muted-foreground text-sm">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
        <Card.Footer>
          <Button className="w-full">
            <CheckIcon /> Mark all as read
          </Button>
        </Card.Footer>
      </>
    ),
  },
};
