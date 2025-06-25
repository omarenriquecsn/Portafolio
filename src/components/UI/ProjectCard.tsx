import Image from "next/image";

interface ProjetCardProps {
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  codeUrl,
  demoUrl,
  image,
}: ProjetCardProps) {
  return (
    <div className="inline-block snap-center overflow-hidden w-5/6 p-15 gap-15 border-b border-t border-gray-300 mx-auto">
      <div className="h-90 w-3/4 flex items-center relative border mx-auto">
        <a
          className="absolute top-[30%] left-[46%] w-[47%] z-10 h-[40%]"
          href={demoUrl}
          target="_blank"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="absolute right-11 z-1 object-cover rounded hover:scale-200 transition-transform"
          />
        </a>

        <Image src="/Dual-screen.png" alt="compus" fill />
        <a
          className="absolute left-[8%] top-[14%] z-10 h-[63%] w-[33%]"
          href={codeUrl}
          target="_blank"
        ></a>

      <a href={codeUrl}
      className=" text-center rotate-[-40deg] absolute z-10 text-[130%] top-[10%] text-neon bg-gray-800 rounded w-[20%]"
      target="_blank"
      >
        <span className="">
          {`<Código/>`}
        </span>
      </a>

        <a href={demoUrl}
        target="_blank"
        >
          <span className="absolute underline decoration-1 decoration-white underline-offset-[10px] text-[108%] top-[13%] right-[25%] text-neon ">
            Visita la web
          </span>
        </a>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl text-neon font-semibold dark:text-white">
          {title}
        </h3>
        <p className="text-white text-sm mb-2">{description}</p>
        <div className="text-xs mb-3 text-zinc-500 dark:text-zinc-400">
          {tech.join(" • ")}
        </div>
      </div>
    </div>
  );
}
