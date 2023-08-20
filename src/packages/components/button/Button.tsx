import { cx } from "classix";
import { forwardRef } from "react";
import { useButtonStyles } from "./Button.styles";
import { ButtonProps } from "./ButtonInterfaces";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...buttonProps }, ref) => {
    const classes = useButtonStyles({ disabled: buttonProps.disabled });

    return (
      <button
        ref={ref}
        className={cx(classes.button, className)}
        {...buttonProps}
      >
        <span className={classes.label}>{children}</span>
      </button>
    );
  }
);

export default Button;
