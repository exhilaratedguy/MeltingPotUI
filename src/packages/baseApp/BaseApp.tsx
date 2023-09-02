import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { BaseAppProps } from "./BaseAppInterfaces";
import CSSFixer from "./CssFixer/CSSFixer";

const BaseApp = ({ theme, children }: PropsWithChildren<BaseAppProps>) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSFixer />
      {children}
    </ThemeProvider>
  );
};

export default BaseApp;
