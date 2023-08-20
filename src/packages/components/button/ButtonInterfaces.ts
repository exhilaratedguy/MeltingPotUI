import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import type { CSSObject } from "../../Styles/StylesInterfaces";
import type { BaseVariant, NestedVariantThemes } from "../../Styles/ThemeUtils";

export interface BaseButtonTheme {
  root?: CSSObject;
  label?: CSSObject;
}

export type ButtonVariants = BaseVariant | "primary";

type ButtonStates = "disabled" | "focused" | "hovered";

export type ButtonTheme = NestedVariantThemes<
  ButtonVariants,
  ButtonStates,
  BaseButtonTheme
>;

export interface BaseButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: ButtonVariants;
}

export type ButtonProps = Omit<BaseButtonProps, "variant">;

export type ButtonStylesProps = Pick<BaseButtonProps, "disabled" | "variant">;
