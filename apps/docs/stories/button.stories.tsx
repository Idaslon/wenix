import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@wenix/ui';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Confirm',
  },
  argTypes: {
    onClick: () => {},
    children: {
      name: 'Text',
    },
    size: {
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>;

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
};
