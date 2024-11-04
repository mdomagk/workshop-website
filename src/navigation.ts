import { getPermalink } from './utils/permalinks';
// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Workshop',
      links: [
        {
          text: 'About',
          href: getPermalink('/#about'),
        },
        {
          text: 'Concept',
          href: getPermalink('/#concept'),
        },
        {
          text: 'Topics',
          href: getPermalink('/#topics'),
        },
      ],
    },
    {
      text: 'Program',
      href: getPermalink('/program'),
    },
    {
      text: 'Speakers',
      links: [
        {
          text: 'Important dates',
          href: getPermalink('/speakers#important-dates'),
        },
        {
          text: 'Presentations',
          href: getPermalink('/speakers#presentations'),
        },
        {
          text: 'Posters',
          href: getPermalink('/speakers#posters'),
        },
 
      ],
    },
    {
      text: 'Registration',
      href: getPermalink('/registration'),
    },
    {
      text: 'Venue',
      links: [
        {
          text: 'King’s College London  ',
          href: getPermalink('/venue#kings-college-london'),
        },
        {
          text: 'Accomodation',
          href: getPermalink('/venue#accomodation'),
        },
      ],
    },
    {
      text: 'Contacts',
      href: getPermalink('/contacts'),
    },
  ],
  actions: [{ text: 'Flyer (PDF)', href: '/ICHQP-workshop-flyer.pdf', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Organisation',
      links: [
        { text: 'King`s College London', href: 'https://www.kcl.ac.uk/nmes' },
        { text: 'TUD Dresden University of Technology', href: 'https://tu-dresden.de/ing/elektrotechnik/ieeh' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
