import { merge } from "lodash";
import { DefaultTheme, styled } from "styled-components";
import {
  mergeDefaultAndVariantThemes,
  mergeThemeStyle,
} from "../../../Theme/ThemeUtils";
import { ButtonTheme, StyledButtonProps } from "../ButtonInterfaces";
import { outlineButtonTheme } from "../OutlineButton/OutlineButton.styles";
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
  // Merge "default" variant theme first, so that it's applied to all variant themes
  merge(defaultButtonTheme, theme.components.button.default);

  // Create theme with base styles for buttons
  const newTheme: Partial<DefaultTheme> = {
    components: {
      button: {
        default: defaultButtonTheme,
        simple: simpleButtonTheme(theme),
        outline: outlineButtonTheme(theme),
        primary: primaryButtonTheme(theme),
      },
    },
  };

  // Helper function that applies "default" variant theme on all other variant themes
  const mergedButtonsTheme = mergeDefaultAndVariantThemes(
    defaultButtonTheme,
    newTheme.components.button,
    theme.components.button
  );

  // Merge with user's theme
  return merge(
    {},
    {
      components: {
        button: mergedButtonsTheme,
      },
    } as Partial<DefaultTheme>,
    theme
  );
};

const defaultButtonTheme: ButtonTheme["default"] = {
  root: {
    all: "unset",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: "3px 10px",
    borderRadius: 4,
    height: 35,
    transition: "box-shadow 90ms ease-in-out, background-color 150ms linear",
    // TODO: Change font-weight
  },

  label: {
    userSelect: "none",
    color: "black",
    transition: "color 150ms linear",
  },

  disabled: {
    root: {
      cursor: "default",
    },
  },
};
