import { forwardRef, memo } from "react";
import Button from "../BaseButton/BaseButton";
import { ButtonProps } from "../ButtonInterfaces";

const OutlineButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button variant="outline" ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

export default memo(OutlineButton);
