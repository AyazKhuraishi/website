const moment = require('moment')

// Finnish

export default {
  hero: { // Hero
    typingTexts: [
      'Opiskelija',
      'Tekniikkaharrastaja',
      'Freelance-kehittäjä',
      'Tuleva ATK-insinööri'
    ],
    typingTextLowWidth: 'Opiskelija, freelance-kehittäjä, tuleva ATK-insinööri'
  },
  about: { // About
    title: 'TIETOJA',
    sectionTitle: 'Terve!',
    p1: `Nimeni on Linus Willner, ja olen ${moment().diff(moment('1999-06-18'), 'years')}-vuotias opiskelija sekä freelance-kehittäjä Suomesta. Mukava tavata!`,
    p2: 'Olen lähtöisin pienestä kaupungista nimeltä Loviisa itäiseltä Uudeltamaalta, ja olen innokas tekniikan sormeilija sekä ohjelmistotuotannon opiskelija. Web-applikaatioiden kehitys on vahvuuteni, jonka lisäksi kehitän myös backend-applikaatioita ja suoritan järjestelmäylläpitoa.',
    p3: 'Vuodesta 2017 lähtien olen toiminut ohjelmistokehittäjänä, suurimmaksi osaksi avoimen lähdekoodin saralla. Olen työskennellyt enimmäkseen ohjelmoijana sekä järjestelmäylläpitäjänä, jonka lisäksi olen toiminut dokumentaatio-, käännös- ja laadunvalvontatehtävissä.',
    p4: 'Olen monikielinen persoona joka hallitsee samantasoisesti kolmea kieltä - tarkemmin sanottuna suomea, ruotsia sekä englantia. Äidinkieleni ovat listan kaksi ensimmäistä kieltä.',
    p5: {
      l1: 'Minut tunnetaan arvatenkin parhaimmin projekteista kuten ',
      l2: ' sekä ',
      l3: ', mutta olen myös kehittänyt lukuisia ohjelmia omin neuvoin. Näistä löytyy kaikkea backend-applikaatioista verkkosivuihin ja työpöytäohjelmiin. Muutamia esimerkkejä töistäni ovat ',
      l4: ' ja '
    },
    p6: 'Viimeisin tehtäväni oli toimia virtuaalikoulutustukihenkilönä Uudenmaan prikaatissa, jossa työskentelin Puolustusvoimille varusmiesohjelmoijana sekä -järjestelmäylläpitäjänä. Seuraava edesottamukseni on tieto- ja viestintätekniikan opintojen aloitus Metropolia Ammattikorkeakoulussa tammikuussa 2020.'
  },
  skills: { // Skills
    title: 'TAITOJA',
    p1: 'Olen freelance-kehittäjä jolla on useamman vuoden kokemus monenlaisista ympäristöistä, ',
    p2: 'Olen kehittänyt verkkosivuja sekä -applikaatioita, backend-ohjelmistoja ja myöskin muutamia yksinkertaisia työpöytäohjelmia. Tämän lisäksi minulla on kokemusta freelance-tason DevOps-kehityksestä (Code review, Continuous Integration, jne.). Minulla on myöskin kiitettävästi sysadmin-kokemusta erinäisistä Linux-ympäristöistä.',
    p3: 'Ohessa lista kielistä sekä frameworkeista jotka tunnen parhaiten ja joiden parissa olen työskennellyt eniten, mutta olen aina valmis oppimaan uutta.',
    p4: {
      l1: 'Suurin osa projekteista jotka olen luonut tai joihin osallistunut löytyvät ',
      l2: 'GitHub-sivultani',
      l3: ' ja pidän kaikkia avoimen lähdekoodin ohjelmiani tällä alustalla.'
    }
  },
  projects: { // Projects
    title: 'PROJEKTEJA',
    p1: {
      l1: 'Tämä on näyte projekteista jotka olen luonut tai joihin olen osallistunut. Nähdäksesi täyden listan, vieraile ',
      l2: 'GitHub-sivullani'
    },
    cards: [
      { title: 'react-console-emulator', text: 'Monipuolinen ja kustomoitava Unix-terminaaliemulaattori Reactissa.', github: 'https://github.com/js-rcon/react-console-emulator' },
      { title: 'JagTag-JS', text: 'JavaScriptiin portattu implementaatio JagTag-merkkikielestä.', github: 'https://github.com/TheSharks/JagTag-JS', website: 'https://thesharks.github.io/JagTag-JS' },
      { title: 'JS-RCON', text: 'Kattava ja moderni serverinhallintapaneeli Team Fortress 2:lle.', github: 'https://github.com/js-rcon' },
      { title: 'tag-replacer', text: 'Node.js-moduuli placeholder-sanojen korvaamiseen tekstissä. Tukee myös TagScriptiä.', github: 'https://github.com/linuswillner/tag-replacer' }
    ]
  },
  contact: { // Contact
    title: 'OTA YHTEYTTÄ',
    p1: {
      l1: 'Jos haluat ottaa yhteyttä minuun kysyäksesi jotain, oli se muodollista tai ei, sähköposti on paras tapa siihen.',
      l2: 'Voit myös huudella suuntaani Twitterissä, linkki löytyy alta.'
    },
    p2: {
      l1: 'Epävirallisempaa keskustelua varten yksityisviestini ',
      l2: 'Discordissa',
      l3: ' ovat aina avoinna.'
    },
    p3: 'Lopuksi, jos haluat vain seurata mitä teen, olen jättänyt tähän muutaman linkin sosiaalisiin medioihini.',
    email: 'Sähköposti'
  },
  footer: {
    copyright: `Copyright (c) ${moment().format('YYYY')} Linus Willner. Kaikki oikeudet pidätetään. Kansikuva: Maik Jonietz/Unsplash`,
    tech: {
      l1: 'Toteutettu ',
      l2: 'Reactilla',
      l3: ' Sassilla ',
      l4: 'sekä ',
      l5: 'Bulmalla'
    },
    location: ' Rakennettu aidolla luonnonmukaisesti tuotetulla nörtillä.'
  }
}
