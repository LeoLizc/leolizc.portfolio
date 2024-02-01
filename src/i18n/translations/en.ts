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
  }
}

export default en;