//External import
import { Theme, alpha, createTheme } from "@mui/material"

import CssBaselineOverrides from "./cssBaselineOverrides"
//Internal import
import { lightPalette } from "../palettes"
import variantsGenerator from "./typographyVariantsGenerator"

const create = (dark?: boolean): Theme => {
  // const palette = lightPalette;
  const theme = createTheme({
    palette: lightPalette,
    typography: {
      fontFamily: `Poppins, sans-serif`,
      body1: {
        fontFamily: "Roboto, sans-serif"
      },
      body2: {
        fontFamily: "Roboto, sans-serif"
      }
    },
    shape: {
      borderRadius: 4
    },
    components: {
      MuiCssBaseline: CssBaselineOverrides,
      MuiButtonBase: {
        defaultProps: {
          disableRipple: false
        },
        styleOverrides: {
          root: {
            boxShadow: "none !important"
          }
        }
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            borderRadius: "8px"
          }
        }
      },
      MuiButton: {
        variants: [
          {
            props: {
              size: "small"
            },
            style: {
              minWidth: 90,
              minHeight: 35,
              height: 35
            }
          },
          {
            props: {
              color: "secondary"
            },
            style: {}
          }
        ],
        styleOverrides: {
          root: {
            minWidth: 100,
            minHeight: 45,
            letterSpacing: 0.5,
            borderRadius: "100px",
            textTransform: "capitalize"
          }
        }
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 2
          }
        }
      },
      MuiBadge: {
        styleOverrides: {
          root: {
            "& .MuiBadge-colorPrimary": {
              color: lightPalette.common.white
            }
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "capitalize"
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          root: {
            zIndex: 1201,
            "& .MuiPaper-root": {
              maxWidth: "350px"
            }
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          popper: {
            "& .MuiTooltip-tooltip": {
              fontSize: "13px !important"
            }
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 50,
            height: 50
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            margin: "10px 0",
            width: "100%"
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-readOnly": {
              background: alpha(lightPalette.common.black, 0.02),
              border: "none !important",
              borderRadius: "8px",
              "*": {
                border: "none !important"
              }
            }
          }
        },
        variants: [
          {
            props: { variant: "filled" },
            style: {
              "& :after, & :before": {
                display: "none"
              }
            }
          },
          {
            props: { select: true },
            style: {
              "& :after, & :before": {
                display: "none"
              }
            }
          }
        ]
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            border: "1px solid #99999930"
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "8px"
          }
        },
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              borderColor: alpha(lightPalette.common.black, 0.1),
              background: alpha(lightPalette.common.black, 0.02),
              color: lightPalette.common.black
            }
          }
        ]
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 46,
            height: 26,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: "1px 2px",
              margin: 2,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                borderColor: "transparent",
                transform: "translateX(18px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: lightPalette.primary,
                  opacity: 1,
                  border: 0
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 1
                },
                "& .MuiSwitch-thumb": {
                  boxSizing: "border-box",
                  width: 20,
                  height: 20,
                  backgroundColor: "#fff"
                }
              },
              "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff"
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color:
                  lightPalette.mode === "light"
                    ? lightPalette.grey[100]
                    : lightPalette.grey[600]
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: lightPalette.mode === "light" ? 0.7 : 0.3
              }
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 20,
              height: 20,
              backgroundColor: "white"
            },
            "& .MuiSwitch-track": {
              borderRadius: "20px",
              backgroundColor: "#00000020",
              opacity: 1
            }
          }
        }
      }
    }
  })

  const media = theme.breakpoints.down("md")

  /* Responsive typographies here (only base typographies(for example header. not headerBold)) or default MUI */
  theme.typography.header = {
    fontSize: "52px",
    lineHeight: "63px",
    [media]: {
      fontSize: "40px",
      lineHeight: "45px"
    }
  }

  theme.typography.large = {
    fontSize: "48px",
    lineHeight: "58px",
    [media]: {
      fontSize: "22px",
      lineHeight: "28px"
    }
  }
  theme.typography.subheading = {
    fontSize: "32px",
    lineHeight: "39px",
    [media]: {
      fontSize: "24px",
      lineHeight: "29px"
    }
  }
  theme.typography.heading = {
    fontSize: "24px",
    lineHeight: "39px",
    [media]: {
      fontSize: "16px",
      lineHeight: "22px"
    }
  }
  theme.typography.subtitle = {
    fontSize: "18px",
    lineHeight: "30px",
    [media]: {
      fontSize: "16px",
      lineHeight: "25px"
    }
  }
  theme.typography.body = {
    fontSize: "16px",
    lineHeight: "26px",
    [media]: {
      fontSize: "14px",
      lineHeight: "22px"
    }
  }
  theme.typography.small = {
    fontSize: "14px",
    lineHeight: "22px",
    [media]: {
      fontSize: "12px",
      lineHeight: "20px"
    }
  }
  theme.typography.extraSmall = {
    fontSize: "12px",
    lineHeight: "20px",
    [media]: {
      fontSize: "12px",
      lineHeight: "15px"
    }
  }
  theme.typography = {
    ...theme.typography,
    ...variantsGenerator(theme.typography)
  }

  return theme
}

export default create
