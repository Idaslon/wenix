import { Meta, StoryObj } from '@storybook/react';
import { Form, Input, InputProps } from '@wenix/ui';
import { EXCLUDED_ARG_TYPES } from '../stories-helpers';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter information here',
  },
  argTypes: {
    ...EXCLUDED_ARG_TYPES,
  },
  decorators: [
    (Story) => {
      return <Form css={{ maxWidth: '600px', input: { width: '100%' } }}>{Story()}</Form>;
    },
  ],
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
};
