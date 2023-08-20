import { forwardRef, memo } from "react";
import BaseButton from "../BaseButton/BaseButton";
import { ButtonProps } from "../ButtonInterfaces";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <BaseButton variant="default" ref={ref} {...props}>
        {children}
      </BaseButton>
    );
  }
);

export default memo(Button);
