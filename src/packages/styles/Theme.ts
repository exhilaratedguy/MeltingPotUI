import { createContext } from "react";
import { createTheming } from "theming";

const context = createContext({});
const theming = createTheming(context);

const { withTheme, ThemeProvider, useTheme } = theming;

export default {
  withTheme,
  ThemeProvider,
  useTheme,
};
