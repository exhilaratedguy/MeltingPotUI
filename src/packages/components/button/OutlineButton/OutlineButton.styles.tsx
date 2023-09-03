import { DefaultTheme } from "styled-components";
import { applyOpacity } from "../../../Styles/ThemeUtils";
import { ButtonTheme } from "../ButtonInterfaces";

export const outlineButtonTheme = (
  theme: DefaultTheme
): ButtonTheme["simple"] => ({
  root: {
    borderColor: theme.palette.primary,
  },

  label: {
    color: theme.palette.primary,
  },

  hovered: {
    root: {
      borderColor: applyOpacity(theme.palette.primary, 60),
    },

    label: {
      color: applyOpacity(theme.palette.primary, 60),
    },
  },

  focused: {
    root: {
      boxShadow: `0px 0px 5px 1px ${theme.palette.primary}`,
    },
  },

  disabled: {
    root: {
      borderColor: applyOpacity(theme.palette.primary, 30),
    },

    label: {
      color: applyOpacity(theme.palette.primary, 30),
    },
  },
});
