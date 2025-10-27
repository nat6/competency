import {
  NAV_ITEM_TYPES,
  TNavItemType,
} from "@/components/domains/Home/Header/type";
import { INavItem } from "@/components/domains/Home/Header/type";

export const checkItemType = (
  item: INavItem,
  type?: TNavItemType,
  hasChildren?: boolean,
): TNavItemType => {
  if (type) {
    return type;
  }

  if (hasChildren) {
    return NAV_ITEM_TYPES.arrowButton;
  }

  if (item.href) {
    return NAV_ITEM_TYPES.navLink;
  }

  return NAV_ITEM_TYPES.subNavLink;
};
