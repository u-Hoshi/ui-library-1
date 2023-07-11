import { Meta, StoryObj } from '@storybook/react';

import Typography from './index';

const meta: Meta<typeof Typography> = {
  component: Typography,
  args: {
    text: 'sample',
    color: 'primary',
    fontSize: '16px',
    align: 'left',
    variant: 'body1',
  },
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Typography> = {
  args: {
    text: 'sample',
    color: 'primary',
    fontSize: '16px',
    align: 'left',
    variant: 'body1',
  },
};
