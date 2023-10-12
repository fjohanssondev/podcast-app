import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    image: 'https://avatars.githubusercontent.com/u/4060187?v=4',
    name: 'John Doe',
    size: 'sm',
    rounded: true,
  },
};