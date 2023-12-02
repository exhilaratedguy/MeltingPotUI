import { ButtonHTMLAttributes, ComponentType, PropsWithChildren } from "react";
import { CSSObject, CommonStates } from "../../Theme/ThemeInterfaces";
import {
  AnyString,
  DefaultVariant,
  NestedVariantThemes,
} from "../../Theme/ThemeUtils";
import { BaseIconTheme } from "../Icon/IconInterfaces";

export interface BaseButtonTheme {
  root?: CSSObject;
  icon?: BaseIconTheme;
  startIcon?: BaseIconTheme;
  endIcon?: BaseIconTheme;
}

export type ButtonVariants =
  | DefaultVariant
  | "simple"
  | "outline"
  | "primary"
  | AnyString;

export type ButtonTheme = NestedVariantThemes<
  ButtonVariants,
  CommonStates,
  BaseButtonTheme
>;

export interface BaseButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariants;
  startIcon?: ComponentType | JSX.Element;
  endIcon?: ComponentType | JSX.Element;
}

export interface BaseIconButtonProps extends BaseButtonProps {
  startIcon?: ComponentType | JSX.Element;
  endIcon?: ComponentType | JSX.Element;
}

export type ButtonProps = Omit<BaseButtonProps, "variant">;
export type IconButtonProps = Omit<BaseIconButtonProps, "variant">;

export type StyledButtonProps = Pick<BaseButtonProps, "disabled" | "variant">;
