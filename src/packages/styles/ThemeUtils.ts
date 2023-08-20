import { CSSObject } from "./StylesInterfaces";

export type BaseVariant = "default";

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

export const mergeThemeStyle = (themeStyle: CSSObject | undefined) => {
  if (typeof themeStyle === "undefined") {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return themeStyle as any;
};

export const applyOpacity = (color: string, percentage: number) => {
  const alphaValue = Math.round((percentage / 100) * 255);
  let hexAlphaValue = alphaValue.toString(16);

  if (hexAlphaValue.length === 1) {
    hexAlphaValue = `0${hexAlphaValue}`;
  }

  return `${color}${hexAlphaValue}`;
};
