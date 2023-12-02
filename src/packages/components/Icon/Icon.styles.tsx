import { styled } from "styled-components";
import { mergeThemeStyle } from "../../Theme/ThemeUtils";
import { StyledIconProps } from "./IconInterfaces";

export const StyledIcon = styled("span")<StyledIconProps>(
  ({ theme, variant }) => ({
    display: "inherit",

    ...mergeThemeStyle(theme.components?.icon?.[variant]?.root),
  })
);
