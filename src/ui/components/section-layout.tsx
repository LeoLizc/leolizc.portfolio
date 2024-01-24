type SectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionLayout({ children, className = '', id = '' }: SectionLayoutProps) {
  return (
    <section id={id} className={`w-full lg:w-[740px] ${className}`}>
      {children}
    </section>
  );
}
