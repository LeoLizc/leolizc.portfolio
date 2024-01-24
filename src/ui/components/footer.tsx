export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row justify-between w-full lg:w-[1020px]">
      <span className="text-sm text-yellow-200/90">{`© ${year} LeoLizc. Casi todos los derechos reservados`}</span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0 gap-4 md:gap-6">
        <li>
          <a href="/#">Sobre mí</a>
        </li>
        <li>
          <a href="/#">Contacto</a>
        </li>
      </ul>
    </footer>
  );
}
