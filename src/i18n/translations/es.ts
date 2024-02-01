const es = {
  EXP_ITEM_GOTO: 'Ir a ver',
  EXP_ITEM_RECENT: 'Más reciente',
  main: {
    SEO: {
      title: 'Portfolio LeoLizc | Ingeniero de Sistemas',
      description: 'Portafolio de Leonardo Lizcano, Ingeniero de Sistemas de la Universidad Nacional de Colombia',
    },
    PHOTO_ALT: 'Foto de Leonardo Lizcano',
    TITLE: '¡Hola! Soy Leonardo',
    AVAILABLE_TEXT: 'Disponible para trabajar',
    PRESENTATION: 'Ingeniero de sistemas titulado. Desarrollador web backend con conocimientos en frontend. Y aficionado a la inteligencia artificial.',
    EXPERIENCE_TITLE: 'Experiencia',
    PROJECTS_TITLE: 'Proyectos',
    ABOUT_TITLE: 'Sobre mí',
    CONTACT_TITLE: 'Contacto',
    EXPERIENCES: [
      {
        title: 'Desarrollador Backend - Eyeland Epics IEEE',
        date: 'Agosto 2022 - Septiembre 2023',
        description: `Responsable del **desarrollo backend** en Proyecto parte de la iniciativa EPICS en *IEEE*, que se propone apoyar el proceso de **aprendizaje del inglés** para personas con **discapacidad visual** a través de una aplicación móvil, en su objetivo de aumentar la inclusión.
    
Me encargué de *diseñar* y servir el sistema basado en **Sockets** para orquestar la comunicación y sincronización entre dispositivos y perfiles, así como la Web Api`,
        link: 'https://eyeland-project.github.io/webpage/',
        latest: true,
      },
      {
        title: 'Mentor en programación web - MisionTIC 2022',
        date: 'Septiembre 2022 - Octubre 2022',
        description: `**Mentor en programación web** durante el tercer ciclo del programa MisionTIC 2022, liderado por el *Ministerio de las TIC* de Colombia y la Universidad del Norte.
    
Apoyé y resolví dudas a los estidantes acerca de el desarrollo de aplicaciones web con **Flask, Html y Sq-Lite**`,
      },
    ],
    PROJECTS:{
      "eyeland": {
        "title": "Epics - Eyeland",
        "url": "https://eyeland-project.github.io/webpage/",
        "role": "Desarrollador - Backend",
        "imageSrc": "/imgs/Eyeland_shots_so.webp",
        "imageAlt": "Página web de Eyeland",
        "description": "Programa educativo para estudiantes de secundaria para la construcción de aplicaciones móviles para promover la inclusión de personas con discapacidad visual."
      },
      "parche": {
        "title": "Proyecto Parche",
        "url": "https://github.com/LeoLizc/f_parche",
        "role": "Co-Autor",
        "imageSrc": "/imgs/Parche_shots_so.webp",
        "imageAlt": "Captura de la pantalla principal de la aplicación",
        "description": "Aplicación para salidas grupales, optimizando coordinación, puntualidad y diversión en ciudades."
      },
      "rocket": {
        "title": "Simulador de Cohete",
        "url": "https://github.com/LeoLizc/Processing-Physic-Rocket",
        "role": "Autor",
        "imageSrc": "Needs image",
        "imageAlt": "Simulador de cohete en Java Processing con físicas realistas.",
        "description": "Simulador de cohete en Java Processing con físicas realistas. Modelos, océano y cámara 3D hechos desde cero en Processing."
      },
      "simet": {
        "title": "APELL - Simet",
        "url": "https://simet.co/home/landing",
        "role": "Voluntario - Backend",
        "imageSrc": "/imgs/Simet_shots_so.webp",
        "imageAlt": "Página web de APELL - Simet",
        "description": "Página web que refuerza la ayuda mutua en emergencias industriales a través de una red de empresas."
      },
      "bungee": {
        "title": "Simulador de Bungee Jumping",
        "url": "https://github.com/leovergaramarq/BungeeJumpingSimulator",
        "role": "Co-Autor",
        "imageSrc": "/imgs/Bungee_shots_so.webp",
        "imageAlt": "Captura de pantalla de visualización de gráficas del simulador",
        "description": "Simulador del deporte de riesgo Bungee Jumping basado en la física del Movimiento Libre Amortiguado involucrado en esta actividad. Proyecto creado únicamente con fines académicos."
      }
    },
    ABOUT_ME: `Mi interés por la programación surgió en la secundaria, cuando desarrollé un sistema de inventario en **VBA** y, recientemente, he completado mis estudios de pregrado en **Ingeniería de Sistemas** en la *Universidad del Norte*.

Durante mi formación, participé en eventos como *Expofísica*, con un simulador de físicas realistas. También destacé en **maratones de programación** en la institución, y tuve la oportunidad de participar en iniciativas apoyadas por la universidad.
    
A nivel personal, me fascinan la **automatización** y la **inteligencia artificial**. He desarrollado proyectos para *controlar* partes de mi casa con un **asistente virtual**. Además, disfruto desarrollando **mods** y explorando nuevos hobbies como **tallar madera**.`,
    CONTACT: {
      SUBJECT_LABEL: 'Asunto',
      SUBJECT_PLACEHOLDER: 'Escribe aquí el asunto',
      EMAIL_LABEL: 'Correo',
      EMAIL_PLACEHOLDER: 'Escribe aquí tu correo',
      DETAILS_PLACEHOLDER: 'Escribe los detalles...',
      SEND: 'Enviar',
    },    
  },
};

export type Lang = typeof es;

export default es;