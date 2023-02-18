//External import
import { Theme, alpha, createTheme } from "@mui/material";

import CssBaselineOverrides from "./cssBaselineOverrides";
//Internal import
import { lightPalette } from "../palettes";
import variantsGenerator from "./typographyVariantsGenerator";

const create = (dark?: boolean): Theme => {
  // const palette = lightPalette;
  const theme = createTheme({
    palette: lightPalette,
    typography: {
      fontFamily: `Poppins, sans-serif`,
      body1: {
        fontFamily: "Roboto, sans-serif",
      },
      body2: {
        fontFamily: "Roboto, sans-serif",
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiCssBaseline: CssBaselineOverrides,
    },
  });

  const media = theme.breakpoints.down("md");

  /* Responsive typographies here (only base typographies(for example header. not headerBold)) or default MUI */
  theme.typography.header = {
    fontSize: "52px",
    lineHeight: "63px",
    [media]: {
      fontSize: "40px",
      lineHeight: "45px",
    },
  };

  theme.typography.large = {
    fontSize: "48px",
    lineHeight: "58px",
    [media]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
  };
  theme.typography.subheading = {
    fontSize: "32px",
    lineHeight: "39px",
    [media]: {
      fontSize: "24px",
      lineHeight: "29px",
    },
  };
  theme.typography.heading = {
    fontSize: "24px",
    lineHeight: "39px",
    [media]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
  };
  theme.typography.subtitle = {
    fontSize: "18px",
    lineHeight: "30px",
    [media]: {
      fontSize: "16px",
      lineHeight: "25px",
    },
  };
  theme.typography.body = {
    fontSize: "16px",
    lineHeight: "26px",
    [media]: {
      fontSize: "14px",
      lineHeight: "22px",
    },
  };
  theme.typography.small = {
    fontSize: "14px",
    lineHeight: "22px",
    [media]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  };
  theme.typography.extraSmall = {
    fontSize: "12px",
    lineHeight: "20px",
    [media]: {
      fontSize: "12px",
      lineHeight: "15px",
    },
  };
  theme.typography = {
    ...theme.typography,
    ...variantsGenerator(theme.typography),
  };

  return theme;
};

export default create;
