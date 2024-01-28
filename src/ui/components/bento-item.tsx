import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type BentoItemProps = {
  className?: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  subtitle?: string;
  description?: string;
};

export default function BentoItem({
  title,
  imageSrc,
  imageAlt = '',
  description,
  subtitle,
  className = '',
}: BentoItemProps) {
  return (
    <article className={twMerge(`
    col-span-6 row-span-2 relative rounded-xl overflow-hidden 
    bg-white dark:bg-gray-400/10
    border border-gray-400/20
    shadow-md shadow-gray-400/20
    hover:shadow-gray-400/40 hover:scale-105
    hover:border-gray-400/30 hover:bg-gray-400/20
    transition-all duration-300
    z-10 group
    ${className}
    `)}
    >

      <div
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full
                  -z-10
                  bg-gradient-to-t from-black/85 via-black/55 via-45%
                  to-transparent/0 to-70%
                  group-hover:shadow-inner group-hover:shadow-white/20
                  backdrop-filter backdrop-blur-[2px]
                  group-hover:backdrop-blur-0 group-hover:backdrop-brightness-110
                  transition-all duration-300
                  "
      />

      {
        imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 bottom-0 w-full
                        h-full -z-20 object-left opacity-90
                        "
          />
        )
      }
      <div className="flex h-full flex-col justify-end gap-1 p-3 z-20">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-md font-semibold text-gray-300/60 ">
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
