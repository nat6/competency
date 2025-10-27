import {
  bebas,
  raleway,
  sourceCode,
  michroma
} from '@/app/fonts';
import cn from 'clsx';

// import { Footer } from '@/components/domains/Home/Footer';
import { Header } from '@/components/domains/Home/Header';

import { METADATA } from '@/utils/constants';

import '@/styles/home.scss';

export const metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

const RatingLayout = ( { children }: { children: React.ReactNode } ) => (
  <div
    className={ cn(
      raleway.variable,
      sourceCode.variable,
      bebas.variable,
      michroma.variable,
      'competencyPage',
      'fontRaleway',
      'fontMichroma',
    ) }
  >

    <Header/>
    { children }
    {/*<Footer/>*/}
  </div>
);

export default RatingLayout;
