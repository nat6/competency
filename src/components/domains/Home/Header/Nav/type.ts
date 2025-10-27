import { INavItem } from '@/components/domains/Home/Header/type';

export interface INavProps {
  activeSection: string;
  navRef: React.RefObject<HTMLDivElement> | null;
}

export const NAV_GROUP_TYPES = {
  first: 'first',
  second: 'second',
} as const;

export type TNavGroup = keyof typeof NAV_GROUP_TYPES;

export interface IGroupOptions {
  itemActiveId: string | null;
  side: TNavGroup;
  items: INavItem[];
  setItemActiveId: ( id: string | null ) => void;
  onGroupEnter: () => void;
  onGroupLeave: () => void;
}
