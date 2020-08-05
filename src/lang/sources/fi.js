import moment from 'moment'
import TarraTacLogo from '../../assets/images/logos/tarratac.png'
import FdfLogo from '../../assets/images/logos/fdf.png'
import TcdLogo from '../../assets/images/logos/tcd.png'
import WbLogo from '../../assets/images/logos/wb.png'

// Finnish
export default {
  // Hero
  hero: {
    typingTexts: [
      'Opiskelija',
      'Tekniikkaharrastaja',
      'Freelance-kehittäjä',
      'Tuleva TiVi-insinööri'
    ],
    typingTextLowWidth: 'Opiskelija, freelance-kehittäjä, tuleva TiVi-insinööri'
  },
  // About
  about: {
    title: 'TIETOJA',
    sectionTitle: 'Terve!',
    p1: `Minä olen Linus, ja olen ${moment().diff(moment('1999-06-18'), 'years')}-vuotias opiskelija sekä freelance-kehittäjä Suomesta. Mukava tavata!`,
    p2: 'Olen lähtöisin pienestä kaupungista nimeltä Loviisa itäiseltä Uudeltamaalta, ja olen innokas tekniikan sormeilija sekä ohjelmistotuotannon opiskelija. Web-applikaatioiden kehitys on vahvuuteni, jonka lisäksi kehitän myös backend-applikaatioita ja suoritan järjestelmäylläpitoa.',
    p3: 'Olen toiminut ohjelmistokehittäjänä vuodesta 2017 lähtien, suurimmaksi osaksi avoimen lähdekoodin saralla. Olen työskennellyt enimmäkseen ohjelmoijana sekä järjestelmäylläpitäjänä, jonka lisäksi olen toiminut dokumentaatio-, käännös- ja laadunvalvontatehtävissä.',
    p4: 'Olen monikielinen persoona joka hallitsee samantasoisesti kolmea kieltä - tarkemmin sanottuna suomea, ruotsia sekä englantia. Äidinkieleni ovat listan kaksi ensimmäistä kieltä.',
    p5: {
      l1: 'Minut tunnetaan arvatenkin parhaimmin projekteista kuten ',
      l2: ' sekä ',
      l3: ', mutta olen myös kehittänyt lukuisia ohjelmia omin neuvoin. Näistä löytyy kaikkea backend-applikaatioista verkkosivuihin ja työpöytäohjelmiin. Muutamia esimerkkejä töistäni ovat ',
      l4: ' ja '
    },
    p6: 'Opiskelen tällä hetkellä tieto- ja viestintätekniikkaa Metropolia Ammattikorkeakoulussa, josta valmistun oletettavasti vuoden 2023 lopulla. Edelliset työpaikkani ohjelmistokehittäjänä/-insinöörinä ja/tai järjestelmäylläpitäjänä sisältävät mm. Tarra-Tac Oy:n ja Suomen Puolustusvoimat.'
  },
  // Experience
  experience: {
    title: 'TYÖKOKEMUS',
    workCategoryTitle: 'Työpaikat',
    volunteerCategoryTitle: 'Vapaaehtoistyöt',
    employmentTypes: {
      fullTime: 'Vakituinen',
      partTime: 'Osa-aikainen',
      freelance: 'Freelance',
      volunteer: 'Vapaaehtoinen',
      conscript: 'Varusmies'
    },
    positions: {
      work: [
        {
          role: 'Full Stack Engineer',
          type: 'fullTime',
          date: 'Kesäkuu - Heinäkuu 2020',
          company: {
            name: 'Oy Tarra-Tac Ab',
            link: 'https://tarratac.fi',
            icon: TarraTacLogo
          },
          location: 'Loviisa, Uusimaa',
          description: 'Työskentelin Full Stack Engineerinä Tarra-Tacilla kesätyönäni vuonna 2020. Työtehtäviini kuului uuden hinnoitteluohjelman luonti työnantajan tarpeiden mukaan, jonka luomisen ansiosta yhtiön työprosessit tehostuivat merkittävästi.',
          tags: ['Frontend', 'Backend', 'Design', 'Full-stack', 'Sysadmin', 'Verkotustyöt', 'DevOps']
        },
        {
          role: 'Virtuaalikoulutustukihenkilö',
          type: 'conscript',
          date: 'Helmikuu - Syyskuu 2019',
          company: {
            name: 'Puolustusvoimat',
            link: 'https://puolustusvoimat.fi',
            icon: FdfLogo
          },
          location: 'Dragsvik, Raasepori',
          description: 'Varusmiespalvelukseni aikana Uudenmaan Prikaatissa palvelin virtuaalikoulutustukihenkilön tehtävissä. Työtehtäviini kuuluivat ohjelmistokehittäjän, järjestelmä- ja verkkoylläpitäjän sekä IT-teknikon tehtävät. Tämän lisäksi toimin taisteluteorian kouluttajana sekä simulaattoriohjaajana.',
          tags: ['Frontend', 'Backend', 'Sysadmin', 'DevOps', 'Laitteistot', 'Verkotustyöt', 'Tekniset asennustyöt']
        }
      ],
      volunteer: [
        {
          role: 'Vanhempi sisällönhallintahenkilö',
          type: 'volunteer',
          date: 'Maaliskuu 2020 - Nyt',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'The Coding Denissä tehtäväni ylläpitäjänä/vanhempana sisällönhallintahenkilönä on keskustelufoorumien moderoinnin lisäksi johtaa ja mentoroida nuorempia sisällönhallintahenkilöitä, sekä osallistua administratiivisten päätösten tekoon yhteisön tulevaisuutta koskien.',
          tags: ['Sisällönhallinta', 'Johtamistehtävät', 'Yhteisönhallinta']
        },
        {
          role: 'Sisällönhallintahenkilö',
          type: 'volunteer',
          date: 'Helmikuu 2018 - Maaliskuu 2020',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'The Coding Denissä tehtäväni sisällönhallintahenkilönä sisälsivät keskusteluiden moderointia ja yhteisön siisteyden varmistamista.',
          tags: ['Sisällönhallinta']
        },
        {
          role: 'Software Developer',
          type: 'volunteer',
          date: 'Elokuu 2016 - Nyt',
          company: {
            name: 'TheSharks',
            link: 'https://github.com/TheSharks',
            icon: WbLogo
          },
          location: 'International',
          description: 'Toimin TheSharksissa avoimen lähdekoodin kollaboraattorina ja kehitän ohjelmistoja kyseiselle ryhmälle. Tämän lisäksi kirjoitan teknistä dokumentaatiota, toimin järjestelmäylläpitäjän tehtävissä sekä ylläpidän käännöksiä niillä kielillä joissa osaamiseni on vahva.',
          tags: ['Frontend', 'Backend', 'Sysadmin', 'Dokumentaatio', 'Käännöstyöt']
        }
      ]
    }
  },
  // Skills
  skills: {
    title: 'TAITOJA',
    p1: 'Olen ohjelmistokehittäjä jolla on useamman vuoden kokemus monenlaisista ympäristöistä, niin suurista kuin pienistäkin tiimeistä.',
    p2: 'Olen kehittänyt useita verkkosivustoja sekä -applikaatioita, serveriohjelmistoja sekä työpöytäohjelmia. Tämän lisäksi minulla on kokemusta DevOps-tehtävistä (Testaus ja sen automaatio, code review, Continuous Integration and Deployment, jne.). Minulla on myöskin kiitettävästi sysadmin-kokemusta erinäisistä serveriympäristöistä, ja kokemusta löytyy sekä Windows- että Linux-serveriympäristöistä.',
    p3: 'Tästä osiosta löytyy liitettynä lista niistä ohjelmointikielistä, kirjastoista, frameworkeistä jne. jotka tunnen ja joiden kanssa osaan työskennellä.',
    p4: {
      l1: 'Suurin osa projekteista jotka olen luonut tai joihin olen osallistunut sisältävät jonkin asteisen yhdistelmän liitetyistä taidoistani. Nämä projektit ovat löydettävissä ',
      l2: 'GitHub-sivultani',
      l3: ', ja pidän myöskin kaikkien avoimen lähdekoodin ohjelmieni ohjelmistokoodia edellämainitulla alustalla.'
    },
    p5: 'Vinkki: Jos et tiedä, mitä jokin ikoni tarkoittaa, klikkaa sitä!'
  },
  // Projects
  projects: {
    title: 'PROJEKTEJA',
    p1: {
      l1: 'Tämä on ainoastaan lyhyt näyte projekteista jotka olen luonut tai joihin olen osallistunut. Nähdäksesi täyden listan, vieraile ',
      l2: 'GitHub-sivullani'
    },
    cards: [
      {
        title: 'react-console-emulator',
        text: 'Monipuolinen ja helposti kustomoitavissa oleva Unix-terminaaliemulaattori Reactille.',
        github: 'https://github.com/linuswillner/react-console-emulator',
        npm: 'https://npmjs.com/react-console-emulator',
        tags: ['React', 'JavaScript', 'Sass', 'NPM']
      },
      {
        title: 'dpkg-status-exporter',
        text: 'Ohjelma, joka vie tietoja järjestelmäpaketeista HTML-muotoon Debian-pohjaisilla käyttöjärjestelmillä.',
        github: 'https://github.com/linuswillner/dpkg-status-exporter',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'tag-replacer',
        text: 'Yksinkertainen ja kevyt Node.js-moduuli alkeellista tekstiohjelmointia varten.',
        github: 'https://github.com/linuswillner/tag-replacer',
        npm: 'https://npmjs.com/tag-replacer',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'check-ie',
        text: 'Kevyt ja moduuliriippumaton tapa tarkistaa josko käyttäjän selain on Internet Explorer.',
        github: 'https://github.com/linuswillner/check-ie',
        npm: 'https://npmjs.com/check-ie',
        tags: ['Node.js', 'TypeScript', 'NPM']
      },
      {
        title: 'Metropolia-Team-Sigma/client',
        text: 'Sigma-chatsovelluksen pääteohjelman prototyyppi. Osallistuin tähän projektiin osana opintojani Metropolia AMK:ssa.',
        github: 'https://github.com/Metropolia-Team-Sigma/client',
        tags: ['Node.js', 'JavaScript', 'Crypto']
      },
      {
        title: 'Metropolia-Team-Sigma/backend',
        text: 'Sigma-chatsovelluksen serverikomponentin prototyyppi. Osallistuin tähän projektiin osana opintojani Metropolia AMK:ssa.',
        github: 'https://github.com/Metropolia-Team-Sigma/backend',
        tags: ['Node.js', 'JavaScript', 'Express', 'ArangoDB', 'WebSocket']
      },
      {
        title: 'TheSharks/JagTag-JS',
        text: 'JavaScriptiin käännetty versio JagTag-merkkikielestä, joka on alunperin lähtöisin Javasta.',
        github: 'https://github.com/TheSharks/JagTag-JS',
        npm: 'https://www.npmjs.com/package/@thesharks/jagtag-js',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'TheSharks/WildBeast',
        text: 'Monitoiminnallinen Discord-botti ja siihen liittyvä ohjelmisto, jonka tarkoitus on olla helppo käyttää, jatkaa ja muunnella.',
        github: 'https://github.com/TheSharks/WildBeast',
        website: 'https://docs.thesharks.xyz',
        tags: ['Node.js', 'JavaScript']
      }
    ]
  },
  // Contact
  contact: {
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
  // Footer
  footer: {
    copyright: `Copyright (c) ${moment().format('YYYY')} Linus Willner. Kaikki oikeudet pidätetään.`,
    photos: {
      l1: 'Kansi-📸: ',
      l2: 'Profiili-📸: '
    },
    tech: {
      l1: 'Toteutettu ',
      l2: 'Reactilla',
      l3: ' Sassilla ',
      l4: 'ja ',
      l5: 'Bulmalla'
    },
    location: ', sekä lukuisilla kupeilla ☕:a.'
  }
}
