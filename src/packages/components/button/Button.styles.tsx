import { createStyles } from "../../styles/Theme";
import { mergeThemeStyle } from "../../styles/ThemeUtils";

export const useButtonStyles = createStyles((theme) => ({
  btn: {
    cursor: "pointer",

    ...mergeThemeStyle(theme.components?.button?.root),
  },
}));
