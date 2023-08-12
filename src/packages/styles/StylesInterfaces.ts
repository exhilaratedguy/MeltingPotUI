import { CSSProperties } from "react";
import { DefaultTheme, Styles } from "react-jss";

type ValueType<T> = T[keyof T];

export type CSSObject<
  C extends string = string,
  P = unknown,
  T = DefaultTheme
> = ValueType<Styles<C, P, T>>;

export interface MeltingPotTheme {
  typography?: CSSProperties;
  components?: {
    button?: {
      root?: CSSObject;
    };
  };
}
