//External import
import { PaletteOptions } from "@mui/material";
import { PaletteExtending } from "../theme/declarations";
/**
 * Light palette
 */
export type ICustomizedPalette = PaletteOptions & PaletteExtending;

const palette: ICustomizedPalette = {
  primary: {
    main: "#9E3F41",
  },
  secondary: {
    main: "#FFDAD3",
  },
  grey: {
    100: "#F5F5F5",
  },
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
  error: {
    main: "#D60808",
  },
  extends: {
    lightYellow: {
      main: "#FFF3E0",
    },
    yellow: {
      main: "#FDCC0D",
    },
    blue: {
      main: "#2A4F87",
    },
  },
};

export default palette;
