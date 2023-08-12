import { createContext } from "react";
import { DefaultTheme } from "react-jss";
import { createTheming } from "theming";

const context = createContext({} as DefaultTheme);
const theming = createTheming(context);

export const { withTheme, ThemeProvider, useTheme } = theming;
