import { colors } from "./colors";

export interface IconProps {
  color?: keyof typeof colors;
}

export interface NewIconProps {
  type: 'solid' | 'duotone' | 'line';
  primaryColor?: string;
  secondaryColor?: string;
  size?: 'sm' | 'md' | 'lg';
}