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
      <div className="[&>p]:mb-4 md:[&>p]:text-right [&>p]:text-left [&>p]:font-medium">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem magnam labore
          aspernatur at facilis dolore pariatur, commodi, itaque nobis, ipsam dignissimos
          architecto voluptate ex hic recusandae necessitatibus officiis sapiente soluta?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias
          temporibus, adipisci amet tempora perspiciatis atque necessitatibus eveniet quod
          numquam eaque nam esse expedita laborum veniam deserunt vitae officia maxime!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias
          temporibus, adipisci amet tempora perspiciatis atque necessitatibus eveniet quod
          numquam eaque nam esse expedita laborum veniam deserunt vitae officia maxime!
        </p>
      </div>
    </section>
  );
}
