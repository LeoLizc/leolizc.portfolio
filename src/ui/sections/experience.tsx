import ExperienceItem from '@components/experiece-item';

const experiences = [
  {
    title: 'Flowbite Application UI v2.0.0',
    date: 'Released on January 13th, 2022',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    link: '/#',
    latest: true,
  },
  {
    title: 'Flowbite Figma v1.3.0',
    date: 'Released on December 7th, 2021',
    description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    title: 'Flowbite Library v1.2.2',
    date: 'Released on December 2nd, 2021',
    description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
];

export default function Experience() {
  return (
    <ol className="relative ml-4 border-s border-gray-200 dark:border-gray-700">
      {experiences.map((experience) => (
        <li className="mb-10 ms-6">
          <ExperienceItem key={experience.title} {...experience} />
        </li>
      ))}
    </ol>
  );
}
