"use client";
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
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full aspect-video max-w-[768px] mx-auto">
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

        <Image src="/Dual-screen.png" alt="compus" fill className="z-0" />
        <a
          className="absolute left-[8%] top-[14%] z-10 h-[63%] w-[33%]"
          href={codeUrl}
          target="_blank"
        ></a>

        <a
          href={codeUrl}
          className="absolute top-[10%] left-[5%] sm:left-[8%] z-10 text-xs sm:text-sm md:text-base text-neon bg-gray-800 rounded px-2 py-1 rotate-[-12deg]"
          target="_blank"
        >
          <span>{`<Código/>`}</span>
        </a>

        <a
          href={demoUrl}
          target="_blank"
          className="absolute top-[13%] right-[10%] sm:right-[25%] z-10 underline decoration-white text-xs sm:text-sm md:text-base text-neon"
        >
          Visita la web
        </a>
      </div>
    </div>
  );
}
