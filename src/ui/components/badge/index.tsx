import './badge.css';

type BadgeProps = {
  text: string;
  hiddenText?: string;
};

export default function Badge({ text, hiddenText }: BadgeProps) {
  const defClassName = 'bg-indigo-100 text-indigo-800 text-xs font-medium py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400';
  const hiddenClassName = 'px-2.5 border border-indigo-400';
  return (
    <div className="text-base badge me-2 pointer-events-[fill]">
      <span className={`${defClassName} ${hiddenClassName} px-2.5 visible-text${hiddenText == null ? ' ' : ' animated'}`}>
        {text}
      </span>
      {hiddenText && (
        <div className="hidden-text-container">
          <span className={`${defClassName} hidden-text`}>
            {hiddenText}
          </span>
        </div>
      )}
    </div>
  );
}
