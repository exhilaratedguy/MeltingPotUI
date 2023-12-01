import { ButtonHTMLAttributes, ComponentType, PropsWithChildren } from "react";
import { CSSObject } from "../../Theme/ThemeInterfaces";
import type {
  AnyString,
  DefaultVariant,
  NestedVariantThemes,
} from "../../Theme/ThemeUtils";

export interface BaseButtonTheme {
  root?: CSSObject;
}

export type ButtonVariants =
  | DefaultVariant
  | "simple"
  | "outline"
  | "primary"
  | AnyString;

export type ButtonStates = "disabled" | "focused" | "hovered";

export type ButtonTheme = NestedVariantThemes<
  ButtonVariants,
  ButtonStates,
  BaseButtonTheme
>;

export interface BaseButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariants;
}

export interface BaseIconButtonProps<P = unknown> extends BaseButtonProps {
  startIcon?: ComponentType<P>;
  endIcon?: ComponentType<P>;
}

export type ButtonProps = Omit<BaseButtonProps, "variant">;
export type IconButtonProps = Omit<BaseIconButtonProps, "variant">;

export type StyledButtonProps = Pick<BaseButtonProps, "disabled" | "variant">;
