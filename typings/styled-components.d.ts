import "styled-components";
import type { CSSProp } from "styled-components";
import type { MeltingPotTheme } from "../src/packages/Theme/ThemeInterfaces";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

declare module "styled-components" {
  export interface DefaultTheme extends MeltingPotTheme {}
}

export {};
