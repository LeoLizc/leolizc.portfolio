/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4">
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem <strong>magnam labore aspernatur at facilis dolore pariatur</strong>, commodi, itaque nobis, ipsam dignissimos architecto voluptate ex hic recusandae necessitatibus officiis sapiente soluta?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Assumenda alias temporibus</strong>, adipisci amet tempora perspiciatis atque necessitatibus eveniet quod numquam eaque nam esse expedita laborum <strong>veniam deserunt vitae officia maxime!</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias temporibus, <strong>adipisci amet tempora</strong> perspiciatis atque necessitatibus eveniet quod <strong>numquam eaque nam esse</strong> expedita laborum veniam deserunt vitae officia maxime!
        </p>
      </div>
    </section>
  );
}
