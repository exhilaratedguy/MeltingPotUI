import { HTMLAttributes, PropsWithChildren } from "react";
import { StyledIcon } from "./Icon.styles";

const Icon = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};

export default Icon;
