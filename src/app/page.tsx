import Badge from '@/ui/components/badge';
import { GithubIcon, LinkedInIcon, MailIcon } from '@/ui/components/icons';
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
        <h2 className="text-2xl dark:text-sky-300 mb-5">
          Ingeniero de sistemas titulado. Desarrollador web backend con conocimientos en frontend.
          Y aficionado a la inteligencia artificial.
        </h2>
        <nav className="flex my-5 gap-2">
          <Badge text="Github" hiddenText="Leolizc" href="https://github.com/LeoLizc">
            <GithubIcon />
          </Badge>
          <Badge text="LinkedIn" hiddenText="Leonardo Lizcano" href="https://www.linkedin.com/in/leonardo-lizcano-pinto0220/">
            <LinkedInIcon />
          </Badge>
          <Badge text="Email" hiddenText="leolizcanop@gmail.com">
            <MailIcon />
          </Badge>
        </nav>
      </SectionLayout>
    </main>
  );
}
