import { merge } from "lodash";
import { DefaultTheme } from "styled-components";
import { CSSObject } from "./ThemeInterfaces";

const defaultVariant = "default" as const;
/** Styles applied here will be applied to all variants */
export type DefaultVariant = typeof defaultVariant;

export type ValueType<T> = T[keyof T];

export type VariantThemes<Keys extends string, Theme> = Partial<
  Record<Keys, Theme>
>;

export type NestedVariantThemes<
  Variants extends string,
  States extends string,
  BaseTheme
> = Partial<
  Record<Variants, Partial<BaseTheme & VariantThemes<States, BaseTheme>>>
>;

export const mergeDefaultTheme = (
  componentName: keyof typeof theme.components,
  theme: Partial<DefaultTheme>
): Partial<DefaultTheme> => {
  const componentTheme = theme.components[componentName];

  Object.keys(componentTheme).forEach((variant) => {
    if (variant !== defaultVariant) {
      componentTheme[variant] = merge(
        {},
        componentTheme[defaultVariant],
        componentTheme[variant]
      );
    }
  });

  return theme;
};

// For any future logic on processing styles coming from outside theme before merging
export const mergeThemeStyle = (themeStyle: CSSObject | undefined) => {
  return themeStyle;
};

export const applyOpacity = (color: string, percentage: number) => {
  const alphaValue = Math.round((percentage / 100) * 255);
  let hexAlphaValue = alphaValue.toString(16);

  if (hexAlphaValue.length === 1) {
    hexAlphaValue = `0${hexAlphaValue}`;
  }

  return `${color}${hexAlphaValue}`;
};
