import { createContext } from "react";
import { DefaultTheme, createUseStyles } from "react-jss";
import { createTheming } from "theming";

const context = createContext({} as DefaultTheme);
const theming = createTheming(context);

export const { withTheme, ThemeProvider, useTheme } = theming;

export const createStyles = <C extends string = string, Props = unknown>(
  styles: Parameters<typeof createUseStyles<C, Props, DefaultTheme>>[0],
  options?: Parameters<typeof createUseStyles<C, Props, DefaultTheme>>[1]
) => {
  return createUseStyles<C, Props, DefaultTheme>(styles, {
    ...options,
    theming,
  });
};
