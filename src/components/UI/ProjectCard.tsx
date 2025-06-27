'use client'
import Image from "next/image";

interface ProjetCardProps {
  title: string;
  // description: string;
  // tech: string[];
  codeUrl: string;
  demoUrl: string;
  image: string;
}

export default function ProjectCard({
  title,
  // description,
  // tech,
  codeUrl,
  demoUrl,
  image,
}: ProjetCardProps) {
  return (
    <div className="inline-block snap-center overflow-hidden w-5/6 p-15 gap-15 mx-auto">
      <div className="h-90 w-3/4 flex items-center relative mx-auto">
        <a
          className="absolute w-[47%] top-[30%] left-[46%] z-10 h-[41%]"
          href={demoUrl}
          target="_blank"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="absolute right-11 z-1 w-full h-full rounded hover:scale-200 transition-transform"
          />
        </a>

        <Image src="/Dual-screen.png" alt="compus" fill />
        <a
          className="absolute left-[8%] top-[14%] z-10 h-[63%] w-[33%]"
          href={codeUrl}
          target="_blank"
        ></a>

        <a
          href={codeUrl}
          className=" text-center rotate-[-40deg] absolute z-10 text-[130%] top-[10%] text-neon bg-gray-800 rounded w-[20%]"
          target="_blank"
        >
          <span className="">{`<Código/>`}</span>
        </a>

        <a href={demoUrl} target="_blank">
          <span className="absolute underline decoration-1 decoration-white underline-offset-[10px] text-[108%] top-[13%] right-[25%] text-neon ">
            Visita la web
          </span>
        </a>
      </div>
    </div>
  );
}
