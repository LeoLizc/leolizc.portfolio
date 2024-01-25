// import Badge from '@/ui/components/badge';
import Indicator from '@/ui/components/indicator';
import SectionLayout from '@/ui/components/section-layout';

export default function Home() {
  // ? Alternative text color #8ec8fb
  return (
    <main className="">
      <SectionLayout>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-5 items-center mb-4">
          ¡Hola! Soy Leonardo
          <Indicator href="/#contacto">
            Disponible para trabajar
          </Indicator>
        </h1>
        <h2 className="text-2xl dark:text-sky-300">
          Ingeniero de sistemas titulado. Desarrollador web backend con conocimientos en frontend.
          Y aficionado a la inteligencia artificial.
        </h2>
      </SectionLayout>
    </main>
  );
}
