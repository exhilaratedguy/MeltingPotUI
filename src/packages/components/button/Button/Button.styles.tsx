import { merge } from "lodash";
import { DefaultTheme, styled } from "styled-components";
import {
  mergeThemeStyle,
  mergeWithBaseTheme,
} from "../../../Styles/ThemeUtils";
import { baseButtonTheme } from "../BaseButton/BaseButton.styles";
import { ButtonStylesProps, ButtonTheme } from "../ButtonInterfaces";
import { primaryButtonTheme } from "../PrimaryButton/PrimaryButton.styles";

export const StyledButton = styled("button")<ButtonStylesProps>(
  ({ theme, disabled, variant }) => ({
    ...mergeThemeStyle(theme.components?.button?.[variant]?.root),

    ...(!disabled && {
      "&:hover": {
        ...mergeThemeStyle(theme.components?.button?.[variant]?.hovered?.root),

        "& > span": {
          ...mergeThemeStyle(
            theme.components?.button?.[variant]?.hovered?.label
          ),
        },
      },

      "&:focus": {
        ...mergeThemeStyle(theme.components?.button?.[variant]?.focused?.root),

        "& > span": {
          ...mergeThemeStyle(
            theme.components?.button?.[variant]?.focused?.label
          ),
        },
      },
    }),

    ...(disabled && {
      ...mergeThemeStyle(theme.components?.button?.[variant]?.disabled?.root),
    }),
  })
);

export const StyledButtonLabel = styled("span")<ButtonStylesProps>(
  ({ theme, variant, disabled }) => ({
    ...(!disabled && {
      ...mergeThemeStyle(theme.components?.button?.[variant]?.label),
    }),

    ...(disabled && {
      ...mergeThemeStyle(theme.components?.button?.[variant]?.disabled?.label),
    }),
  })
);

export const applyButtonsTheme = (theme: DefaultTheme): DefaultTheme => {
  const newTheme: Partial<DefaultTheme> = {
    components: {
      button: {
        default: defaultButtonTheme,
        base: baseButtonTheme(theme),
        primary: primaryButtonTheme(theme),
      },
    },
  };

  mergeWithBaseTheme(defaultButtonTheme, newTheme.components.button);

  return merge({}, newTheme, theme);
};

const defaultButtonTheme: ButtonTheme["default"] = {
  root: {
    all: "unset",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: "3px 10px 5px 10px",
    borderRadius: 4,
    height: 35,
    transition: "box-shadow 90ms ease-in-out",
  },

  label: {
    userSelect: "none",
    color: "black",
  },

  disabled: {
    root: {
      cursor: "default",
    },
  },
};
