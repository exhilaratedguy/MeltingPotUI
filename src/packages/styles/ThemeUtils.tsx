import { CSSObject } from "./StylesInterfaces";

export type VariantThemes<Keys extends Array<string>, Theme> = Partial<
  Record<Keys[number], Theme>
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
