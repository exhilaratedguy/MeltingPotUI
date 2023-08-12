import { PropsWithChildren } from "react";
import { DefaultTheme, ThemeProvider } from "react-jss";
import CSSFixer from "./cssFixer/CSSFixer";

const baseTheme: DefaultTheme = {
  typography: {
    fontSize: 72,
  },
};

const BaseApp = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CSSFixer />
      {children}
    </ThemeProvider>
  );
};

export default BaseApp;
