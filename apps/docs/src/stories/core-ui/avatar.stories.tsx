import { Avatar } from '@felipegangrel/core-ui';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Avatar.Root> = {
  title: 'core-ui/Avatar',
  component: Avatar.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = () => (
  <Avatar.Root>
    <Avatar.Image
      src="https://avatar.iran.liara.run/public"
      alt="User Avatar"
    />
    <Avatar.Fallback>AB</Avatar.Fallback>
  </Avatar.Root>
);

export const WithFallback = () => (
  <Avatar.Root>
    <Avatar.Fallback>AB</Avatar.Fallback>
  </Avatar.Root>
);

export const CustomSize = () => (
  <Avatar.Root className="h-16 w-16">
    <Avatar.Image
      src="https://avatar.iran.liara.run/public"
      alt="Custom Size Avatar"
    />
    <Avatar.Fallback>AB</Avatar.Fallback>
  </Avatar.Root>
);

export const WithoutImage = () => (
  <Avatar.Root>
    <Avatar.Fallback>JD</Avatar.Fallback>
  </Avatar.Root>
);

export const CustomStyle = () => (
  <Avatar.Root className="border-2 border-blue-500 shadow-lg">
    <Avatar.Image
      src="https://avatar.iran.liara.run/public"
      alt="Styled Avatar"
    />
    <Avatar.Fallback>XY</Avatar.Fallback>
  </Avatar.Root>
);

export const WithBrokenImage = () => (
  <Avatar.Root>
    <Avatar.Image
      src="broken-link.jpg" // Intentionally broken link
      alt="Broken Avatar"
    />
    <Avatar.Fallback>??</Avatar.Fallback>
  </Avatar.Root>
);
