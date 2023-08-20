import { merge } from "lodash";
import { DefaultTheme } from "react-jss";
import { createStyles } from "../../../Styles/Theme";
import { mergeThemeStyle } from "../../../Styles/ThemeUtils";
import { defaultButtonTheme } from "../Button/Button.styles";
import {
  ButtonStylesProps,
  ButtonTheme,
  ButtonVariants,
} from "../ButtonInterfaces";
import { primaryButtonTheme } from "../PrimaryButton/PrimaryButton.styles";

export const useBaseButtonStyles = createStyles<string, ButtonStylesProps>(
  ({ components }) => {
    return {
      button: ({ disabled, variant }) => ({
        ...mergeThemeStyle(components?.button?.[variant]?.root),

        ...(!disabled && {
          "&:hover": {
            ...mergeThemeStyle(components?.button?.[variant]?.hovered?.root),

            "& > span": {
              ...mergeThemeStyle(components?.button?.[variant]?.hovered?.label),
            },
          },

          "&:focus": {
            ...mergeThemeStyle(components?.button?.[variant]?.focused?.root),

            "& > span": {
              ...mergeThemeStyle(components?.button?.[variant]?.focused?.label),
            },
          },
        }),

        ...(disabled && {
          ...mergeThemeStyle(components?.button?.[variant]?.disabled?.root),
        }),
      }),

      label: ({ disabled, variant }) => ({
        ...mergeThemeStyle(components?.button?.[variant]?.label),

        ...(disabled && {
          ...mergeThemeStyle(components?.button?.[variant]?.disabled?.label),
        }),
      }),
    };
  }
);

export const applyButtonsTheme = (
  outsideTheme: DefaultTheme,
  variant: ButtonVariants
): DefaultTheme => {
  let variantButtonTheme: ButtonTheme;

  switch (variant) {
    case "primary":
      variantButtonTheme = primaryButtonTheme(outsideTheme);
      break;
    case "default":
      variantButtonTheme = defaultButtonTheme(outsideTheme);
      break;
    default:
      variantButtonTheme = {};
  }

  const buttonTheme = merge({}, baseButtonTheme(variant), variantButtonTheme);

  const newTheme: Partial<DefaultTheme> = {
    components: { button: buttonTheme },
  };

  return merge({}, newTheme, outsideTheme);
};

export const baseButtonTheme = (variant: ButtonVariants): ButtonTheme => ({
  [variant]: {
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
  },
});
