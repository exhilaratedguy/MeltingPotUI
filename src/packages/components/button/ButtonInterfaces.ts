import type { CSSObject } from "../../Styles/StylesInterfaces";
import { VariantThemes } from "../../Styles/ThemeUtils";

export interface BaseButtonTheme {
  root?: CSSObject;
  label?: CSSObject;
}

export type ButtonTheme = BaseButtonTheme &
  VariantThemes<["disabled", "focused", "hovered"], BaseButtonTheme>;

export interface ButtonProps {
  disabled?: boolean;
}

export interface ButtonStylesProps {
  disabled?: boolean;
}
