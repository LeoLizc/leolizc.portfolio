type IndicatorProps = {
  children: React.ReactNode;
  isStatic?: boolean;
  className?: string;
};

const onStaticClasses = [
  'dark:bg-[linear-gradient(110deg,#164e63,45%,#379abe,55%,#164e63)] bg-[length:200%_100%] animate-background-shine-sp',
  'dark:bg-[linear-gradient(110deg,#164e63,47%,#1e2631,57%,#164e63)] bg-[length:200%_100%]',
];

export default function Indicator({ children, isStatic = false, className = '' }: IndicatorProps) {
  return (
    <span className={`inline-flex items-center bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full ${onStaticClasses[+isStatic]} dark:text-cyan-200 drop-shadow-hilight-md ${className}`}>
      {!isStatic && <span className="w-2 h-2 me-1 bg-cyan-500 rounded-full" />}
      {children}
    </span>
  );
}
