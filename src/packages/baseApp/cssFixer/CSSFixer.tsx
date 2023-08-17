import { memo } from "react";
import "./CSSFixer.css";
import { useTheme } from "../../Styles/Theme";

const root = document.getElementById("root");

root.style.width = "100vw";
root.style.height = "100vh";

const CSSFixer = () => {
  const theme = useTheme();
  root.style.fontSize = theme.typography.fontSize.toString();

  return null;
};

export default memo(CSSFixer);
