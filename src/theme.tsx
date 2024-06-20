import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const fonts = {
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
    primaryBlue100: "#CBCDF9",
    primaryBlue200: "#9FA3FF",
    primaryBlue300: "#5A60FF",
    primaryBlue400: "#1D23AB",
  },
  fonts,
  breakpoints,
});

export default theme;
