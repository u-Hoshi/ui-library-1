import { Meta, StoryObj } from '@storybook/react';

import CustomAvatar from './index';

const meta: Meta<typeof CustomAvatar> = {
  component: CustomAvatar,
  args: {
    onClick: () => alert('ボタンがクリックされました'),
    src: '/1221.png',
    alt: 'リンゴ',
    sx: {
      width: Number,
      height: Number,
    },
  },
  argTypes: {
    src: {
      control: 'radio',
      options: ['/1221.png', '/2412.png', '/2415.png'],
    },
  },
};

export default meta;

export const Index: StoryObj<typeof CustomAvatar> = {
  args: {
    onClick: () => alert('ボタンがクリックされました'),
    src: '/1221.png',
    alt: 'リンゴ',
    sx: {
      width: 100,
      height: 100,
    },
  },
};
