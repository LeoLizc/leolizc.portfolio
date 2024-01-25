import './badge.css';

type BadgeProps = {
  children?: React.ReactNode;
  text: string;
  hiddenText?: string;
  href?: string;
};

export default function Badge({
  text, hiddenText, href, children,
}: BadgeProps) {
  const defClassName = 'bg-indigo-100 text-indigo-800 text-s font-medium py-0.5 rounded-md dark:bg-gray-700 dark:text-indigo-300';
  const hiddenClassName = 'px-2.5 border border-indigo-400';
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-base badge me-2 pointer-events-[fill]">
      <span className={`${defClassName} ${hiddenClassName} px-2.5 visible-text${hiddenText == null ? ' ' : ' animated'} flex gap-1`}>
        {children}
        {text}
      </span>
      {hiddenText && (
        <div className="hidden-text-container">
          <span className={`${defClassName} hidden-text display-flex gap-1`}>
            {/* {children} */}
            {hiddenText}
          </span>
        </div>
      )}
    </a>
  );
}
