import ContactMe from '@sections/contact-me';
import Badge from '@components/badge';
import { GithubIcon, LinkedInIcon, MailIcon } from '@components/icons';
import Indicator from '@components/indicator';
import SectionLayout from '@components/section-layout';
import AboutMe from '@sections/about-me';
import Experience from '@sections/experience';
import Projects from '@sections/projects';

export default function Home() {
  // ? Alternative text color #8ec8fb
  return (
    <main className="">
      <SectionLayout className="pt-52 !pb-32 !h-[100svh] flex items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-5 items-center mb-4">
            ¡Hola! Soy Leonardo
            <a
              href="https://www.linkedin.com/in/leonardo-lizcano-pinto0220/"
              className="flex items-center hover:scale-105 transition"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Indicator>
                Disponible para trabajar
              </Indicator>
            </a>
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
        </div>
      </SectionLayout>
      <SectionLayout title="Experiencia" id="experiencia">
        <Experience />
      </SectionLayout>
      <SectionLayout title="Proyectos" id="proyectos">
        <Projects />
      </SectionLayout>
      <SectionLayout title="Sobre mí" id="sobre-mi">
        <AboutMe />
      </SectionLayout>
      <SectionLayout title="Contacto" id="contacto">
        <ContactMe />
      </SectionLayout>
    </main>
  );
}
