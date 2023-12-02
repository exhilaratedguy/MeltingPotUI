import { DefaultTheme } from "styled-components";
import { applyOpacity } from "../../../Theme/ThemeUtils";
import { ButtonTheme } from "../ButtonInterfaces";

export const simpleButtonTheme = (
  theme: DefaultTheme
): ButtonTheme["simple"] => ({
  root: {
    color: theme.palette.greys.darker,
  },

  hovered: {
    root: {
      backgroundColor: theme.palette.greys.lightest,
    },
  },

  focused: {
    root: {
      backgroundColor: theme.palette.greys.lightest,
    },
  },

  disabled: {
    root: {
      color: applyOpacity(theme.palette.greys.darker, 30),
    },
  },
});
