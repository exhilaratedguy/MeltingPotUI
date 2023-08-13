import { PropsWithChildren } from "react";
import { ThemeProvider } from "../styles/Theme";
import { BaseAppProps } from "./BaseAppInterfaces";
import CSSFixer from "./cssFixer/CSSFixer";

const BaseApp = ({ theme, children }: PropsWithChildren<BaseAppProps>) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSFixer />
      {children}
    </ThemeProvider>
  );
};

export default BaseApp;
