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
  }
};

export type Lang = typeof es;

export default es;