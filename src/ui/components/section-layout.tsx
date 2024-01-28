type SectionLayoutProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionLayout({
  icon, title, children, className = '', id = '',
}: SectionLayoutProps) {
  return (
    <section id={id} className={`w-full lg:w-[740px] py-16 px-4 pb-8 ${className}`}>
      {title && (
        <>
          {icon && <div>{icon}</div>}
          <h2 className="text-4xl font-semibold mb-2 text-gray-300/95">{title}</h2>
          <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </>
      )}
      {children}
    </section>
  );
}
