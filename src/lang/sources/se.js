import moment from 'moment'
import ReaktorLogo from '../../assets/images/logos/reaktor.png'
import TarraTacLogo from '../../assets/images/logos/tarratac.png'
import FdfLogo from '../../assets/images/logos/fdf.png'
import DiscordLogo from '../../assets/images/logos/discord.png'
import TcdLogo from '../../assets/images/logos/tcd.png'
import WbLogo from '../../assets/images/logos/wb.png'

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
    p1: `Jag är Linus, en ${moment().diff(moment('1999-06-18'), 'years')}-årig programmerare, ivrig teknikmekare samt programmeringsstuderande. Min bravur är fullstack-utveckling samt DevOps, och därtill gillar jag att jobba med nätverk och systemadminisration. I övrigt har mina arbetsuppgifter innefattat dokumentation, översättning och kvalitetskontroll. Jag har totalt över fem års erfarenhet i fältet.`,
    p2: 'Mitt andra karriärspår har varit samfundsmoderation och -administration. Primärt driver jag ett programmeringssamfund på Discord vid namnet The Coding Den. I tillägg till detta fungerar jag som moderator för Discord via Discord Moderator Program, där jag hjälper dem driva både sina egna officiella samfund och därtill samfund för deras brandpartners.',
    p3: 'Jag är en flerspråkig person med likjämn kunskapsnivå i tre språk - närmare sagt finska, svenska och engelska. Mina modersmål är de två förstnämnda.',
    p4: {
      l1: 'Jag är mest känd för mitt upprätthåll av och arbete inom projekt som ',
      l2: ' och ',
      l3: ', men jag har även gjort ett antal program på eget bevåg. Dessa innefattar allt från backend-applikationer till nätsidor och fullt funktionerande skrivbordsprogram. Exempel på program jag byggt innefattar ',
      l4: ' och '
    },
    p5: 'För tillfället studerar jag informations- och kommunikationsteknologi vid Metropolia Ammattikorkeakoulu. Mitt huvudämne är programvaruutveckling, varifrån jag förväntar mig att bli utexaminerad vid årsslutet 2023.',
    p6: 'I maj 2022 kommer jag att återgå till Reaktor som Software Developer, efter att ha innehavit samma position med dem under sommaren 2021. I det förflutna har jag jobbat som programvaruutvecklare och/eller systemadministrator för bl.a. Tarra-Tac Ab och Försvarsmakten.'
  },
  // Experience
  experience: {
    title: 'ARBETSERFARENHET',
    workCategoryTitle: 'Arbetsplatser',
    volunteerCategoryTitle: 'Frivilligarbeten',
    employmentTypes: {
      fullTime: 'Heltid',
      partTime: 'Deltid',
      freelance: 'Freelance',
      volunteer: 'Frivilligarbete',
      conscript: 'Beväring'
    },
    positions: {
      work: [
        {
          role: 'Software Developer',
          type: 'fullTime',
          date: 'Maj - Augusti 2021, Maj 2022 =>',
          company: {
            name: 'Reaktor',
            link: 'https://reaktor.com',
            icon: ReaktorLogo
          },
          location: 'Helsinki',
          description: 'Jobb i programutvecklarroll för att skapa program enligt klienters behov. Förflutna projektplaceringar har inkluderat säkerhetskritiska omgivningar.',
          tags: ['Programutveckling']
        },
        {
          role: 'Full Stack Engineer',
          type: 'fullTime',
          date: 'Juni - Juli 2020',
          company: {
            name: 'Oy Tarra-Tac Ab',
            link: 'https://tarratac.fi',
            icon: TarraTacLogo
          },
          location: 'Lovisa, Nyland',
          description: 'Som mitt sommarjobb för år 2020 jobbade jag som Full Stack Engineer för Tarra-Tac. Till mina arbetsuppgifter tillhörde utvecklingen av ett nytt prissättningsprogram på basen av arbetsgivarens specifikationer. I slutändan effektiverades arbetsprocesserna i bolaget märkbart tack vare programmets ibruktagning.',
          tags: ['Full-stack', 'Design', 'Sysadmin', 'Nätverk', 'DevOps']
        },
        {
          role: 'Virtualutbildningsassistent',
          type: 'conscript',
          date: 'Februari - September 2019',
          company: {
            name: 'Försvarsmakten',
            link: 'https://puolustusvoimat.fi',
            icon: FdfLogo
          },
          location: 'Dragsvik, Raseborg',
          description: 'Under min militärtjänstgöring vid Nylands Brigad tjänstgjorde jag som virtualutbildningsassistent. Mina arbetsuppgifter inkluderade det av en programutvecklare, system- och nätverksadministrator samt IT-tekniker. I tillägg till detta fungerade jag som stridstaktikstränare samt simulatorinstruktör.',
          tags: ['Full-stack', 'Sysadmin', 'DevOps', 'Hårdvara', 'Nätverk', 'Tekniska monteringsarbeten']
        }
      ],
      volunteer: [
        {
          role: 'DMP-moderator',
          type: 'volunteer',
          date: 'December 2020 - Idag',
          company: {
            name: 'Discord',
            link: 'https://discord.com',
            icon: DiscordLogo
          },
          location: 'Internationell',
          description: 'Som en moderator inom Discord Moderator Program (DMP) fungerar jag som innehållsmoderator i tjänst av Discord för diverse officiella samfund. Jag har hjälpt i modereringen av samfund - både permanenta och temporära (pop-up) - vars medlemskap har som mest mäts i hundratusentals medlemmar. Listan av samfund jag modererat inkluderar bl.a. Discord Townhall, Games Lab och Snowsgiving-evenemanget.',
          tags: ['Innehållsmoderation']
        },
        {
          role: 'Delägare',
          type: 'volunteer',
          date: 'Oktober 2020 - Idag',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'Som andra delägare i The Coding Den innefattar mina uppgifter ledarskap av moderatorteamet samt funktion som högsta beslutsfattande organ i samfundet.',
          tags: ['Innehållsmoderation', 'Ledarskap', 'Samfundsadministration']
        },
        {
          role: 'Moderator (Yngre, äldre)',
          type: 'volunteer',
          date: 'Yngre februari 2018 - mars 2020, äldre mars - oktober 2020',
          company: {
            name: 'The Coding Den',
            link: 'https://discord.gg/code',
            icon: TcdLogo
          },
          location: 'discord.gg/code',
          description: 'Som moderator (Först yngre, senare äldre) för The Coding Den innehölll mina uppgifter, vid sidan av moderering av diskussionsfora, ledar- och mentorskap för yngre innehållsmoderatorer samt deltagande i fattandet av administrativa beslut kring framtiden av samfundet.',
          tags: ['Innehållsmoderation', 'Ledarskap', 'Samfundsadministration']
        },
        {
          role: 'Software Developer',
          type: 'volunteer',
          date: 'Augusti 2016 - Idag',
          company: {
            name: 'TheSharks',
            link: 'https://github.com/TheSharks',
            icon: WbLogo
          },
          location: 'Internationellt',
          description: 'Jag är en öppen källkodskollaborator för TheSharks och utvecklar dataprogram för gruppen. I tillägg till detta ansvarar jag för teknisk dokumentation, systemadministration, lokalisering och fjärrstyrd infrastruktur.',
          tags: ['Frontend', 'Backend', 'Sysadmin', 'Dokumentation', 'Lokalisering']
        }
      ]
    }
  },
  // Skills
  skills: {
    title: 'KUNSKAPER',
    p1: 'Jag är en programutvecklare med flera års erfarenhet i ett brett spektrum av omgivningar, i team stora som små.',
    p2: 'Jag har utvecklat ett flertal nätsidor och web-applikationer samt server- och skrivbordsprogram. Jag har även erfarenhet av DevOps-uppgifter (Testning inklusive dess automatisering, code review, Continuous Integration and Deployment, osv.). Därtill har jag gott kunnande inom sysadmin från diverse serveromgivningar, inom både Windows- och Linux-omgivningar.',
    p3: 'I denna sektion finns bifogad en lista på alla programmeringsspråk, system, frameworks osv. jag känner till och kan jobba med.',
    p4: {
      l1: 'De flesta av projekten jag har gjort eller deltagit i innefattar någon kombination av de här bifogade kunskaperna. Dessa projekt kan hittas på min ',
      l2: 'GitHub-sida',
      l3: ', och jag har även alla mina projekt med öppen källkod på den plattformen.'
    },
    p5: 'Tips: Ifall du inte känner till någon viss ikon, klicka på den!'
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
        text: 'En kraftfull och flexibel Unix-terminalemulatorkomponent för React, för tillfället i bruk av open source-program från Facebook, Microsoft och Amazon.',
        github: 'https://github.com/linuswillner/react-console-emulator',
        npm: 'https://npmjs.com/react-console-emulator',
        tags: ['React', 'JavaScript', 'NPM']
      },
      {
        title: 'dpkg-status-exporter',
        text: 'Ett program för export av data om operativsystempaket på Debian-baserade operativsystem. (Lösning till Reaktors junior developer-uppgift 2020)',
        github: 'https://github.com/linuswillner/dpkg-status-exporter',
        tags: ['Node.js', 'JavaScript', 'NPM']
      },
      {
        title: 'reaktor-assignment-2021',
        text: 'Min lösning till Reaktors junior developer-uppgift 2021, centrerat kring arbete med ohållbart designade APIs. Uppbackat av Svelte, Express och Socket.IO.',
        github: 'https://github.com/linuswillner/reaktor-assignment-2021',
        website: 'https://sheltered-reef-26200.herokuapp.com',
        tags: ['Node.js', 'Svelte', 'JavaScript', 'Web']
      },
      {
        title: 'TheCodingDen/projects-bot',
        text: 'En Discord-bot för processering av projektuppvisningsinlämningar i The Coding Den, ett internetsamfund drivet av mig själv och övriga.',
        github: 'https://github.com/TheCodingDen/projects-bot',
        tags: ['Node.js', 'TypeScript']
      },
      {
        title: 'TheCodingDen/infra',
        text: 'IaC-konfigurationer för The Coding Den, implementerat med Terraform och Kubernetes samt uppbackat av DigitalOcean.',
        github: 'https://github.com/TheCodingDen/infra',
        tags: ['IaC', 'Terraform', 'Kubernetes']
      },
      {
        title: 'watr-app/app',
        text: 'Android-applikation för uppföljning av vätskeintag, byggt vid Metropolia AMK:s kurs i mobila hälsoapplikationer.',
        github: 'https://github.com/watr-app/app',
        website: 'https://watr-app.github.io/app',
        tags: ['Java', 'Android']
      },
      {
        title: 'TheSharks/JagTag-JS',
        text: 'En JavaScript-översättning (senare TypeScript) av JagTag-textskriptningsspråket, vilket har sitt ursprung i Java.',
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
    p2: 'Märk: För att förhindra en flod av skräppost i min e-postlåda har nedanstående e-postaddress fifflats med på diverse sätt för att förbrylla e-postskrapare. Som en konsekvens kan den inte kopieras för hand. Var vänlig och klicka på den i stället för att kopiera den till klippbordet.',
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
