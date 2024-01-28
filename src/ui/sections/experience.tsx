import ExperienceItem from '@components/experiece-item';

const experiences = [
  {
    title: 'Desarrollador Backend - Eyeland Epics IEEE',
    date: 'Agosto 2022 - Septiembre 2023',
    description: 'Responsable del **desarrollo backend** en Proyecto parte de la iniciativa EPICS en *IEEE*, que se propone apoyar el proceso de **aprendizaje del inglés** para personas con **discapacidad visual** a través de una aplicación móvil, en su objetivo de aumentar la inclusión.', // TODO: Corregir descripción
    link: 'https://eyeland-project.github.io/webpage/',
    latest: true,
  },
  {
    title: 'Mentor en programación web - MisionTIC 2022',
    date: 'Septiembre 2022 - Octubre 2022',
    description: '**Mentor en programación web** durante el tercer ciclo del programa MisionTIC 2022, liderado por el *Ministerio de las TIC* de Colombia y la Universidad del Norte.', // TODO: Corregir descripción
  },
];

export default function Experience() {
  return (
    <ol className="relative ml-4 border-s border-gray-200 dark:border-gray-700">
      {experiences.map((experience) => (
        <li key={experience.title} className="mb-10 ms-6">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
}
