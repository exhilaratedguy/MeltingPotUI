import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import { BaseButtonProps } from "../ButtonInterfaces";
import {
  StyledButton,
  StyledButtonLabel,
  applyButtonsTheme,
} from "./Button.styles";

const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ variant, children, disabled, ...props }, ref) => {
    return (
      <ThemeProvider theme={applyButtonsTheme}>
        <StyledButton
          variant={variant}
          ref={ref}
          type="button"
          disabled={disabled}
          {...props}
        >
          <StyledButtonLabel variant={variant}>{children}</StyledButtonLabel>
        </StyledButton>
      </ThemeProvider>
    );
  }
);

export default Button;
