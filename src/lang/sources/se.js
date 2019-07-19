const moment = require('moment')

// Swedish (FI)

export default {
  hero: { // Hero
    typingTexts: [
      'Studerande',
      'Teknikhobbyist',
      'Freelance-programmerare',
      'Blivande IKT-ingenjör'
    ],
    typingTextLowWidth: 'Studerande, freelance-programmerare, blivande IKT-ingenjör'
  },
  about: { // About
    title: 'OM MIG',
    sectionTitle: 'Morjens!',
    p1: `Jag heter Linus Willner, och jag är en ${moment().diff(moment('1999-06-18'), 'years')}-årig studerande och freelance-programmerare från Finland. Trevligt att råkas!`,
    p2: `Jag är en verklig tekniknörd som njuter av programmering på fritiden. Min bravur är att bygga web-applikationer med lite backend-programmering strött däromkring.`,
    p3: `Sedan 2017 har jag sysslat med programutveckling i diverse hörn av nätet, mestadels inom open source software. Jag har jobbat som programmerare för det mesta, men därtill också som dokumentationsskribent, lokalisator och kvalitetskontrollant.`,
    p4: {
      l1: `Min huvudsakliga position är för tillfället hos `,
      l2: `, där jag utvecklar och upprätthåller projekt som `,
      l3: `. Jag gör detta på fritiden vid sidan av studier och arbete.`
    },
    p5: {
      l1: `Jag är mest känd för mitt arbete inom projekt som `,
      l2: ` och `,
      l3: `, men jag har även gjort ett antal program på eget bevåg. Dessa innefattar allt från backend-applikationer till nätsidor och fullt funktionerande skrivbordsprogram. Exempel på program jag byggt innefattar `,
      l4: ` och `
    },
    p6: `Jag utför för tillfället min militärtjänstgöring som virtualutbildningsassistent vid Nylands brigad, varefter jag inleder studier inom informations- och kommunikationsteknologi vid Metropolia yrkeshögskola för att bli programutvecklare.`
  },
  skills: { // Skills
    title: `KUNSKAPER`,
    p1: `Jag är en freelance-programmerare med flera års erfarenhet i ett brett spektrum av omgivningar, i team stora som små.`,
    p2: `Jag har utvecklat nätsidor och web-applikationer, backend-program och även några små skrivbordsprogram. Jag har även kunskaper i DevOps-utveckling på freelance-nivå (Code review, Continuous Integration, osv.). Därtill har jag gott kunnande inom sysadmin från diverse Linux-omgivningar.`,
    p3: `Bifogat finns en lista på programmeringsspråk och frameworks jag kan bäst och har jobbat med mest, men jag är alltid öppen för att lära mig något nytt.`,
    p4: {
      l1: `De flesta av projekten jag har gjort eller deltagit i kan hittas på min `,
      l2: `GitHub-sida`,
      l3: ` och jag håller alla mina projekt som har öppen källkod på denna plattform.`
    }
  },
  projects: { // Projects
    title: `PROJEKT`,
    p1: {
      l1: `Detta är ett utdrag av projekt jag har gjort eller deltagit i. För den kompletta listan, se min `,
      l2: `GitHub-sida`
    },
    cards: [
      { title: 'react-console-emulator', text: 'En månsidig och "hackable" Unix-terminalemulator i React jag byggt för JS-RCON.', github: 'https://github.com/js-rcon/react-console-emulator' },
      { title: 'JagTag-JS', text: 'En JavaScript-version av JagTag-teckenspråket som är ursprungligen skrivet i Java.', github: 'https://github.com/TheSharks/JagTag-JS', website: 'https://thesharks.github.io/JagTag-JS' },
      { title: 'JS-RCON', text: 'En omfattande och modern serveradministrationspanel för Team Fortress 2.', github: 'https://github.com/js-rcon' },
      { title: 'tag-replacer', text: 'En Node.js-modul för ersättande av schabloner i text. Stöder också TagScript.', github: 'https://github.com/linuswillner/tag-replacer' }
    ]
  },
  contact: { // Contact
    title: `KONTAKTA MIG`,
    p1: {
      l1: `Om du vill ta kontakt med mig för att fråga något, formellt eller ej, är e-post oftast den bästa metoden för det.`,
      l2: `Du kan även kasta ett meddelande i min riktning på Twitter om du föredrar, länk nedan.`
    },
    p2: {
      l1: `För mer informell konversation är mina direktmeddelanden på `,
      l2: `Discord`,
      l3: ` alltid öppna.`
    },
    p3: `Slutligen, ifall du vill bara följa med vad jag gör, har jag lämnat några länkar till mina sociala media här.`,
    email: `E-post`
  },
  footer: {
    copyright: `Copyright (c) ${moment().format('YYYY')} Linus Willner. Alla rättigheter reserverade. Pärmbild: Chris Ried/Unsplash`,
    tech: {
      l1: `Byggt med `,
      l2: `React`,
      l3: ` Sass `,
      l4: `och `,
      l5: `Bulma`
    },
    location: ` Byggt med äkta naturenlig nörd.`
  }
}
