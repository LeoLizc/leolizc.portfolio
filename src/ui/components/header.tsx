import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full lg:w-[1020px] p-3 py-2 fixed top-0 animate-scroll-blur [animation-timeline:scroll()] [animation-range:0_900px] z-20">
      <a href="/#"><Image src="/imgs/avatar.webp" width="48" height="48" alt="avatar" /></a>
      <nav className="flex flex-row items-center gap-6">
        <a href="/#experiencia">Experiencia</a>
        <a href="/#proyectos">Proyectos</a>
        <a href="/#sobre-mi">Sobre mí</a>
        <a href="/#contacto">Contacto</a>
      </nav>
    </header>
  );
}
