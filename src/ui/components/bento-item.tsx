import { twMerge } from 'tailwind-merge';

type BentoItemProps = {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
};

export default function BentoItem({
  title, description, subtitle, className = '',
}: BentoItemProps) {
  return (
    <article className={twMerge(`
    col-span-6 row-span-2 relative rounded-xl 
    shadow-md bg-white dark:bg-gray-400/10
    overflow-hidden shadow-gray-400/20
    hover:shadow-gray-400/40 transition-all
    hover:scale-105
    duration-300
    ${className}
    `)}
    >

      <div className="flex h-full flex-col justify-end gap-1 p-3">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-md font-semibold text-gray-200/50 ">
            {subtitle}
          </h4>
        )}
        {description && (
          <p className="text-pretty max-w-full text-ellipsis font-light">
            {description}
          </p>
        )}
      </div>

    </article>
  );
}
