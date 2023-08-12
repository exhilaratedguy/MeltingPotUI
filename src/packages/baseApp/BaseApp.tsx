import { PropsWithChildren } from "react";
import { DefaultTheme } from "react-jss";
import CSSFixer from "./cssFixer/CSSFixer";
import { ThemeProvider } from "../styles/Theme";

const baseTheme: DefaultTheme = {
  typography: {
    fontSize: "14px",
  },
  components: {
    button: {
      root: {
        backgroundColor: "aqua",
      },
    },
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
