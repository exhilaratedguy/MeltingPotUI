import { styled } from "styled-components";
import { StyledIconProps } from "./IconInterfaces";

export const StyledIcon = styled("span")<StyledIconProps>(({ position }) => ({
  display: "inherit",
  [position === "left" ? "marginRight" : "marginLeft"]: 8,
}));
