import Indicator from './indicator';

type ExpItemProps = {
  title: string;
  date: string;
  description: string;
  link?: string;
  latest?: boolean;
};

export default function ExperienceItem({
  title,
  date,
  description,
  link,
  latest = false,
}: ExpItemProps) {
  return (
    <>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 dark:bg-blue-900">
        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-blue-300">
        {title}
        {latest && (
          <Indicator className="ms-3" isStatic>
            Más reciente
          </Indicator>
        )}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-white">
        {description}
      </p>
      {link && (
        <a href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          Go to see
        </a>
      )}
    </>
  );
}
