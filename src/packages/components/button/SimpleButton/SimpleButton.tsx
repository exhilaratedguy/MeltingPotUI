import { forwardRef, memo } from "react";
import Button from "../BaseButton/BaseButton";
import { ButtonProps } from "../ButtonInterfaces";

const SimpleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button variant="simple" ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

export default memo(SimpleButton);
