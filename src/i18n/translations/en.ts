import {type Lang} from './es'

export const en: Lang = {
  EXP_ITEM_GOTO: "Go to see",
  EXP_ITEM_RECENT: "Most recent",
  main: {
    SEO: {
      title: "Portfolio LeoLizc | Software Engineer",
      description: "Leonardo Lizcano's portfolio, Software Engineer from the National University of Colombia",
    },
    PHOTO_ALT: "Leonardo Lizcano's photo",
    TITLE: "Hello! I'm Leonardo",
    AVAILABLE_TEXT: "Available for work",
    PRESENTATION: "I'm a software engineer. I have experience in backend web development and I'm also interested in frontend. I'm also interested in artificial intelligence.",
    EXPERIENCE_TITLE: "Experience",
    PROJECTS_TITLE: "Projects",
    ABOUT_TITLE: "About",
    CONTACT_TITLE: "Contact Me",
    EXPERIENCES: [
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
      eyeland: {
        title: "Epics - Eyeland",
        url: "https://eyeland-project.github.io/webpage/",
        role: "Backend Developer",
        imageSrc: "/imgs/Eyeland_shots_so.webp",
        imageAlt: "Eyeland's webpage",
        description: "Educational program for high school students to build mobile applications to promote the inclusion of people with visual disabilities."
      },
      parche: {
        title: "Parche Project",
        url: "https://github.com/LeoLizc/f_parche",
        role: "Co-Author",
        imageSrc: "/imgs/Parche_shots_so.webp",
        imageAlt: "Main screen of the application",
        description: "Application for group outings, optimizing coordination, punctuality and fun in cities."
      },
      rocket: {
        title: "Rocket Simulator",
        url: "https://github.com/LeoLizc/Processing-Physic-Rocket",
        role: "Author",
        imageSrc: "Need image",
        imageAlt: "Rocket simulator in Java Processing with realistic physics.",
        description: "Rocket simulator in Java Processing with realistic physics. Models, ocean and 3D camera made from scratch in Processing."
      },
      simet: {
        title: "APELL - Simet",
        url: "https://simet.co/home/landing",
        role: "Volunteer - Backend",
        imageSrc: "/imgs/Simet_shots_so.webp",
        imageAlt: "APELL - Simet's webpage",
        description: "APELL - Simet is Website that reinforces mutual aid in industrial emergencies through a network of companies."
      },
      bungee: {
        title: "Bungee Jumping Simulator",
        url: "https://github.com/leovergaramarq/BungeeJumpingSimulator",
        role: "Co-Author",
        imageSrc: "/imgs/Bungee_shots_so.webp",
        imageAlt: "Bungee Jumping Simulator",
        description: "Simulator of the risk sport Bungee Jumping based on the physics of the Free Damped Motion involved in this activity. Project created for academic purposes only."
      },
    }
  }
}

export default en;