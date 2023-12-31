import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import { BaseButtonProps } from "../ButtonInterfaces";
import { StyledButton, applyButtonsTheme } from "./BaseButton.styles";

const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ variant = "default", children, disabled, ...props }, ref) => {
    return (
      <ThemeProvider theme={applyButtonsTheme}>
        <StyledButton
          variant={variant}
          ref={ref}
          type="button"
          disabled={disabled}
          {...props}
        >
          {children}
        </StyledButton>
      </ThemeProvider>
    );
  }
);

export default Button;
