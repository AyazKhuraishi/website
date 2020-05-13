import moment from 'moment'

// Swedish (FI)

export default {
  // Hero
  hero: {
    typingTexts: [
      'Studerande',
      'Teknikhobbyist',
      'Freelance-programmerare',
      'Blivande ICT-ingenjör'
    ],
    typingTextLowWidth: 'Studerande, freelance-programmerare, blivande ICT-ingenjör'
  },
  // About
  about: {
    title: 'OM MIG',
    sectionTitle: 'Morjens!',
    p1: `Jag heter Linus Willner, och jag är en ${moment().diff(moment('1999-06-18'), 'years')}-årig studerande och freelance-programmerare från Finland. Trevligt att råkas!`,
    p2: 'Jag kommer från en liten stad vid namnet Lovisa i östra Nyland, och är en ivrig teknikmekare samt programmeringsstuderande. Min bravur är utvecklingen av web-applikationer, och därtill byggandet av backend-applikationer samt systemadministration.',
    p3: 'Sedan 2017 har jag sysslat med programutveckling, mestadels inom s.k. open source software. Jag har jobbat som programmerare och systemadministrator för det mesta, och därtill innehaft roller inom dokumentation, lokalisation och kvalitetskontroll.',
    p4: 'Jag är en flerspråkig person med likjämn kunskapsnivå i tre språk - närmare sagt finska, svenska och engelska. Mina modersmål är de två förstnämnda.',
    p5: {
      l1: 'Jag är mest känd för mitt arbete inom projekt som ',
      l2: ' och ',
      l3: ', men jag har även gjort ett antal program på eget bevåg. Dessa innefattar allt från backend-applikationer till nätsidor och fullt funktionerande skrivbordsprogram. Exempel på program jag byggt innefattar ',
      l4: ' och '
    },
    p6: 'För tillfället studerar jag informations- och kommunikationsteknologi vid Metropolia Ammattikorkeakoulu, varifrån jag förväntar mig att bli utexaminerad vid årsslutet 2023. I mina nuvarande arbetsuppgifter fungerar jag som programutvecklare för Tarra-Tac Ab. Före detta har jag fungerat som programmerare och/eller systemadministrator för bl.a. Försvarsmakten.'
  },
  // Skills
  skills: {
    title: 'KUNSKAPER',
    p1: 'Jag är en freelance-programmerare med flera års erfarenhet i ett brett spektrum av omgivningar, i team stora som små.',
    p2: 'Jag har utvecklat nätsidor och web-applikationer, backend-program och även några små skrivbordsprogram. Jag har även kunskaper i DevOps-utveckling på freelance-nivå (Code review, Continuous Integration, osv.). Därtill har jag gott kunnande inom sysadmin från diverse Linux-omgivningar.',
    p3: 'I denna sektion finns bifogad en lista på alla programmeringsspråk, system, frameworks osv. jag känner till och kan jobba med.',
    p4: {
      l1: 'De flesta av projekten jag har gjort eller deltagit i innefattar någon kombination av de här bifogade kunskaperna. Dessa projekt kan hittas på min ',
      l2: 'GitHub-sida',
      l3: ', och jag har även alla mina projekt med öppen källkod på den plattformen.'
    },
    p5: 'Tips: Ifall du inte känner till någon viss ikon, för muspekaren ovanom den för att få en mer utförlig beskrivning av vad den står för!'
  },
  // Projects
  projects: {
    title: 'PROJEKT',
    p1: {
      l1: 'Detta är endast ett kort utdrag av projekt jag har gjort eller deltagit i. För den kompletta listan, se min ',
      l2: 'GitHub-sida'
    },
    cards: [
      {
        title: 'react-console-emulator',
        text: 'En kraftfull och långtgående ställbar Unix-terminalemulator för React.',
        github: 'https://github.com/js-rcon/react-console-emulator',
        npm: 'https://npmjs.com/react-console-emulator',
        tags: ['React', 'JavaScript', 'Sass', 'NPM']
      },
      {
        title: 'dpkg-status-exporter',
        text: 'Ett program för export av information om programpaket på Debian-baserade operativsystem.',
        github: 'https://github.com/linuswillner/dpkg-status-exporter',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'tag-replacer',
        text: 'En enkel och lättviktad Node.js-modul för ersättning av diverse taggar i textsträngar.',
        github: 'https://github.com/linuswillner/tag-replacer',
        npm: 'https://npmjs.com/tag-replacer',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'check-ie',
        text: 'A lightweight, zero-dependency way to check if a user browser is Internet Explorer.',
        github: 'https://github.com/js-rcon/check-ie',
        npm: 'https://npmjs.com/check-ie',
        tags: ['Node.js', 'TypeScript', 'NPM']
      },
      {
        title: 'Metropolia-Team-Sigma/client',
        text: 'Sigma-chattapplikationens klientprototyp, ett projekt jag deltog i som en del av mina studier vid Metropolia AMK.',
        github: 'https://github.com/Metropolia-Team-Sigma/client',
        tags: ['Node.js', 'JavaScript', 'Crypto']
      },
      {
        title: 'Metropolia-Team-Sigma/backend',
        text: 'Sigma-chattapplikationens serverkomponentprototyp, ett projekt jag deltog i som en del av mina studier vid Metropolia AMK.',
        github: 'https://github.com/Metropolia-Team-Sigma/backend',
        tags: ['Node.js', 'JavaScript', 'Express', 'ArangoDB', 'WebSocket']
      },
      {
        title: 'TheSharks/JagTag-JS',
        text: 'En JavaScript-översättning av JagTag-textskriptningsspråket, vars ursprung ligger i Java.',
        github: 'https://github.com/TheSharks/JagTag-JS',
        npm: 'https://www.npmjs.com/package/@thesharks/jagtag-js',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'TheSharks/WildBeast',
        text: 'En mångfunktionlig Discord-bot och relaterad framework, vars syfte är att vara lätt att använda, utvidga och modifiera.',
        github: 'https://github.com/TheSharks/WildBeast',
        website: 'https://docs.thesharks.xyz',
        tags: ['Node.js', 'JavaScript']
      }
    ]
  },
  // Contact
  contact: {
    title: 'KONTAKTA MIG',
    p1: {
      l1: 'Om du vill ta kontakt med mig för att fråga något, formellt eller ej, är e-post oftast den bästa metoden för det.',
      l2: 'Du kan även kasta ett meddelande i min riktning på Twitter om du föredrar, länk nedan.'
    },
    p2: {
      l1: 'För mer informell konversation är mina direktmeddelanden på ',
      l2: 'Discord',
      l3: ' alltid öppna.'
    },
    p3: 'Slutligen, ifall du vill bara följa med vad jag gör, har jag lämnat några länkar till mina sociala media här.',
    email: 'E-post'
  },
  // Footer
  footer: {
    copyright: `Copyright (c) ${moment().format('YYYY')} Linus Willner. Alla rättigheter reserverade.`,
    photos: {
      l1: 'Pärm-📸: ',
      l2: 'Profil-📸: '
    },
    tech: {
      l1: 'Byggt med ',
      l2: 'React',
      l3: ' Sass ',
      l4: 'och ',
      l5: 'Bulma'
    },
    location: ', samt ett stort antal koppar ☕.'
  }
}
