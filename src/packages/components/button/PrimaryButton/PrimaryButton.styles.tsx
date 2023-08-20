import { createStyles } from "../../../Styles/Theme";
import { applyOpacity, mergeThemeStyle } from "../../../Styles/ThemeUtils";
import { ButtonStylesProps } from "../ButtonInterfaces";

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
      ...mergeThemeStyle(components?.button?.primaryButton?.root),

      ...(!props.disabled && {
        "&:hover": {
          backgroundColor: applyOpacity(palette.primary, 80),

          "& > span": {
            ...mergeThemeStyle(
              components?.button?.primaryButton?.hovered?.label
            ),
          },

          ...mergeThemeStyle(components?.button?.primaryButton?.hovered?.root),
        },

        "&:focus": {
          boxShadow: `0px 0px 5px 3px ${palette.primary}`,

          "& > span": {
            ...mergeThemeStyle(
              components?.button?.primaryButton?.focused?.label
            ),
          },

          ...mergeThemeStyle(components?.button?.primaryButton?.focused?.root),
        },
      }),

      ...(props.disabled && {
        cursor: "default",
        backgroundColor: applyOpacity(palette.primary, 30),
        ...mergeThemeStyle(components?.button?.primaryButton?.disabled?.root),
      }),
    }),

    label: (props) => ({
      userSelect: "none",
      color: "white",
      ...mergeThemeStyle(components?.button?.primaryButton?.label),

      ...(props.disabled && {
        ...mergeThemeStyle(components?.button?.primaryButton?.disabled?.label),
      }),
    }),
  })
);
