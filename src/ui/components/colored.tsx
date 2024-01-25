/* eslint-disable react/jsx-no-useless-fragment */
type ColoredTextProps = {
  text: string;
  className?: string;
};
const re = /\[#([0-9a-fA-F]{6})\]/g;

export default function ColoredText({ text, className }: ColoredTextProps) {
  const matches = [...text.matchAll(re)];

  const texts: { text: string, color?: string }[] = [];

  if (matches[0].index !== 0) {
    texts.push({ text: text.substring(0, matches[0]?.index) });
  }

  texts.push(...matches.map((match, index) => {
    const t = text.substring(match.index + match[0].length, matches[index + 1]?.index);

    return {
      text: t,
      color: match[1],
    };
  }));

  const spans: JSX.Element[] = texts.map((t) => {
    if (t.color) {
      return (
        <span className={className} style={{ color: `#${t.color}` }} key={crypto.randomUUID()}>
          {t.text}
        </span>
      );
    }
    return (
      <span className={className} key={crypto.randomUUID()}>
        {t.text}
      </span>
    );
  });
  // return (
  //   <span className={className} style={{ color: `#${match[1]}` }} key={crypto.randomUUID()}>
  //     {t}
  //   </span>
  // );

  // console.log(spans);
  return (
    <>{spans}</>
  );
}
