import type { CSSObject } from "../../styles/StylesInterfaces";
import { VariantThemes } from "../../styles/ThemeUtils";

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
