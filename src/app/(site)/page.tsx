"use client";

import { Promo } from '@/components/domains/Home/Promo';
import { Stages } from '@/components/domains/Home/Stages';
import { Players } from '@/components/domains/Home/Players';
import { Schedule } from '@/components/domains/Home/Schedule';
import { Prizes } from '@/components/domains/Home/Prizes';
import { Statistics } from '@/components/domains/Home/Statistics';
import { Partners } from '@/components/domains/Home/Partners';
import { Faq } from '@/components/domains/Home/Faq';

const RatingPage = () => (
  <>
    <Promo/>
    <main className="main">
      <Stages/>
      <Players/>
      <Schedule/>
      <Prizes/>
      <Statistics/>
      <Faq/>
      <Partners/>
    </main>
  </>
);

export default RatingPage;
