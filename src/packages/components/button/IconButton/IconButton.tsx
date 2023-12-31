import { forwardRef, memo } from "react";
import Icon from "../../Icon/Icon";
import Button from "../BaseButton/BaseButton";
import { BaseIconButtonProps } from "../ButtonInterfaces";

const IconButton = forwardRef<HTMLButtonElement, BaseIconButtonProps>(
  (
    {
      variant = "default",
      startIcon: StartIcon,
      endIcon: EndIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Button variant={variant} ref={ref} {...props}>
        {StartIcon && (
          <Icon position="left">
            {typeof StartIcon === "function" ? <StartIcon /> : StartIcon}
          </Icon>
        )}
        {children}
        {EndIcon && (
          <Icon position="right">
            {typeof EndIcon === "function" ? <EndIcon /> : EndIcon}
          </Icon>
        )}
      </Button>
    );
  }
);

export default memo(IconButton);
