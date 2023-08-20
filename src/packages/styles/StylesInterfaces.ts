import { CSSProperties } from "react";
import { DefaultTheme, Styles } from "react-jss";
import { ButtonTheme } from "../Components/Button/ButtonInterfaces";
import { ValueType } from "./ThemeUtils";

export type CSSObject<
  C extends string = string,
  P = unknown,
  T = DefaultTheme
> = ValueType<Styles<C, P, T>>;

export interface MeltingPotTheme {
  palette: {
    primary: string;
    secondary: string;
    greys: {
      lightest: string;
      lighter: string;
      light: string;
      medium: string;
      dark: string;
      darker: string;
      darkest: string;
    };
  };
  typography?: CSSProperties;
  components?: {
    button?: ButtonTheme;
  };
}
