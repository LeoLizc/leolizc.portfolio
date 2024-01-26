type IndicatorProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Indicator({ children, href = '' }: IndicatorProps) {
  return (
    <a href={href} className="inline-flex items-center hover:scale-105 transition drop-shadow-hilight-md">
      <span className="inline-flex items-center bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-[linear-gradient(110deg,#164e63,45%,#379abe,55%,#164e63)] bg-[length:200%_100%] animate-background-shine-sp dark:text-cyan-200">
        <span className="w-2 h-2 me-1 bg-cyan-500 rounded-full" />
        {children}
      </span>
    </a>
  );
}
