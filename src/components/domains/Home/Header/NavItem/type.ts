import { Variants } from "framer-motion";

import {
  TScreenVariant,
  TNavItemType,
} from "@/components/domains/Home/Header/type";
import { INavItem } from "@/components/domains/Home/Header/type";

export interface INavItemProps {
  item: INavItem;
  hasChildren?: boolean;
  isOpening?: boolean;
  isActive?: boolean;
  className?: string;
  animationVariant?: string;
  index?: number;
  type?: TNavItemType;
  screenVariant?: TScreenVariant;
  variants?: Variants;
  iconVariants?: Variants;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
}

export interface IArrowIconProps {
  isActive?: boolean;
  directionAngle?: number;
}
