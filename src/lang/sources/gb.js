import moment from 'moment'
import TarraTacLogo from '../../assets/images/logos/tarratac.png'
import FdfLogo from '../../assets/images/logos/fdf.png'
import TcdLogo from '../../assets/images/logos/tcd.png'
import WbLogo from '../../assets/images/logos/wb.png'

// English (GB)
export default {
  // Hero
  hero: {
    typingTexts: [
      'Student',
      'Tech geek',
      'Freelance developer',
      'Software engineer-to-be'
    ],
    typingTextLowWidth: 'Student, freelance developer, software engineer-to-be'
  },
  // About
  about: {
    title: 'ABOUT ME',
    sectionTitle: 'Hello there!',
    p1: `I'm Linus, a ${moment().diff(moment('1999-06-18'), 'years')}-year-old student and freelance developer from Finland. Pleasure to meet you!`,
    p2: 'Hailing from a small town called Loviisa in Eastern Uusimaa, I\'m an avid tech tinkerer and software engineering student. My forte is developing web applications, and some backend development and systems administration on the side.',
    p3: 'Since 2017, I\'ve been doing software development, mostly in the field of open source software. I have worked as a programmer and systems administrator for the most part, and aside of that in areas like documentation, localisation and quality assurance.',
    p4: 'I\'m a multilingual person, being equally proficient in three languages - namely, Finnish, Swedish, and English. I\'m a native speaker of the former two.',
    p5: {
      l1: 'I\'m perhaps best known for my maintenance of and contributions to projects like ',
      l2: ' and ',
      l3: ', but I have also created a fair few programs of my own. These range from backend applications to websites and full-fledged desktop applications. Some examples of my work are ',
      l4: ' and '
    },
    p6: 'In the past, I have worked as a software developer and/or systems administrator for, among others, Oy Tarra-Tac Ab and the Finnish Defence Forces.',
    p7: 'I\'m currently studying Information and Communication Technology at Metropolia University of Applied Sciences. I\'m majoring in Software Engineering, and am expected to graduate at the end of 2023.'
  },
  // Experience
  experience: {
    title: 'EXPERIENCE',
    workCategoryTitle: 'Work experience',
    volunteerCategoryTitle: 'Volunteer experience',
    employmentTypes: {
      fullTime: 'Full-time',
      partTime: 'Part-time',
      freelance: 'Freelance',
      volunteer: 'Volunteer',
      conscript: 'Conscript'
    },
    positions: {
      work: [
        {
          role: 'Full Stack Developer',
          type: 'fullTime',
          date: 'June - July 2020',
          company: {
            name: 'Oy Tarra-Tac Ab',
            link: 'https://tarratac.fi',
            icon: TarraTacLogo
          },
          location: 'Loviisa, Uusimaa',
          description: 'As my summer job for 2020, I worked at Tarra-Tac as a Full Stack Developer, working to create a new billing program based on management-provided specifications. Workflows in the company were greatly effectivised as a result of the adoption of the program.',
          tags: ['Frontend', 'Backend', 'Design', 'Full-stack', 'Sysadmin', 'Networking', 'DevOps']
        },
        {
          role: 'Virtual Training Assistant',
          type: 'conscript',
          date: 'February - September 2019',
          company: {
            name: 'Finnish Defence Forces',
            link: 'https://puolustusvoimat.fi',
            icon: FdfLogo
          },
          location: 'Dragsvik, Raasepori',
          description: 'During my military service at the Nyland Brigade, I served as a Virtual Training Assistant. My tasks included working as a software developer, systems-/network administrator and IT technician. Alongside this, I also worked as a combat tactics teacher and simulator instructor.',
          tags: ['Frontend', 'Backend', 'Sysadmin', 'DevOps', 'Hardware', 'Networking', 'Technical installations']
        }
      ],
      volunteer: [
        {
          role: 'Co-owner',
          type: 'volunteer',
          date: 'October 2020 - Present',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'As the second co-owner of The Coding Den, I\'m tasked with leading the community administration and moderation teams, along with functioning as the highest executive authority in the community.',
          tags: ['Leadership', 'Community management']
        },
        {
          role: 'Content Moderator (Junior, senior)',
          type: 'volunteer',
          date: 'Junior Feb 2018 - Mar 2020, senior Mar - Oct 2020',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'As a junior (and eventually senior) content moderator, my task in The Coding Den was to, alongside moderating discussion fora, leading and mentoring junior moderators and partaking in making administrative decisions regarding the development and future of the community.',
          tags: ['Content moderation', 'Leadership', 'Community management']
        },
        {
          role: 'Software Developer',
          type: 'volunteer',
          date: 'August 2016 - Present',
          company: {
            name: 'TheSharks',
            link: 'https://github.com/TheSharks',
            icon: WbLogo
          },
          location: 'International',
          description: 'At TheSharks, I am an open source contributor and develop software for the group. In addition, I do technical documentation, system administration, localisation and remote infrastructure management.',
          tags: ['Frontend', 'Backend', 'Sysadmin', 'Documentation', 'Localisation']
        }
      ]
    }
  },
  // Skills
  skills: {
    title: 'SKILLS',
    p1: 'I\'m a software developer with several years of experience in a multitude of environments, in teams both large and small.',
    p2: 'I have developed several websites and web applications, backend software and desktop applications. Additionally, I have experience in DevOps tasks (Testing and automation thereof, code review, Continuous Integration and Deployment, etc.). Furthermore, I have a fair chunk of sysadmin experience in working with various server environments, both Windows and Linux.',
    p3: 'Attached in this section is a list of the languages, libraries, frameworks and so on which I know and can work with.',
    p4: {
      l1: 'Most of the projects I have created or contribute to involve some combination of the attached skills. These projects can be found on my ',
      l2: 'GitHub page',
      l3: ', and I keep all my open source projects on that platform as well.'
    },
    p5: '(Tip: If you don\'t know what a particular icon means, click it to find out!)'
  },
  // Projects
  projects: {
    title: 'PROJECTS',
    p1: {
      l1: 'This is just a brief showcase of projects I have created or contributed to. For the full list, see my ',
      l2: 'GitHub page'
    },
    cards: [
      {
        title: 'react-console-emulator',
        text: 'A powerful and flexible Unix emulator component for React, currently in use by open source efforts from Facebook, Microsoft and Amazon.',
        github: 'https://github.com/linuswillner/react-console-emulator',
        npm: 'https://npmjs.com/react-console-emulator',
        tags: ['React', 'JavaScript', 'NPM']
      },
      {
        title: 'dpkg-status-exporter',
        text: 'A program to expose key information about packages on Debian-based operating systems. (Solution to Reaktor junior developer pre-assignment 2020)',
        github: 'https://github.com/linuswillner/dpkg-status-exporter',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'reaktor-assignment-2021',
        text: 'My solution to the 2021 Reaktor junior developer assignment about working around bad API design, powered by Svelte, Express and Socket.IO.',
        github: 'https://github.com/linuswillner/reaktor-assignment-2021',
        website: 'https://sheltered-reef-26200.herokuapp.com',
        tags: ['Node.js', 'Svelte', 'JavaScript', 'Web']
      },
      {
        title: 'TheCodingDen/projects-bot',
        text: 'A Discord bot used for processing project showcase submissions in The Coding Den, an online community run by myself and others.',
        github: 'https://github.com/TheCodingDen/projects-bot',
        tags: ['Node.js', 'TypeScript']
      },
      {
        title: 'TheCodingDen/infra',
        text: 'IaC configurations used by The Coding Den, powered by Terraform and Kubernetes and backed by DigitalOcean.',
        github: 'https://github.com/TheCodingDen/infra',
        tags: ['IaC', 'Terraform', 'Kubernetes']
      },
      {
        title: 'watr-app/app',
        text: 'Android application for hydration tracking, built during the Metropolia UAS Mobile Health Applications course.',
        github: 'https://github.com/watr-app/app',
        website: 'https://watr-app.github.io/app',
        tags: ['Java', 'Android']
      },
      {
        title: 'TheSharks/JagTag-JS',
        text: 'A JavaScript (later TypeScript) port of the JagTag text parsing language, which was originally written in Java.',
        github: 'https://github.com/TheSharks/JagTag-JS',
        npm: 'https://www.npmjs.com/package/@thesharks/jagtag-js',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'TheSharks/WildBeast',
        text: 'A multifunctional Discord bot, intended to provide a framework that\'s easy to use, extend and modify.',
        github: 'https://github.com/TheSharks/WildBeast',
        website: 'https://docs.thesharks.xyz',
        tags: ['Node.js', 'JavaScript']
      }
    ]
  },
  // Contact
  contact: {
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
  // Footer
  footer: {
    copyright: `Copyright (c) ${moment().format('YYYY')} Linus Willner. All rights reserved.`,
    photos: {
      l1: 'Cover 📸: ',
      l2: 'Profile 📸: '
    },
    tech: {
      l1: 'Achieved with ',
      l2: 'React',
      l3: ' Sass ',
      l4: 'and ',
      l5: 'Bulma'
    },
    location: ', along with several cups of ☕.'
  }
}
