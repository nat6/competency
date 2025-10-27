import { CollapseProps } from 'antd';

export interface IFaqThemeItem {
  id: string,
  text: string,
}

export interface IFaqItem {
  id: string,
  theme: IFaqThemeItem[],
  content: CollapseProps['items'],
}
