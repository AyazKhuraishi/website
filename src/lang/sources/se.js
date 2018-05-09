// Swedish (FI)

module.exports = {
  navbar: { // Navbar
    items: [
      { name: 'Hem', href: '#home' },
      { name: 'Om mig', href: '#about' },
      { name: 'Kunskaper', href: '#skills' },
      { name: 'Projekt', href: '#projects' },
      { name: 'Kontakta mig', href: '#contact' }
    ]
  },
  hero: { // Hero
    typingTexts: [
      'Studerande',
      'Tekniknörd',
      'Freelance-programmerare',
      'Blivande programutvecklare'
    ],
    typingTextLowWidth: 'Studerande, freelance-programmerare och blivande programutvecklare från Finland'
  },
  about: { // About
    title: 'OM MIG',
    sectionTitle: 'Morjens!',
    p1: `Jag heter Linus Willner, och jag är en 18-årig studerande och freelance-programmerare från Finland. Trevligt att råkas!`,
    p2: `Jag är en verklig tekniknörd som njuter av programmering på fritiden. För det mesta utvecklar jag JavaScript-applikationer för serversidan och web-applikationer med allmänna frontend-paradigm som HTML och CSS.`,
    p3: `När det kommer till programmering är jag en självlärd freelance-programmerare. Jag är också kunnig inom tre språk (Finska, svenska och engelska) och skriver därmed ofta dokumentation för projekt jag deltar i.`,
    p4: {
      l1: `Jag har utvecklat ett antal program själv, till exempel `,
      l2: ` och `,
      l3: `, som varierar från nätsidor till fullt funktionerande skrivbordsprogram. Några av de större projekten jag har deltagit i innefattar `,
      l4: ` och `
    },
    p5: `Programvara med öppen källkod står mitt hjärta nära och jag söker alltid nya möjligheter att hjälpa till. Om du finner att jag kunde hjälpa dig med något, läs gärna vidare!`
  },
  skills: { // Skills
    title: `KUNSKAPER`,
    p1: `Jag är en freelance-programmerare med två års erfarenhet av utveckling med både öppen och sluten källkod. Jag har arbetat i både team-orienterade omgivningar i tillägg till ensamarbete.`,
    p2: `Jag utvecklar nätsidor och web-applikationer (React), JavaScript applikationer för serversidan (Node.js) och skrivbordsprogram (Electron). Jag har också erfarenhet i versionskontroll (Git), kontinuerlig integration och upprätthåll av produktionsfärdiga appliaktioner.`,
    p3: {
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
      { title: 'tag-replacer', text: 'En Node.js-modul för ersättande av schabloner i text. Stöder också TagScript.', github: 'https://github.com/linuswillner/tag-replacer' },
      { title: 'JagTag-JS', text: 'En JavaScript-version av JagTag-teckenspråket som är ursprungligen skrivet i Java.', github: 'https://github.com/TheSharks/JagTag-JS', website: 'https://thesharks.github.io/JagTag-JS' },
      { title: 'Live Sound Board', text: 'Ett soundboard-program för uppspelning av ljudeffekter under scenuppträdanden.', github: 'https://github.com/linuswillner/LiveSoundBoard' },
      { title: 'Weather Observatory', text: 'En enkel, säker och skarvbar väderapplikation som jag gjorde till en Reaktor-utmaning.', github: 'https://github.com/linuswillner/Weather-Observatory', website: 'https://linuswillner.me/weather' }
    ]
  },
  contact: { // Contact
    title: `KONTAKTA MIG`,
    p1: {
      l1: `Om du vill ta kontakt med mig för att fråga något, formellt eller ej, är e-post oftast den bästa metoden för det.`,
      l2: `Jag läser min e-post ofta och försöker svara så gott jag kan.`
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
    copyright: `Copyright (c) ${new Date().getFullYear()} Linus Willner. Alla rättigheter reserverade.`,
    tech: {
      l1: `Byggt med `,
      l2: `React`,
      l3: `Sass`,
      l4: `och`,
      l5: `Bulma`
    },
    location: `Programmerat med ❤️ i Lovisa, Finland.`
  }
}
