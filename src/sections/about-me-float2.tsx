/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/*import Markdown from 'markdown-to-jsx';
import React from 'react';
import Image from 'next/image';

const content = `Soy **Leonardo Lizcano**, conocido como *Leo*. Mi interés por la programación surgió en la secundaria, donde desarrollé un sistema de inventario en **VBA**. Recientemente, completé mis estudios en **Ingeniería de Sistemas** en la *Universidad del Norte*, consolidando mi pasión por los sistemas automatizados.

Durante mi formación, participé en eventos como *Expofísica*, presentando un simulador de **Bungee Jumping** con físicas realistas. Destacé en maratones de programación internas respaldadas por *ACM*. También colaboré en iniciativas universitarias como *Misión Tic* y *Eyeland* con *Epics IEEE*, principalmente como **desarrollador de Backend**.

A nivel personal, me fascinan la **automatización** y la **inteligencia artificial**. He desarrollado proyectos para controlar dispositivos eléctricos de mi hogar con un *asistente virtual* y creado simuladores con físicas realistas. Además, disfruto creando mods para juegos y explorando nuevos hobbies como **tallar madera** y manualidades. Estoy siempre en busca de nuevas experiencias.
`;

export default function AboutMe() {
  return (
    <div className="[&_p]:mb-4 md:[&_p]:text-right [&_p]:text-center [&_p]:font-medium
    [&_p>strong]:text-yellow-300 [&_p>em]:text-cyan-400 [&_p]:text-pretty"
    >
      <Image
        className="rounded-full size-60 m-auto md:float-left md:ml-3 my-auto"
        width="200"
        height="200"
        src="/imgs/avatar.webp"
        alt="Foto de Leo"
        style={{
          shapeOutside: 'circle(50%)',
        }}
      />
      <div className="min-w-60 max-w-[80%] ml-auto">
        <Markdown options={{
          forceBlock: true,
          wrapper: React.Fragment,
        }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}

// <p>
//   Soy Leonardo Lizcano, aunque pueden decirme simplemente Leo. Incurcioné en el mundo de la programación en la secundaria, haciendo un sistema de inventario y facturación en VBA. Desde entonces me he interesado mucho en los sistemas automatizados y acabo de terminar mis estudios de grado universitario en Ingeniería de Sistemas en la Universidad del Norte.
// </p>
// <p>
//   Durante mi periodo de estudios participé en eventos como la feria Expofísica con un simulador con físicas realistas de salto de Bungee Jumping junto a mi equipo, o en maratones de programación internas promovidas por el grupo estudiantil de ACM, de las cuales gané la mayoría. También tuve la oportunidad de participar en iniciativas apoyadas por la universidad como la estrategia Misión Tic, Simet, o Eyeland, junto a Epics IEEE.
// </p>
// <p>
//   A nivel personal me atraen los sistemas de automatización e inteligencia artificial, por lo que he llegado a desarrollar algunos proyectos para controlar ciertos elementos eléctricos de mi casa de forma inalámbrica con un asistente virtual, así como también he diseñado algunos simuladores con físicas realistas.
//   Entre mis hobbies se encuentra hacer mods para algunos juegos con amigos, tallar madera o hacer manualidades pero siempre estoy buscando algo nuevo que probar.
// </p>
*/