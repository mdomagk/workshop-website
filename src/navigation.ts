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
          text: 'Abstract submission',
          href: getPermalink('/speakers#abstract-submission'),
        },
        {
          text: 'Oral presentation',
          href: getPermalink('/speakers#oral-presentation'),
        },
        {
          text: 'Poster session',
          href: getPermalink('/speakers#poster-session'),
        },
      ],
    },
    {
      text: 'Registration',
      href: getPermalink('/registration'),
    },
    {
      text: 'Venue',
      href: getPermalink('/venue#kings-college-london'),
    },
    {
      text: 'Contact',
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
  //   Made with <a class="text-blue-600 underline dark:text-muted" href="https://astro.build/"> Astro.build</a> © 2024
  // `,
};
