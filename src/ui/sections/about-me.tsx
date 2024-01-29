/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <Image
        className="rounded-full size-60"
        width="200"
        height="200"
        src="/imgs/avatar.webp"
        alt="Foto de Leo"
      />
      <div className="[&>p]:mb-4 md:[&>p]:text-right [&>p]:text-left [&>p]:font-medium
      [&>p>strong]:text-yellow-300 [&>p>em]:text-cyan-400"
      >
        <p>
          Soy Leonardo Lizcano, aunque pueden decirme simplemente Leo. Incurcioné en el mundo de la programación en la secundaria, haciendo un sistema de inventario y facturación en VBA. Desde entonces me he interesado mucho en los sistemas automatizados y acabo de terminar mis estudios de grado universitario en Ingeniería de Sistemas en la Universidad del Norte.
        </p>
        <p>
          Durante mi periodo de estudios participé en eventos como la feria Expofísica con un simulador con físicas realistas de salto de Bungee Jumping junto a mi equipo, o en maratones de programación internas promovidas por el grupo estudiantil de ACM, de las cuales gané la mayoría. También tuve la oportunidad de participar en iniciativas apoyadas por la universidad como la estrategia Misión Tic, Simet, o Eyeland, junto a Epics IEEE.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias temporibus, <strong>adipisci amet tempora</strong> perspiciatis atque necessitatibus eveniet quod <strong>numquam eaque nam esse</strong> expedita laborum veniam deserunt vitae officia maxime!
        </p>
      </div>
    </div>
  );
}
