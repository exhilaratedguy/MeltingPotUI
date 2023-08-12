import { CSSObject } from "./StylesInterfaces";

export const mergeThemeStyle = (themeStyle: CSSObject | undefined) => {
  if (typeof themeStyle === "undefined") {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return themeStyle as any;
};
