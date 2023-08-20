import { forwardRef, memo } from "react";
import BaseButton from "../BaseButton/BaseButton";
import { ButtonProps } from "../ButtonInterfaces";

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <BaseButton variant="primary" ref={ref} {...props}>
        {children}
      </BaseButton>
    );
  }
);

export default memo(PrimaryButton);