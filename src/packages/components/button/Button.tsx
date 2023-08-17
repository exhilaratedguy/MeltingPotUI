import { PropsWithChildren } from "react";
import { useButtonStyles } from "./Button.styles";
import { ButtonProps } from "./ButtonInterfaces";
import { cx } from "classix";

const Button = ({
  children,
  className,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  const classes = useButtonStyles({ disabled: buttonProps.disabled });

  return (
    <button className={cx(classes.button, className)} {...buttonProps}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

export default Button;
