import { StyledIcon } from "./Icon.styles";
import { IconProps } from "./IconInterfaces";

const Icon = ({ children, ...props }: IconProps) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};

export default Icon;
