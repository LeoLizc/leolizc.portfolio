import {type Lang} from './es'

export const en: Lang = {
  EXP_ITEM_GOTO: "Go to see",
  EXP_ITEM_RECENT: "Most recent",
  main: {
    SEO: {
      title: "Leonardo Lizcano | Software Engineer's Portfolio",
      description: "Leonardo Lizcano's portfolio, Software Engineer from Universidad del Norte, Colombia since 2023",
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
    },
    ABOUT_ME:`Hello! I'm Leonardo. My interest in programming sparked during high school when I developed an inventory system in **VBA**, and recently, I completed my undergraduate studies in **Systems Engineering** at *Universidad del Norte*.

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
    },
  }
}

export default en;