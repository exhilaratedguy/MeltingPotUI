import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import Icon from "../../Icon/Icon";
import { BaseButtonProps } from "../ButtonInterfaces";
import { StyledButton, applyButtonsTheme } from "./BaseButton.styles";

const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      variant = "default",
      children,
      disabled,
      startIcon: StartIcon,
      endIcon: EndIcon,
      ...props
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={applyButtonsTheme}>
        <StyledButton
          variant={variant}
          ref={ref}
          type="button"
          disabled={disabled}
          {...props}
        >
          {StartIcon && (
            <Icon variant="startIcon">
              {typeof StartIcon === "function" ? <StartIcon /> : StartIcon}
            </Icon>
          )}
          {children}
          {EndIcon && (
            <Icon variant="endIcon">
              {typeof EndIcon === "function" ? <EndIcon /> : EndIcon}
            </Icon>
          )}
        </StyledButton>
      </ThemeProvider>
    );
  }
);

export default Button;
