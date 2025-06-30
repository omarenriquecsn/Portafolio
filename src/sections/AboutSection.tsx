"use client";
import Image from "next/image";
import { ibmPlexMono } from "../lib/fonts";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 md:px-16 bg-[image:var(--background-about)] bg-cover dark:bg-zinc-900 "
    >
      <div className="flex flex-col items-center justify-center  text-center h-90">
        <svg className="flex-col gap-1 w-9 mb-5 mx-auto m-0  mt-20">
          <use href="/sprite.svg#mouse" />
        </svg>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="w-full lg:max-w-2xl flex flex-col justify-center items-start lg:mr-20">
          <div className="">
            <h3 className=" bg-[#292F36] text-white border-neon pt-3 pb-3 rounded-tl-4xl rounded-br-4xl mx-auto flex flex-col items-center border-3 w-50 text-3xl mb-10 ">
              Sobre Mi
            </h3>
          </div>
          <div
            className={`${ibmPlexMono.className} bg-[#292F36] max-w-3xl p-5 rounded-3xl font-[IMB-Plex-Mono]`}
          >
            <span className="text-neon">{`<p>`}</span>
            <h3 className="text-neon text-[200%]">Hola !</h3>
            <p className="text-base text-white   dark:text-zinc-300 leading-relaxed">
              Soy Omar Contreras, desarrollador full-stack con pasión por
              resolver desafíos técnicos y crear experiencias digitales fluidas.
              Me especializo en integrar frontend y backend con tecnologías
              modernas como Next.js, NestJS, y PostgreSQL. También me interesa
              la integración de hardware automotrizy la escritura creativa,
            </p>
            <span className="text-neon">{`</p>`}</span>
          </div>
        </div>
        <div>
          <Image
            src="/Lapto.png"
            width={400}
            height={600}
            alt="decorador"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
