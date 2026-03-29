import {type Lang} from './es'

export const en: Lang = {
  EXP_ITEM_GOTO: "Go to see",
  EXP_ITEM_RECENT: "Most recent",
  SOCIAL_DEFAULTS: {
    OG: {
      title: "Leonardo Lizcano's webpage",
      description: "Leonardo Lizcano's webpage, Colombia. Get more information by clicking here.",
      imageAlt: "Image of Leonardo Lizcano's webpage",
    },
    TWITTER: {
      title: "Leonardo Lizcano's webpage",
      description: "Leonardo Lizcano's webpage, Colombia. Get more information by clicking here.",
      imageAlt: "Image of Leonardo Lizcano's webpage",
    }
  },
  main: {
    SEO: {
      title: "Leonardo Lizcano | Software Engineer's Portfolio",
      description: "Leonardo Lizcano's portfolio, alias LeoLizc. Software Engineer from Universidad del Norte, Colombia since 2023",
      KEY_WORDS: "Leonardo Lizcano, Leonardo David Lizcano Pinto, Software Engineer, Web Developer, Backend, Artificial Intelligence, Colombia, Barranquilla, Universidad del Norte",
      OG: {
        title: "Leonardo Lizcano | Software Engineer's Portfolio",
        description: "Leonardo Lizcano's portfolio, Software Engineer from Universidad del Norte, Colombia. Get more information about his projects and experience in development.",
      },
      TWITTER: {
        title: "Leonardo Lizcano | Software Engineer's Portfolio",
        description: "Leonardo Lizcano's portfolio, Software Engineer from Universidad del Norte, Colombia. Get more information about his projects and experience in development.",
      },
    },
    PHOTO_ALT: "Leonardo Lizcano's photo",
    TITLE: "Hello! I'm Leonardo",
    AVAILABLE_TEXT: "Available for work",
    PRESENTATION: "I'm a software engineer. Researcher and web backend developer with knowledge in frontend, mobile and artificial intelligence.",
    EXPERIENCE_TITLE: "Experience",
    PROJECTS_TITLE: "Projects",
    ARTICLES_TITLE: "Published Articles",
    ARTICLES_READ: "Read article",
    ABOUT_TITLE: "About",
    CONTACT_TITLE: "Contact Me",
    EXPERIENCES: [
      {
        title: "Network/ML Researcher and Developer - FRIDA/LACNIC - DeepStack-IDS",
        date: "January 2025 - December 2025",
        description: `Research project funded by FRIDA to develop a tool for real-time detection and classification of DoS and DDoS attacks using a stacked-layer machine learning model (Stacked Model).
<br><br>
The project focuses on implementing an intrusion detection system (IDS) based on Deep Learning, with the goal of improving security in computer networks and systems. My role includes supporting the research and development of the model architecture, but I am mainly responsible for implementing and optimizing the system for use in real-world environments.`,
        link: "https://youtu.be/cUdTBmzmIno",
        latest: true,
      },
      {
        title: "Development Researcher - Tecnalia - Colombian Navy",
        date: "December 2024 - April 2025",
        description: `I worked as a co-researcher and augmented reality (AR) developer in the design and prototyping of technologies for the Colombian Integrated Platform Supervision and Control System (SISCP-C) of the Colombian National Navy, aiming to improve the operation of surface vessels through an open architecture that optimizes operational availability and reduces crew workload and maintenance costs.`
      },
      {
        title: "Backend Developer - Eyeland Epics IEEE",
        date: "August 2022 - September 2023",
        description: `Responsible for the **backend development** in a project part of the EPICS initiative in *IEEE*, which aims to support the **English learning** process for people with **visual disabilities** through a mobile application, in its goal of increasing inclusion.

I was in charge of *designing* and serving the system based on **Sockets** to orchestrate communication and synchronization between devices and profiles, as well as the Web Api`,
        link: "https://eyeland-project.github.io/webpage/",
        latest: true,
      },
      {
        title: "Web programming mentor - MisionTIC 2022",
        date: "September 2022 - October 2022",
        description: `**Web programming mentor** during the third cycle of the MisionTIC 2022 program, led by the *Ministry of ICT* of Colombia and the Universidad del Norte.

I supported and solved doubts for students about the development of web applications with **Flask, Html and Sq-Lite**`,
      },
    ],
    PROJECTS: {
      warframe: {
        title: "Warframe weapon comparator",
        url: "https://wcompare.leolizc.tech/",
        role: "Author",
        imageAlt: "Warframe weapon comparator web application",
        description: "Web application to compare weapons in the game Warframe, with data obtained from the Warframe API and a custom algorithm to calculate the best weapon for each situation."
      },
      eyeland: {
        title: "Epics - Eyeland",
        url: "https://eyeland-project.github.io/webpage/",
        role: "Backend Developer",
        imageAlt: "Eyeland's webpage",
        description: "Educational program for high school students to build mobile applications to promote the inclusion of people with visual disabilities."
      },
      parche: {
        title: "Parche Project",
        url: "https://github.com/LeoLizc/f_parche",
        role: "Co-Author",
        imageAlt: "Main screen of the application",
        description: "Application for group outings, optimizing coordination, punctuality and fun in cities."
      },
      rocket: {
        title: "Rocket Simulator",
        url: "https://github.com/LeoLizc/Processing-Physic-Rocket",
        role: "Author",
        imageAlt: "Rocket simulator in Java Processing with realistic physics.",
        description: "Rocket simulator in Java Processing with realistic physics. Models, ocean and 3D camera made from scratch in Processing."
      },
      simet: {
        title: "APELL - Simet",
        url: "https://simet.co/home/landing",
        role: "Volunteer - Backend",
        imageAlt: "APELL - Simet's webpage",
        description: "APELL - Simet is Website that reinforces mutual aid in industrial emergencies through a network of companies."
      },
      bungee: {
        title: "Bungee Jumping Simulator",
        url: "https://github.com/leovergaramarq/BungeeJumpingSimulator",
        role: "Co-Author",
        imageAlt: "Bungee Jumping Simulator",
        description: "Simulator of the risk sport Bungee Jumping based on the physics of the Free Damped Motion involved in this activity. Project created for academic purposes only."
      },
    },
    ARTICLES: [
      {
        title: "Article title (placeholder)",
        publisher: "Journal or publisher name",
        date: "Month 2026",
        description: "Short summary of the article to present its main focus and outcomes.",
        link: "https://example.com",
      },
    ],
    ABOUT_ME:`Hello! I'm Leonardo. My interest in programming sparked during high school when I developed an inventory system in **VBA**. I completed my undergraduate studies in **Systems Engineering** at *Universidad del Norte*, and currently I have finished the second semester of my master's degree in **Systems Engineering** at the same university.  
    On a professional level, I have participated in projects and research in both management and **machine learning**.

Throughout my education, I participated in events like *Expofísica* with a realistic physics simulator. I also excelled in **programming marathons** at the institution and had the opportunity to engage in university-supported initiatives.
    
On a personal level, I am fascinated by **automation** and **artificial intelligence**. I've worked on projects to *control* parts of my house with a **virtual assistant**. Additionally, I enjoy developing **mods** and exploring new hobbies like **wood carving**.
`,
    CONTACT: {
      SUBJECT_LABEL: 'Subject',
      SUBJECT_PLACEHOLDER: 'Enter your subject here',
      EMAIL_LABEL: 'Email',
      EMAIL_PLACEHOLDER: 'Enter your email',
      DETAILS_PLACEHOLDER: 'Enter your message',
      SEND: 'Send',
      NAME_LABEL: 'Name',
      NAME_PLACEHOLDER: 'Enter your name',
    },
  }
}

export default en;