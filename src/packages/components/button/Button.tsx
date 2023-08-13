import { PropsWithChildren } from "react";
import { useButtonStyles } from "./Button.styles";
import { ButtonProps } from "./ButtonInterfaces";

const Button = ({ disabled, children }: PropsWithChildren<ButtonProps>) => {
  const classes = useButtonStyles({ disabled });

  return (
    <button className={classes.button} disabled={disabled}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

export default Button;
