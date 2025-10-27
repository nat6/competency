import cn from 'clsx';

import { Collapse } from 'antd';
// import { CaretRightOutlined } from '@ant-design/icons';

import { IFaqItem } from './type';

import { FAQ_LIST } from './Faq.data';

import { BaseSection } from '@/components/domains/Home/common/BaseSection';

import {
  SECTIONS_DATA,
} from '@/utils/constants';

import styles from './Faq.module.scss';

export const Faq = () => {
  return (
    <BaseSection
      id={ SECTIONS_DATA.faq.id }
      className={ cn( styles.faq, 'section' ) }
      sectionTitle={ SECTIONS_DATA.faq.title }
    >
        <div className={ styles.faq__wrapper }>
          { FAQ_LIST.map( ( item: IFaqItem ) => (
            <div key={ item.id } className={ styles.faq__item }>
              <div className={ cn( styles.faq__itemTitle ) }>

                { item.theme.map( ( element, index ) => (
                  <span key={ element.id }>
                  { element.text }
                    {/* whitespace for inner spans -- good theme subtitles splitting at the mobile screens */ }
                    { ( index !== item.theme.length - 1 && item.theme.length > 1 ) &&
                      (
                        ' '
                      )
                    }
                </span>
                ) ) }
              </div>
              <Collapse
                bordered={ false }
                // expandIcon={ ( { isActive } ) => <CaretRightOutlined rotate={ isActive ? 90 : 0 }/> }
                accordion
                items={ item.content }
                className={ styles.faq__accordion }/>
            </div>
          ) ) }
        </div>
</BaseSection>
  );
};

