import cn from 'clsx';

import { SECTIONS_DATA } from '@/utils/constants';

import { Background } from '@/components/domains/Home/Promo/Background';
import { RegistrationButton } from '@/components/domains/Home/RegistrationButton';
import { Title } from '@/components/domains/Home/Promo/Title';
import { PromoContent } from '@/components/domains/Home/Promo/PromoContent';

import { GamethonesButton } from '@/components/domains/Home/Promo/GamethonesButton';

import styles from '@/components/domains/Home/Promo/Promo.module.scss';


export const Promo = () => {
  return (
    <section id={ SECTIONS_DATA.competency.id }
             className={ cn( styles.promo, 'section' ) }
    >
      <Background/>

      <div className={ styles.promo__container }>
        {/*<RegistrationButton className={ styles.promoRegistrationButton }/>*/}
        <Title/>
        {/*<PromoContent/>*/}
        {/*<GamethonesButton/>*/}
      </div>
    </section>
  );
};
