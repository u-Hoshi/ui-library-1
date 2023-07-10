import { Meta, StoryObj } from '@storybook/react';

import CustomButton from './index';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  args: {
    text: 'sample',
    onClick: () => alert('ボタンがクリックされました'),
    color: 'primary',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'warning'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof CustomButton> = {
  args: {
    text: 'hoge',
    onClick: () => alert('ボタンがクリックされました'),
    color: 'primary',
  },
};
