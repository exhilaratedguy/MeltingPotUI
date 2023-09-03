import { DefaultTheme } from "styled-components";
import { ButtonTheme } from "../ButtonInterfaces";

export const simpleButtonTheme = (
  theme: DefaultTheme
): ButtonTheme["simple"] => ({
  label: {
    color: theme.palette.greys.darker,
  },

  hovered: {
    root: {
      backgroundColor: theme.palette.greys.lightest,
    },
  },
});
