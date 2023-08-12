import { PropsWithChildren } from "react";
import CSSFixer from "./cssFixer/CSSFixer";

const BaseApp = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CSSFixer />
      {children}
    </>
  );
};

export default BaseApp;
