import { cx } from "classix";
import { forwardRef, useCallback } from "react";
import { DefaultTheme } from "react-jss";
import { ThemeProvider } from "../../../Styles/Theme";
import { BaseButtonProps } from "../ButtonInterfaces";
import { applyButtonsTheme, useBaseButtonStyles } from "./BaseButton.styles";

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ variant, className, children, ...props }, ref) => {
    const classes = useBaseButtonStyles({ variant, disabled: props.disabled });

    const handleButtonThemes = useCallback(
      (theme: DefaultTheme) => applyButtonsTheme(theme, variant),
      [variant]
    );

    return (
      <ThemeProvider theme={handleButtonThemes}>
        <button
          type="submit"
          className={cx(classes.button, className)}
          ref={ref}
          {...props}
        >
          <span className={classes.label}>{children}</span>
        </button>
      </ThemeProvider>
    );
  }
);

export default BaseButton;
