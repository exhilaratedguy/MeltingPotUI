import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import type { CSSObject } from "../../Styles/StylesInterfaces";
import { NestedVariantThemes } from "../../Styles/ThemeUtils";

export interface BaseButtonTheme {
  root?: CSSObject;
  label?: CSSObject;
}

export type ButtonTheme = NestedVariantThemes<
  "default" | "primaryButton",
  "disabled" | "focused" | "hovered",
  BaseButtonTheme
>;

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export interface ButtonStylesProps {
  disabled?: boolean;
}
