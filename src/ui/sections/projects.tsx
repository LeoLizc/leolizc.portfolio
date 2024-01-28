import BentoItem from '@components/bento-item';

export default function Projects() {
  return (
    <div className="grid grid-cols-12 auto-rows-[7.2rem] gap-4">
      <BentoItem
        className="col-span-8 row-span-3 [&_h3]:text-3xl [&_h3]:text-[#2acf76]"
        title="Epics - Eyeland"
        imageSrc="/imgs/Eyeland_shots_so.webp"
        imageAlt="Página wev de Eyeland"
        subtitle="Desarrolador - Backend"
        description="Programa educativo para estudiantes de secundaria para la construcción de aplicaciones móviles para promover la inclusión de personas con discapacidad visual."
      />
      <BentoItem
        className="col-span-4 row-span-3 [&_p]:leading-snug [&_h3]:leading-tight"
        title="Proyecto Parche"
        subtitle="Co-Autor"
        imageSrc="/imgs/Parche_shots_so.webp"
        imageAlt="Captura de la pantalla principal de la aplicación"
        description="Aplicación para salidas grupales, optimizando coordinación, puntualidad y diversión en ciudades"
      />
      <BentoItem
        className="col-span-5 [&_p]:leading-snug [&_p]:text-sm"
        title="Simulador de Cohete"
        subtitle="Autor"
        description="Simulador de cohete en Java Processing con físicas realistas. Modelos, océano y cámara 3D hechos desde cero en Processing"
      />
      <BentoItem
        className="col-span-7 [&_p]:leading-snug"
        title="APELL - Simet"
        imageSrc="/imgs/Simet_shots_so.webp"
        imageAlt="Página web de APELL - Simet"
        subtitle="Voluntario - Backend"
        description="Página web que refuerza la ayuda mutua en emergencias industriales a través de una red de empresas."
      />
    </div>
  );
}
