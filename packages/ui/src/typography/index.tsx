import { CSS } from '@stitches/react';
import React from 'react';
import { HTMLAttributes } from 'react';
import { CoreSizes } from '../../types';
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
export type TypographySizes = CoreSizes;

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  css?: CSS;

  variant: TypographyVariants;
  size?: TypographySizes;
}

// TODO: Find a way to improve this
export type TypographyRef = HTMLParagraphElement;

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

export const Typography = ({ variant, size, children, ...rest }: TypographyProps) => {
  const { Element, className } = elementsBridge[variant];

  return (
    <Element className={className} size={size || 'medium'} {...rest}>
      {children}
    </Element>
  );
};
