import { useContext } from "react";
import { ThemeContext, DefaultTheme } from "styled-components";
import media from "use-media";

// Update your breakpoint sizes here.
const SCREENS: { [key: string]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

// Update your theme here.
const BASE_THEME = {
  colors: {
    blue: "#0099ff",
    darkblue: "#00072e",
  },
};

const theme = (): DefaultTheme => {
  const breakpointSizes = Object.keys(SCREENS).reduce((accum, key: string) => {
    const value = media({ maxWidth: SCREENS[key] });
    return {
      ...accum,
      [key]: value,
    };
  }, {});
  return {
    ...BASE_THEME,
    screens: breakpointSizes,
  };
};

const useTheme = () => useContext(ThemeContext);

export { theme, useTheme };
