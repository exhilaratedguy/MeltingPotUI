import { ButtonHTMLAttributes } from "react";
import type { CSSObject } from "../../Styles/StylesInterfaces";
import { VariantThemes } from "../../Styles/ThemeUtils";

export interface BaseButtonTheme {
  root?: CSSObject;
  label?: CSSObject;
}

export type ButtonTheme = BaseButtonTheme &
  VariantThemes<["disabled", "focused", "hovered"], BaseButtonTheme>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonStylesProps {
  disabled?: boolean;
}
