import moment from 'moment'
import ReaktorLogo from '../../assets/images/logos/reaktor.png'
import TarraTacLogo from '../../assets/images/logos/tarratac.png'
import FdfLogo from '../../assets/images/logos/fdf.png'
import DiscordLogo from '../../assets/images/logos/discord.png'
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
    p1: `Olen Linus, ${moment().diff(moment('1999-06-18'), 'years')}-vuotias ohjelmistokehittäjä, innokas tekniikan sormeilija ja ohjelmistotuotannon opiskelija. Erityisalueeni ovat fullstack-kehitys sekä DevOps-toiminta, ja työskentelen myös mieluusti tietoverkkojen sekä järjestelmäylläpidon parissa. Tämän lisäksi olen toiminut dokumentaatio-, käännös- ja laadunvalvontatehtävissä. Minulla on kokonaisvaltaisesti yli viiden vuoden kokemus alalta.`,
    p2: 'Urani toinen sivuhaara on ollut yhteisöjen moderaatio ja ylläpito. Pääasiallinen tehtäväni on pyörittää Discordissa toimivaa ohjelmointiyhteisöä nimeltä The Coding Den. Tämän lisäksi toimin myös moderaattorina Discordille Discord Moderator Programin kautta, missä autan heitä pyörittämään heidän omiva virallisia yhteisöjään, kuin myös heidän brand partner-yhteisöjään.',
    p3: 'Olen monikielinen persoona joka hallitsee samantasoisesti kolmea kieltä - tarkemmin sanottuna suomea, ruotsia sekä englantia. Äidinkieleni ovat listan kaksi ensimmäistä kieltä.',
    p4: {
      l1: 'Suurimmat saavutukseni sisältävät projektien kuten ',
      l2: ' ja ',
      l3: ' ylläpidon ja kehityksen, mutta olen myös kehittänyt lukuisia ohjelmia omin neuvoin. Näistä löytyy kaikkea backend-applikaatioista verkkosivuihin ja työpöytäohjelmiin. Muutamia esimerkkejä töistäni ovat ',
      l4: ' ja '
    },
    p5: 'Opiskelen tällä hetkellä tieto- ja viestintätekniikkaa Metropolia Ammattikorkeakoulussa. Pääaineohjelmanani on Ohjelmistotuotanto, josta valmistun oletettavasti vuoden 2023 lopulla.',
    p6: 'Tulen jälleen kerran palaamaan Reaktorille Software Developeriksi toukokuussa 2022, työskenneltyäni samassa roolissa kesän 2021 aikana. Tätä edeltävät työpaikkani ohjelmistokehittäjänä ja/tai järjestelmäylläpitäjänä sisältävät mm. Tarra-Tac Oy:n ja Suomen Puolustusvoimat.',
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
          role: 'Software Developer',
          type: 'fullTime',
          date: 'Toukokuu - Elokuu 2021, Toukukuu 2022 =>',
          company: {
            name: 'Reaktor',
            link: 'https://reaktor.com',
            icon: ReaktorLogo
          },
          location: 'Helsinki',
          description: 'Työskentelyä ohjelmistokehittäjän roolissa, luoden asiakkaan tarpeisiin mukautettuja ohjelmia. Projektisijoitukseni ovat sisältäneet turvallisuuden kannalta tärkeitä ympäristöjä.',
          tags: ['Full-stack']
        },
        {
          role: 'Full Stack Engineer',
          type: 'fullTime',
          date: 'Kesäkuu - Heinäkuu 2020',
          company: {
            name: 'Oy Tarra-Tac Ab',
            link: 'https://tarratac.fi',
            icon: TarraTacLogo
          },
          location: 'Loviisa',
          description: 'Työskentelin Full Stack Engineerinä Tarra-Tacilla kesätyönäni vuonna 2020. Työtehtäviini kuului uuden hinnoitteluohjelman luonti työnantajan tarpeiden mukaan, jonka luomisen ansiosta yhtiön työprosessit tehostuivat merkittävästi.',
          tags: ['Full-stack', 'Design', 'Sysadmin', 'Verkotustyöt', 'DevOps']
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
          tags: ['Full-stack', 'Sysadmin', 'DevOps', 'Laitteistot', 'Verkotustyöt', 'Tekniset asennustyöt']
        }
      ],
      volunteer: [
        {
          role: 'DMP-moderaattori',
          type: 'volunteer',
          date: 'Joulukuu 2020 - Tänään',
          company: {
            name: 'Discord',
            link: 'https://discord.com',
            icon: DiscordLogo
          },
          location: 'Kansainvälinen',
          description: 'Tehtävässäni moderaattorina Discord Moderator Programin (DMP) jäsenenä toimin ylläpitäjänä sekä moderaattorina erinäisille virallisille yhteisöille. Olen auttanut moderoimaan yhteisöjä - sekä pysyviä että väliaikaisia (pop-up) - joiden jäsenmäärät ovat enimmillään olleet sadoissa tuhansissa. Moderoimani yhteisöt sisältävät mm. Discord Townhallin, Games Labin sekä Snowsgiving-tapahtuman.',
          tags: ['Moderointi']
        },
        {
          role: 'Osaomistaja',
          type: 'volunteer',
          date: 'Lokakuu 2020 - Nyt',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'Toimiessani The Coding Denin toisena omistajana tehtäväni on johtaa moderaattoriryhmää ja toimia yhteisön korkeimman päätösvallan asemassa.',
          tags: ['Johtamistehtävät', 'Yhteisönhallinta']
        },
        {
          role: 'Moderaattori (Nuorempi, vanhempi)',
          type: 'volunteer',
          date: 'Nuor. helmi 2018 - maalis 2020, vanh. maalis - loka 2020',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'The Coding Denissä tehtäväni moderaattorina (Sekä nuoremman että myöhemmin vanhemman asemassa) moderaattoreiden mentorointi ja johto, sekä osallistuminen administratiivisten päätösten tekoon yhteisön tulevaisuutta koskien.',
          tags: ['Moderointi', 'Johtamistehtävät', 'Yhteisönhallinta']
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
          location: 'Kansainvälinen',
          description: 'Toimin TheSharksissa avoimen lähdekoodin kollaboraattorina ja kehitän ohjelmistoja kyseiselle ryhmälle. Tämän lisäksi kirjoitan teknistä dokumentaatiota, toimin järjestelmäylläpitäjän tehtävissä sekä ylläpidän käännöksiä niillä kielillä joissa osaamiseni on vahva.',
          tags: ['Full-stack', 'Sysadmin', 'Dokumentaatio', 'Käännöstyöt']
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
        text: 'Monipuolinen Unix-terminaaliemulaattori Reactille, tällä hetkellä Facebookin, Microsoftin sekä Amazonin avoimen lähdekoodin projekteissa.',
        github: 'https://github.com/linuswillner/react-console-emulator',
        npm: 'https://npmjs.com/react-console-emulator',
        tags: ['React', 'JavaScript', 'NPM']
      },
      {
        title: 'dpkg-status-exporter',
        text: 'Ohjelma, joka vie tietoja järjestelmäpaketeista HTML-muotoon Debian-pohjaisilla käyttöjärjestelmillä. (Ratkaisuni Reaktorin junioritehtävään 2020)',
        github: 'https://github.com/linuswillner/dpkg-status-exporter',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'reaktor-assignment-2021',
        text: 'Ratkaisuni Reaktorin junioritehtävän 2021 (huonosti suunniteltujen API:jen kanssa). Rakennettu Sveltellä, Expressillä ja Socket.IO:lla.',
        github: 'https://github.com/linuswillner/reaktor-assignment-2021',
        website: 'https://sheltered-reef-26200.herokuapp.com',
        tags: ['Node.js', 'Svelte', 'JavaScript', 'Web']
      },
      {
        title: 'TheCodingDen/projects-bot',
        text: 'Discord-botti projektiesittelyilmoituksien prosessointiin The Coding Denissä, joka on itseni ja muiden ylläpitämä ohjelmointiyhteisö.',
        github: 'https://github.com/TheCodingDen/projects-bot',
        tags: ['Node.js', 'TypeScript']
      },
      {
        title: 'TheCodingDen/infra',
        text: 'The Coding Denin IaC-konfiguraatiot, implementoitu Terraformilla, Kuberneteksellä ja DigitalOceanin IaaS-ratkaisuilla.',
        github: 'https://github.com/TheCodingDen/infra',
        tags: ['IaC', 'Terraform', 'Kubernetes']
      },
      {
        title: 'watr-app/app',
        text: 'Android-sovellus nesteytyksen seurantaan, rakennettu Metropolia AMK:n Mobiilit Terveyssovellukset-kurssilla.',
        github: 'https://github.com/watr-app/app',
        website: 'https://watr-app.github.io/app',
        tags: ['Java', 'Android']
      },
      {
        title: 'TheSharks/JagTag-JS',
        text: 'JavaScriptiin (myöhemmin TypeScriptiin) käännetty versio JagTag-merkkikielestä, joka on alunperin lähtöisin Javasta.',
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
    p2: 'Huom: Estääkseni roskapostitulvan sähköpostilaatikkooni, allaolevassa sähköpostiosoitteessa on erinäisiä estoja sähköpostiraapijoiden harhauttamiseksi. Tästä syystä sitä ei ole mahdollista kopioida käsin. Ole hyvä ja klikkaa osoitetta kopioidaksesi se leikepöydällesi.',
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
