import ExperienceItem from '@components/experiece-item';

const experiences = [
  {
    title: 'Desarrollador Backend - Proyecto Epics IEEE',
    date: 'Agosto 2022 - Septiembre 2023',
    description: 'Responsable del desarrollo del backend de la aplicación web para la gestión de proyectos de la rama estudiantil IEEE UN.', // TODO: Corregir descripción
    link: '/#',
    latest: true,
  },
  {
    title: 'Mentor en programación web - MisionTIC 2022',
    date: 'Septiembre 2022 - Octubre 2022',
    description: 'Mentor en programación web durante el tercer ciclo del programa MisionTIC 2022, liderado por el Ministerio de las TIC de Colombia y la Universidad del Norte.', // TODO: Corregir descripción
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
