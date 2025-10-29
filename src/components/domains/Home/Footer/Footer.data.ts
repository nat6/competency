import tg from '@/assets/images/footer/tg.svg';
import yt from '@/assets/images/footer/yt.svg';

export const FOOTER_TEXT = 'We’re a small team of IT enthusiasts driven by a big vision — to make Cyprus a vibrant center for tech innovation. Our mission is to spotlight hackathons and other IT competitions, keeping developers and tech professionals informed and inspired. We believe that bringing people together around bold challenges fuels creativity, skills, and progress. If you’re planning an event — we’re here to help you connect with the right audience. If you’re looking to grow — you’ve come to the right place.';

export const FOOTER_SOCIALS = [
  {
    id: '1',
    link: 'https://t.me/',
    type: 'telegram',
    image: tg.src,
  },
  {
    id: '2',
    link: 'https://www.youtube.com/',
    type: 'youtube',
    image: yt.src,
  },
];

export const FOOTER_COPYRIGHT = `© ${ new Date().getFullYear() } CompetenCY — all right reserved`;

export const FOOTER_DOCS = {
  terms: {
    label: 'Terms of Service',
    url: '',
  },
  privacy: {
    label: 'Privacy Policy',
    url: '',
  },
};
