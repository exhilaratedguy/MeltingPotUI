import { HTMLAttributes, PropsWithChildren } from "react";
import { CSSObject, CommonStates } from "../../Theme/ThemeInterfaces";
import {
  AnyString,
  DefaultVariant,
  NestedVariantThemes,
} from "../../Theme/ThemeUtils";

type IconVariants = DefaultVariant | AnyString;

export type BaseIconTheme = {
  root?: CSSObject;
};

export type IconTheme = NestedVariantThemes<
  IconVariants,
  CommonStates,
  BaseIconTheme
>;

export type IconProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>> & {
  variant?: IconVariants;
};

export type StyledIconProps = Pick<IconProps, "variant">;
