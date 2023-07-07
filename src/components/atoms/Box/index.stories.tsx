import { Meta, StoryObj } from '@storybook/react';

import CustomBox from './index';

const meta: Meta<typeof CustomBox> = {
  component: CustomBox,
  args: {
    sx: {
      bgcolor: 'green',
    },
    children: 'hoge',
  },
};

export default meta;

export const Primary: StoryObj<typeof CustomBox> = {
  args: {
    sx: {
      bgcolor: 'red',
    },
    children: 'hoge',
  },
};
