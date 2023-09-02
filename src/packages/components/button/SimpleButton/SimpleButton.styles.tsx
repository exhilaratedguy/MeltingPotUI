import { DefaultTheme } from "styled-components";
import { ButtonTheme } from "../ButtonInterfaces";

export const simpleButtonTheme = (
  theme: DefaultTheme
): ButtonTheme["simple"] => ({
  hovered: {
    root: {
      backgroundColor: theme.palette.greys.lighter,
    },
  },
});
