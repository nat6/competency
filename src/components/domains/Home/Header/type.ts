export const SCREEN_VARIANTS = {
  desktop: "desktop",
  mobile: "mobile",
} as const;

export const ANIMATION_MODES = {
  open: "open",
  switch: "switch",
} as const;

export const NAV_ITEM_TYPES = {
  navLink: "navLink",
  arrowButton: "arrowButton",
  subNavLink: "subNavLink",
} as const;

export type TScreenVariant = keyof typeof SCREEN_VARIANTS;
export type TAnimationMode = keyof typeof ANIMATION_MODES;
export type TNavItemType = keyof typeof NAV_ITEM_TYPES;


export interface INavItem {
  label: string;
  footerLabel?: string;
  href?: string;
  iconPath?: string;
}

export interface INavItems {
  first: INavItem[];
  second: INavItem[];
}
