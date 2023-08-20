import { DefaultTheme } from "react-jss";
import { ButtonTheme } from "../ButtonInterfaces";

export const defaultButtonTheme = (theme: DefaultTheme): ButtonTheme => ({
  default: {
    hovered: {
      root: {
        backgroundColor: theme.palette.greys.lighter,
      },
    },
  },
});
