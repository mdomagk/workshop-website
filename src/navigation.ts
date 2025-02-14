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
        {
          text: 'Organizing Committee',
          href: getPermalink('/#committee'),
        },
      ],
    },
    {
      text: 'Program',
      href: getPermalink('/program'),
      links: [
        {
          text: 'Keynote Speakers',
          href: getPermalink('/program#keynote-speakers'),
        },
        {
          text: 'Preliminary Program',
          href: getPermalink('/program#preliminary-program'),
        },
      ],
    },
    {
      text: 'Authors',
      href: getPermalink('/authors'),
      links: [
        {
          text: 'Important Dates',
          href: getPermalink('/authors#important-dates'),
        },
        {
          text: 'Abstract Submission',
          href: getPermalink('/authors#abstract-submission'),
        },
        {
          text: 'Presentation Details',
          href: getPermalink('/authors#presentation-details'),
        },
        // {
        //   text: 'Oral Presentation',
        //   href: getPermalink('/authors#oral-presentation'),
        // },
        // {
        //   text: 'Poster Session',
        //   href: getPermalink('/authors#poster-session'),
        // },
      ],
    },
    {
      text: 'Registration',
      href: getPermalink('/registration'),
    },
    {
      text: 'Venue',
      href: getPermalink('/venue'),
      links: [
        {
          text: "King's College London",
          href: getPermalink('/venue#kings-college-london'),
        },
        {
          text: 'Accommodation',
          href: getPermalink('/venue#accommodation'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contacts'),
    },
  ],
  actions: [{ text: 'Brochure (PDF)', href: '/documents/Brochure-ICHQP-workshop.pdf', target: '_blank' }],
};

export const footerData = {
  links: [
    //   {
    //     title: 'Organization',
    //     links: [
    //       { text: 'King`s College London', href: 'https://www.kcl.ac.uk/nmes' },
    //       { text: 'TUD Dresden University of Technology', href: 'https://tu-dresden.de/ing/elektrotechnik/ieeh' },
    //     ],
    //   },
  ],
  secondaryLinks: [{ text: 'Impressum & Datenschutz', href: getPermalink('/impressum') }],
  socialLinks: [
    //     { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    //     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    //     { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    //     { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //     { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: ``,
  //   Build with <a class="underline dark:text-muted" href="https://astro.build/">Astro</a> web framework
  // `,
};
