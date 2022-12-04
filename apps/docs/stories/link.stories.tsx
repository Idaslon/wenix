import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from '@wenix/ui';

import { EXCLUDED_ARG_TYPES } from '../stories-helpers';

export default {
  title: 'Components/Link',
  component: Link,
  args: {
    href: '#',
    children: 'Click here',
    legacyBehavior: false,
  },
  argTypes: {
    href: {
      name: 'Link',
    },
    children: {
      name: 'Text',
    },
    onClick: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onTouchStart: { table: { disable: true } },
    replace: { table: { disable: true } },
    scroll: { table: { disable: true } },
    shallow: { table: { disable: true } },
    passHref: { table: { disable: true } },
    prefetch: { table: { disable: true } },
    locale: { table: { disable: true } },
    legacyBehavior: { table: { disable: true } },
    ...EXCLUDED_ARG_TYPES,
  },
} as Meta<LinkProps>;

export const Default: StoryObj<LinkProps> = {};
