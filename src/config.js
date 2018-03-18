// Global configuration file

export const config = {
  // Common variables
  common: {
    // Sections on the page
    sections: [
      'home',
      'about',
      'skills',
      'projects',
      'contact'
    ]
  },
  // Navbar
  navbar: {
    // Navbar items
    navbarItems: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]
  },
  // Hero section
  hero: {
    // Texts to type out in the console field
    typingTexts: [
      'Student',
      'Tech geek',
      'Freelance developer',
      'Aspiring software engineer'
    ],
    // Typing delay
    typingDelay: 1000
  },
  // Projects section
  projects: {
    // Cards to display
    // Note: Texts will eventually be migrated to the lang system when that gets implemented
    cards: [
      { title: 'tag-replacer', text: 'A Node.js module for replacing template tags in strings. Includes TagScript support.', github: 'https://github.com/linuswillner/tag-replacer' },
      { title: 'Live Sound Board', text: 'A soundboard application for providing live sound effects during stage shows.', github: 'https://github.com/linuswillner/LiveSoundBoard' },
      { title: 'Weather Observatory', text: 'A simple, secure and extensible weather application built for a Reaktor challenge.', github: 'https://github.com/linuswillner/Weather-Observatory', website: 'https://linuswillner.me/weather' },
      { title: 'react-website-boilerplate', text: 'My personal React boilerplate with hot reloading, SASS support and Standard code style.', github: 'https://github.com/linuswillner/react-website-boilerplate' }
    ]
  },
  // Contact section
  contact: {
    // Social media icons
    icons: [
      { link: 'https://github.com/linuswillner', iconClassName: 'fab fa-github' },
      { link: 'https://linkedin.com/in/linuswillner', iconClassName: 'fab fa-linkedin' },
      { link: 'https://twitter.com/linuswillner', iconClassName: 'fab fa-twitter' },
      { link: 'https://instagram.com/linuswillner', iconClassName: 'fab fa-instagram' }
    ]
  }
}
