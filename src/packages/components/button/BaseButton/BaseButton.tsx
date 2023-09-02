import { forwardRef, memo } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../ButtonInterfaces";

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button variant="base" ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

export default memo(BaseButton);
