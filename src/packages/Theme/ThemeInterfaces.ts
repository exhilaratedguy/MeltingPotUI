import { CSSProperties } from "react";
import { StyledObject } from "styled-components";
import type { ButtonTheme } from "../Components/Button/ButtonInterfaces";
import type { IconTheme } from "../Components/Icon/IconInterfaces";

export type CSSObject<Props extends object = object> = StyledObject<Props>;

export type CommonStates = "disabled" | "focused" | "hovered";

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
    icon?: IconTheme;
  };
}
