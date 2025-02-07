import { Button, Card, Switch } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { BellRingIcon, CheckIcon } from 'lucide-react';

/**
 * Displays a card with header, content, and footer.
 */
const meta: Meta<typeof Card> = {
  title: 'core-ui/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    className: 'docs-w-screen docs-max-w-[400px]',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Example: Story = {
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
        <Card.Content className="docs-grid docs-gap-4">
          <div className="docs-flex docs-items-center docs-space-x-4 docs-rounded-md docs-border docs-p-4">
            <BellRingIcon />
            <div className="docs-flex-1 docs-space-y-1">
              <p className="docs-text-sm docs-font-medium docs-leading-none">
                Push Notifications
              </p>
              <p className="docs-text-muted-foreground docs-text-sm">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="docs-mb-4 docs-grid docs-grid-cols-[25px_1fr] docs-items-start docs-pb-4 last:docs-mb-0 last:docs-pb-0"
              >
                <span className="docs-docs-flex docs-h-2 docs-w-2 docs-translate-y-1 docs-rounded-full docs-bg-sky-500" />
                <div className="docs-space-y-1">
                  <p className="docs-text-sm docs-font-medium docs-leading-none">
                    {notification.title}
                  </p>
                  <p className="docs-text-muted-foreground docs-text-sm">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
        <Card.Footer>
          <Button className="docs-w-full">
            <CheckIcon /> Mark all as read
          </Button>
        </Card.Footer>
      </>
    ),
  },
};
