import { MeltingPotTheme } from "../packages/styles/StylesInterfaces";

declare global {
  namespace Jss {
    export interface Theme extends MeltingPotTheme {}
  }
}

export {};
