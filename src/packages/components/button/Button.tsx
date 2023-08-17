import { PropsWithChildren } from "react";
import { useButtonStyles } from "./Button.styles";
import { ButtonProps } from "./ButtonInterfaces";

const Button = ({
  children,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  const classes = useButtonStyles({ disabled: buttonProps.disabled });

  return (
    <button className={classes.button} {...buttonProps}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

export default Button;
