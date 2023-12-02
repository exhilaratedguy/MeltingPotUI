import { forwardRef, memo } from "react";
import { IconButtonProps } from "../ButtonInterfaces";
import IconButton from "../IconButton/IconButton";

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
