import { MeltingPotTheme } from "../src/packages/Styles/StylesInterfaces";

declare global {
  namespace Jss {
    export interface Theme extends MeltingPotTheme {}
  }
}

export {};
