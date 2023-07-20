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
    align: {
      control: 'radio',
      options: ['left', 'center', 'right', 'justify'],
    },
    variant: {
      control: 'radio',
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
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
