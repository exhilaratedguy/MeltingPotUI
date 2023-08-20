import { cx } from "classix";
import { forwardRef } from "react";
import Button from "../Button";
import { ButtonProps } from "../ButtonInterfaces";

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button ref={ref} className={cx(className)} {...props}>
        {children}
      </Button>
    );
  }
);

export default PrimaryButton;
