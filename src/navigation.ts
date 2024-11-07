import { getPermalink } from './utils/permalinks';
// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Workshop',
      href: getPermalink('/'),
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
      href: getPermalink('/speakers'),
      links: [
        {
          text: 'Important Dates',
          href: getPermalink('/speakers#important-dates'),
        },
        {
          text: 'Abstract Submission',
          href: getPermalink('/speakers#abstract-submission'),
        },
        {
          text: 'Oral Presentation',
          href: getPermalink('/speakers#oral-presentation'),
        },
        {
          text: 'Poster Session',
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
      href: getPermalink('/venue'),
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
  secondaryLinks: [{ text: 'Impressum & Datenschutz', href: getPermalink('/impressum') }],
  socialLinks: [
    //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made with <a class="underline dark:text-muted" href="https://astro.build/"> Astro.build </a> web framework
  `,
};
