import { DefaultTheme } from "styled-components";
import { applyOpacity } from "../../../Styles/ThemeUtils";
import { ButtonTheme } from "../ButtonInterfaces";

export const primaryButtonTheme = (
  theme: DefaultTheme
): ButtonTheme["primary"] => ({
  root: {
    backgroundColor: theme.palette.primary,
  },

  label: {
    color: "white",
  },

  hovered: {
    root: {
      backgroundColor: applyOpacity(theme.palette.primary, 80),
    },
  },

  focused: {
    root: {
      boxShadow: `0px 0px 5px 3px ${theme.palette.primary}`,
    },
  },

  disabled: {
    root: {
      backgroundColor: applyOpacity(theme.palette.primary, 30),
    },
  },
});
