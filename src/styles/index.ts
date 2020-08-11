import { useContext } from "react";
import { ThemeContext, DefaultTheme } from "styled-components";
import media from "use-media";
import themeObject from "./theme";
import "modern-css-reset/dist/reset.min.css";
export { GlobalStyles } from "./global-styles";

type DefaultThemeObject = Omit<typeof themeObject, "screens"> & {
  screens: {
    [key: string]: number;
  };
};

const theme = (): DefaultTheme => {
  const { screens, ...themeValues }: DefaultThemeObject = themeObject;
  const breakpointSizes = Object.keys(screens).reduce((accum, key: string) => {
    const value = media({ maxWidth: screens[key] });
    return {
      ...accum,
      [key]: value,
    };
  }, {});
  return {
    ...themeValues,
    screens: breakpointSizes,
  };
};

const useTheme = () => useContext(ThemeContext);

export { theme, useTheme };
