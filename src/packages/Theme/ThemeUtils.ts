import { cloneDeep, merge } from "lodash";
import { DefaultTheme } from "styled-components";
import { CSSObject } from "./ThemeInterfaces";

const defaultVariant = "default" as const;
/** Styles applied here will be applied to all variants */
export type DefaultVariant = typeof defaultVariant;

/** Workaround for allowing any string, while still keeping autocomplete for other values */
export type AnyString = string & { _IGNOREME?: never };

export type VariantThemes<Variant extends string, Theme> = Partial<
  Record<Variant, Theme>
>;

type NestedVariantThemesValue<States extends string, BaseTheme> = Partial<
  BaseTheme & VariantThemes<States, BaseTheme>
>;

export type NestedVariantThemes<
  Variants extends string,
  States extends string,
  BaseTheme
> = Partial<
  Record<Variants | AnyString, NestedVariantThemesValue<States, BaseTheme>>
>;

export const mergeDefaultAndVariantThemes = <
  CName extends keyof DefaultTheme["components"],
  CTheme extends Partial<DefaultTheme["components"][CName]>
>(
  defaultComponentTheme: object,
  componentTheme: CTheme,
  outerComponentTheme: CTheme
): CTheme => {
  const newComponentTheme = cloneDeep(
    merge({}, componentTheme, outerComponentTheme)
  );

  Object.keys(newComponentTheme).forEach((variant) => {
    if (variant !== defaultVariant) {
      newComponentTheme[variant as keyof CTheme] = merge(
        {},
        defaultComponentTheme,
        newComponentTheme[variant]
      ) as CTheme[keyof CTheme];
    }
  });

  return newComponentTheme;
};

// For any future logic on processing styles coming from outer theme before merging
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
