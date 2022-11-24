import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      commonWhite: "hsl(0, 0%, 100%)",
      commonBlack: "hsl(220, 33%, 9%)",

      gray200: "hsl(0, 0%, 94%)",
      gray300: "hsl(0, 0%, 88%)",
      grey350: "hsl(0, 0%, 87%)",
      grey500: "hsl(0, 0%, 58%)",
      grey600: "hsl(0, 0%, 48%)",
      grey700: "hsl(0, 0%, 36%)",
      grey800: "hsl(0, 0%, 30%)",
    },
    zIndices: {
      drawerIndex: 1,
      floatIndex: 2,
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",

      section: "150px",
    },
  },
  media: {
    extraSmall: "(min-width: 0px)",
    small: "(min-width: 360px)",
    medium: "(min-width: 700px)",
    large: "(min-width: 1024px)",
    extraLarge: "(min-width: 1200px)",
    wide: "(min-width: 1440px)",
  },
});

export function spacing(value: number) {
  return value * 4;
}
