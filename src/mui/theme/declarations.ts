/**
 * MUI theme extendations are placed here.
 */

interface main {
  main: string;
}

export interface PaletteExtending {
  extends: {
    lightYellow: main;
    yellow: main;
    blue: main;
  };
}

export const typographyWeights = [
  "Light",
  "Regular",
  "Medium",
  "Bold",
  "Black",
] as const;
export const baseTypographyVariants = [
  "header",
  "large",
  "subheading",
  "heading",
  "body",
  "subtitle",
  "small",
  "extraSmall",
] as const;

type BaseTypographyVariantsTuple = typeof baseTypographyVariants;
type BaseTypographyVariants = BaseTypographyVariantsTuple[number];
type TypographyWeightsTuple = typeof typographyWeights;
type TypographyWeightsUnion = TypographyWeightsTuple[number];
type TypographyWeightNumbers = {
  [key in TypographyWeightsUnion]: number;
};
export const typographyWeightNumbers: TypographyWeightNumbers = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  Bold: 700,
  Black: 900,
};

export type AllVariants = `${BaseTypographyVariants}${TypographyWeightsUnion}`;

type TypographyVariantOverrides = {
  [key in AllVariants]: true;
};

export type TypographyInThemeVariants = {
  [key in AllVariants]: React.CSSProperties;
};
export type BaseTypographyInThemeVariant = {
  [key in BaseTypographyVariants]: React.CSSProperties;
};

declare module "@mui/material/styles" {
  export interface Palette extends PaletteExtending {}

  export interface PaletteOptions extends PaletteExtending {}

  interface Theme {}

  interface ThemeOptions {}

  interface TypographyVariants
    extends TypographyInThemeVariants,
      BaseTypographyInThemeVariant {}

  interface TypographyVariantsOptions
    extends Partial<TypographyInThemeVariants & BaseTypographyInThemeVariant> {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides extends TypographyVariantOverrides {
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    bordered: true;
  }
}
