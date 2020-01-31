const moment = require('moment')

// English (GB)

export default {
  hero: { // Hero
    typingTexts: [
      'Student',
      'Tech geek',
      'Freelance developer',
      'Software engineer-to-be'
    ],
    typingTextLowWidth: 'Student, freelance developer, software engineer-to-be'
  },
  about: { // About
    title: 'ABOUT ME',
    sectionTitle: 'Hello there!',
    p1: `I'm Linus Willner, a ${moment().diff(moment('1999-06-18'), 'years')}-year-old student and freelance developer from Finland. Pleasure to meet you!`,
    p2: 'Hailing from a small town called Loviisa in Eastern Uusimaa, I\'m an avid tech tinkerer and software engineering student. My forte is developing web applications, and some backend development and systems administration on the side.',
    p3: 'Since 2017, I\'ve been doing software development, mostly in the field of open source software. I have worked as a programmer and systems administrator for the most part, and aside of that in areas like documentation, localisation and quality assurance.',
    p4: 'I\'m a multilingual person, being equally proficient in three languages - namely, Finnish, Swedish, and English. I\'m a native speaker of the former two.',
    p5: {
      l1: 'I\'m perhaps best known for my contributions to projects like ',
      l2: ' and ',
      l3: ', but I have also created a fair few programs of my own. These range from backend applications to websites and full-fledged desktop applications. Some examples of my work are ',
      l4: ' and '
    },
    p6: 'Most recently, I was a Virtual Training Assistant at the Nyland Brigade, where I worked as a conscript programmer and systems administrator for the Finnish Defence Forces. I\'m currently studying Information and Communication Technology at Metropolia University of Applied Sciences, expected to graduate at the end of 2023.'
  },
  skills: { // Skills
    title: 'SKILLS',
    p1: 'I\'m a freelance developer with several years of experience in a multitude of environments, in teams both large and small.',
    p2: 'I have developed websites and web applications, backend software and also some simple desktop applications. I additionally have experience in freelance-level DevOps development (Code review, Continuous Integration, etc.). Furthermore, I have a fair chunk of sysadmin experience working with various Linux environments.',
    p3: 'Attached is a list of the languages and frameworks I know best and have worked with the most, but I am always open for learning new things.',
    p4: {
      l1: 'Most of the projects I have created or contribute to can be found on my ',
      l2: 'GitHub page',
      l3: ' and I keep all my open source projects on the platform.'
    }
  },
  projects: { // Projects
    title: 'PROJECTS',
    p1: {
      l1: 'This is a showcase of projects I have created or contributed to. For the full list, see my ',
      l2: 'GitHub page'
    },
    cards: [
      { title: 'react-console-emulator', text: 'A powerful and flexible Unix emulator component for React that I built for JS-RCON.', github: 'https://github.com/js-rcon/react-console-emulator' },
      { title: 'JagTag-JS', text: 'A JavaScript port of the JagTag text parsing language, which was originally written in Java.', github: 'https://github.com/TheSharks/JagTag-JS' },
      { title: 'JS-RCON', text: 'An extensive and modern server management interface for Team Fortress 2.', github: 'https://github.com/js-rcon' },
      { title: 'tag-replacer', text: 'A Node.js module for replacing template tags in strings. Includes TagScript support.', github: 'https://github.com/linuswillner/tag-replacer' }
    ]
  },
  contact: { // Contact
    title: 'CONTACT',
    p1: {
      l1: 'If you want to reach out to me for any sort of inquiry, be it formal or not, email is usually the best way to do that.',
      l2: 'You can also holler at me on Twitter if you prefer, link below.'
    },
    p2: {
      l1: 'For more informal conversation in the form of instant messaging, my DMs on ',
      l2: 'Discord',
      l3: ' are open.'
    },
    p3: 'Finally, if you want to just see what I\'m up to, I\'ve left some links to my social media here as well.',
    email: 'Email'
  },
  footer: {
    copyright: `Copyright (c) ${moment().format('YYYY')} Linus Willner. All rights reserved.`,
    photos: {
      l1: 'Cover photo: ',
      l2: 'Profile photo: '
    },
    tech: {
      l1: 'Achieved with ',
      l2: 'React',
      l3: ' Sass ',
      l4: 'and ',
      l5: 'Bulma'
    },
    location: ' Created with genuine organic geek.'
  }
}
