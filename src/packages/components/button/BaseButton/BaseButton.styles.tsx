import { DefaultTheme } from "styled-components";
import { ButtonTheme } from "../ButtonInterfaces";

export const baseButtonTheme = (theme: DefaultTheme): ButtonTheme["base"] => ({
  hovered: {
    root: {
      backgroundColor: theme.palette.greys.lighter,
    },
  },
});
