import { forwardRef, memo } from "react";
import IconButton from "../BaseIconButton/BaseIconButton";
import { IconButtonProps } from "../ButtonInterfaces";

const PrimaryIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <IconButton variant="primary" ref={ref} {...props}>
        {children}
      </IconButton>
    );
  }
);

export default memo(PrimaryIconButton);
