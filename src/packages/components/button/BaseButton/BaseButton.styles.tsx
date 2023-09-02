import { merge } from "lodash";
import { DefaultTheme, styled } from "styled-components";
import { mergeDefaultTheme, mergeThemeStyle } from "../../../Styles/ThemeUtils";
import { ButtonTheme, StyledButtonProps } from "../ButtonInterfaces";
import { primaryButtonTheme } from "../PrimaryButton/PrimaryButton.styles";
import { simpleButtonTheme } from "../SimpleButton/SimpleButton.styles";

export const StyledButton = styled("button")<StyledButtonProps>(
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

export const StyledButtonLabel = styled("span")<StyledButtonProps>(
  ({ theme, variant, disabled }) => ({
    ...mergeThemeStyle(theme.components?.button?.[variant]?.label),

    ...(disabled && {
      ...mergeThemeStyle(theme.components?.button?.[variant]?.disabled?.label),
    }),
  })
);

export const applyButtonsTheme = (theme: DefaultTheme): DefaultTheme => {
  // Merge default component theme first, so that it's applied to all variant themes
  merge(defaultButtonTheme, theme.components.button.default);

  // Create theme with helper function that applies default component theme on variant themes
  const newTheme = mergeDefaultTheme("button", {
    components: {
      button: {
        default: defaultButtonTheme,
        simple: simpleButtonTheme(theme),
        primary: primaryButtonTheme(theme),
      },
    },
  } as Partial<DefaultTheme>);

  // Merge with user's theme
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
