import { forwardRef, memo } from "react";
import Button from "../BaseButton/BaseButton";
import { ButtonProps } from "../ButtonInterfaces";

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button variant="primary" ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

export default memo(PrimaryButton);
