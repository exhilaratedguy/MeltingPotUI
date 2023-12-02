import { HTMLAttributes, PropsWithChildren } from "react";

export type IconProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>> & {
  position: "left" | "right";
};

export type StyledIconProps = Pick<IconProps, "position">;
