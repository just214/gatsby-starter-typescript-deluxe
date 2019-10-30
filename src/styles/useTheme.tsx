/*
This custom theme allows  you to use your styled-components theme in non-styled-component components.
View the footer component to see it in action.
*/

import { useContext } from "react";
import { ThemeContext } from "styled-components";

const useTheme = () => useContext(ThemeContext);

export { useTheme };
