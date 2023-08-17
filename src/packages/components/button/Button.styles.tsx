import { createStyles } from "../../Styles/Theme";
import { applyOpacity, mergeThemeStyle } from "../../Styles/ThemeUtils";
import { ButtonStylesProps } from "./ButtonInterfaces";

export const useButtonStyles = createStyles<string, ButtonStylesProps>(
  ({ palette, components }) => ({
    button: (props) => ({
      position: "relative",
      all: "unset",
      cursor: "pointer",
      backgroundColor: palette.primary,
      border: "1px solid transparent",
      padding: "3px 10px 5px 10px",
      borderRadius: 4,
      height: 35,
      transition: "box-shadow 90ms ease-in-out",

      ...mergeThemeStyle(components?.button?.root),

      ...(!props.disabled && {
        "&:hover": {
          backgroundColor: applyOpacity(palette.primary, 80),

          "& > span": {
            ...mergeThemeStyle(components?.button?.hovered?.label),
          },

          ...mergeThemeStyle(components?.button?.hovered?.root),
        },

        "&:focus": {
          boxShadow: `0px 0px 5px 3px ${palette.primary}`,

          "& > span": {
            ...mergeThemeStyle(components?.button?.focused?.label),
          },

          ...mergeThemeStyle(components?.button?.focused?.root),
        },
      }),

      ...(props.disabled && {
        cursor: "default",
        backgroundColor: applyOpacity(palette.primary, 30),

        ...mergeThemeStyle(components?.button?.disabled?.root),
      }),
    }),

    label: (props) => ({
      userSelect: "none",
      color: "white",

      ...mergeThemeStyle(components?.button?.label),

      ...(props.disabled && {
        ...mergeThemeStyle(components?.button?.disabled?.label),
      }),
    }),
  })
);
