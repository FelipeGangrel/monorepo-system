import { Avatar } from '@felipegangrel/core-ui';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'core-ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = () => (
  <Avatar>
    <Avatar.Image
      src="https://avatar.iran.liara.run/public"
      alt="User Avatar"
    />
    <Avatar.Fallback>AB</Avatar.Fallback>
  </Avatar>
);

export const WithFallback = () => (
  <Avatar>
    <Avatar.Fallback>AB</Avatar.Fallback>
  </Avatar>
);

export const CustomSize = () => (
  <Avatar className="h-16 w-16">
    <Avatar.Image
      src="https://avatar.iran.liara.run/public"
      alt="Custom Size Avatar"
    />
    <Avatar.Fallback>AB</Avatar.Fallback>
  </Avatar>
);

export const WithoutImage = () => (
  <Avatar>
    <Avatar.Fallback>JD</Avatar.Fallback>
  </Avatar>
);

export const CustomStyle = () => (
  <Avatar className="border-2 border-blue-500 shadow-lg">
    <Avatar.Image
      src="https://avatar.iran.liara.run/public"
      alt="Styled Avatar"
    />
    <Avatar.Fallback>XY</Avatar.Fallback>
  </Avatar>
);

export const WithBrokenImage = () => (
  <Avatar>
    <Avatar.Image
      src="broken-link.jpg" // Intentionally broken link
      alt="Broken Avatar"
    />
    <Avatar.Fallback>??</Avatar.Fallback>
  </Avatar>
);
