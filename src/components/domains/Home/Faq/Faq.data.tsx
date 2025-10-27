import { IFaqItem } from './type';

const panelStyle = {
  marginBottom: 20,
  borderRadius: 10,
  border: 'none',
};

export const FAQ_LIST: IFaqItem[] = [
  {
    id: '1',
    theme: [
      {
        id: '0',
        text: 'Registration & Participation',
      },
    ],
    content: [
      {
        key: '1',
        label:
          'I am 18 during the event, can i still participate?',
        children: (
          <div>
            <p>
              Absolutely! Simply make sure to feature the school you go to and if you are under 18, you will need your
              parents/legal guardians permission first. We do not ask for your information, so its good to be truthful
              when signing up.
            </p>
          </div>
        ),
        style: panelStyle,
      },
      {
        key: '2',
        label: 'What if i register and miss the event?',
        children: (
          <div>
            <p>
              No worries! Participation isn't nescessary, but we do recommend registering early and planning ahead so
              you don't miss out for sure!
            </p>
          </div>
        ),
        style: panelStyle,
      },
      {
        key: '3',
        label:
          'Can i register after the registration period ends?',
        children: (
          <div>
            <p>
              Unfortunately no, that's not possible, once the period ends, all the entrants are finalized and no more
              participants are allowed to enter.
            </p>
          </div>
        ),
        style: panelStyle,
      },
      {
        key: '4',
        label:
          'What if i do not have enough team members?',
        children: (
          <div>
            <p>
              Don't sweat! This event is individual players only, so it's a solo event with no teams.
            </p>
          </div>
        ),
        style: panelStyle,
      },
    ],
  },
  {
    id: '2',
    theme: [
      {
        id: '0',
        text: 'Game/Documentation',
      },
    ],
    content: [
      {
        id: '0',
        label: 'How do i reach out to the organisers about any questions i have during the event?',
        children: (
          <div>
            <p>
              Questions are asked through the general chat, by tagging our help bot. With no tag, your question may go
              unnoticed.
            </p>
          </div>
        ),
        style: panelStyle,
      },
      {
        key: '1',
        label: 'How do i keep up with the flow of the game?',
        children: (
          <div>
            <p>
              After a successful registration, you will recieve a link that redirects you to our general chat, where we
              will update you on what is going on, the general information of the game and where you can ask questions
            </p>
          </div>
        ),
        style: panelStyle,
      },
      {
        key: '2',
        label: 'Can i get a participation award?',
        children: (
          <div>
            <p>
              Yes! We give out participation certificates that you pick up in real life like all our prizes, and to be
              considered an active participant you simply have to score a few points and youre all set!
            </p>
          </div>
        ),
        style: panelStyle,
      },
    ],
  },
];
