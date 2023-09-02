import { CSSProperties } from "react";
import { StyledObject } from "styled-components";
import { ButtonTheme } from "../Components/Button/ButtonInterfaces";

export type CSSObject<Props extends object = object> = StyledObject<Props>;

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
