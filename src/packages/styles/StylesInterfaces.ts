import { CSSProperties } from "react";
import { DefaultTheme, Styles } from "react-jss";
import { ButtonTheme } from "../components/button/ButtonInterfaces";

type ValueType<T> = T[keyof T];

export type CSSObject<
  C extends string = string,
  P = unknown,
  T = DefaultTheme
> = ValueType<Styles<C, P, T>>;

export interface MeltingPotTheme {
  palette: {
    primary: string;
    secondary: string;
  };
  typography?: CSSProperties;
  components?: {
    button?: ButtonTheme;
  };
}
