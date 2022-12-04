import { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographyProps } from '@wenix/ui';

import { EXCLUDED_ARG_TYPES } from '../stories-helpers';

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Text goes here',
  },
  argTypes: {
    children: {
      name: 'Text',
    },
    size: {
      defaultValue: 'medium',
      control: { type: 'inline-radio' },
    },
    ...EXCLUDED_ARG_TYPES,
  },
} as Meta<TypographyProps>;

export const H1: StoryObj<TypographyProps> = {
  args: {
    variant: 'h1',
  },
};

export const H2: StoryObj<TypographyProps> = {
  args: {
    variant: 'h2',
  },
};

export const H3: StoryObj<TypographyProps> = {
  args: {
    variant: 'h3',
  },
};

export const Subtitle1: StoryObj<TypographyProps> = {
  args: {
    variant: 'subtitle1',
  },
};

export const Subtitle2: StoryObj<TypographyProps> = {
  args: {
    variant: 'subtitle2',
  },
};

export const Body1: StoryObj<TypographyProps> = {
  args: {
    variant: 'body1',
  },
};

export const Body2: StoryObj<TypographyProps> = {
  args: {
    variant: 'body2',
  },
};
