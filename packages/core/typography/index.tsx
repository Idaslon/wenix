import { CSS } from '@stitches/react';
import React, { HTMLAttributes } from 'react';
import {
  TypographyBody1,
  TypographyBody2,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographySubtitle1,
  TypographySubtitle2,
} from './styles';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
export type TypographySizes = 'small' | 'medium' | 'large';

interface BaseProps extends HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  css?: CSS;
}

interface Props extends BaseProps {
  variant: TypographyVariants;
  size?: TypographySizes;
}

const elementsBridge = {
  h1: {
    className: 'typography-h1',
    Element: TypographyH1,
  },
  h2: {
    className: 'typography-h2',
    Element: TypographyH2,
  },
  h3: {
    className: 'typography-h3',
    Element: TypographyH3,
  },
  subtitle1: {
    className: 'typography-subtitle1',
    Element: TypographySubtitle1,
  },
  subtitle2: {
    className: 'typography-subtitle2',
    Element: TypographySubtitle2,
  },
  body1: {
    className: 'typography-body1',
    Element: TypographyBody1,
  },
  body2: {
    className: 'typography-body2',
    Element: TypographyBody2,
  },
};

export const Typography: React.FC<Props> = ({ variant, size, children, ...rest }) => {
  const { Element, className } = elementsBridge[variant];

  return (
    <Element className={className} size={size || 'medium'} {...rest}>
      {children}
    </Element>
  );
};
