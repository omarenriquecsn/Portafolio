import Image from "next/image";
import { ibmPlexMono } from "@/lib/fonts";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { MdWork } from "react-icons/md";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full bg-[#43454D] pt-24 md:pt-32 pb-12">
      <div className="max-w-500 h-full flex flex-col mx-auto py-20 px-6 md:px-16">
        <div className="w-full flex justify-center">
          <h1 className="text-4xl md:text-6xl mb-10 text-neon">
            Desarrollador
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 p-6 md:p-10 max-w-6xl mx-auto items-center">
          <div
            className={`${ibmPlexMono.className} w-full max-w-xs sm:max-w-sm lg:max-w-[280px] h-auto rounded-tl-[120px] rounded-br-[120px] border-white border-3 p-4`}
          >
            <div className="w-full flex justify-center mt-5 ">
              <Image
                src="/fotoprofesional.jpg"
                width={100}
                height={100}
                alt="foto"
                className="rounded-full border border-neon"
              />
            </div>
            <h3 className="mt-2 text-center text-white">Omar Contreras</h3>
            <p className="text-[65%] text-center text-white">
              Desarrolador Full-Stack{" "}
            </p>
            <ul className="mt-4  text-white leading-7">
              <li className="flex gap-4 justify-start items-center ml-2">
                <SiGmail className="text-neon" />{" "}
                <p className="text-[65%]">omarenriquecs@gmail.com</p>
              </li>
              <li className="flex gap-4 justify-start ml-2 items-center">
                <SiGooglemaps className="text-neon" />{" "}
                <p className="text-[65%]">Venezuela Carabob/Valencia</p>
              </li>
              <li className="flex gap-4 justify-start ml-2 items-center">
                <MdWork className="text-neon" />{" "}
                <p className="text-[65%]">Disponible Fulltime</p>
              </li>
            </ul>
            <div className="flex gap-2 justify-center mt-2">
              <p className="bg-neon p-1 rounded-full">HTML</p>
              <p className="bg-neon p-1 rounded-full">CSS</p>
              <p className="bg-neon p-1 rounded-full">REACT</p>
              <p className="bg-neon p-1 rounded-full">JS</p>
            </div>
            <div className="text-center w-full ">
              <a
                href="/omar-contreras-cv.docx"
                download
                className="flex gap-1 p-3 w-40 rounded-3xl bg-white mt-10 text-black mx-auto"
              >
                Download CV
                {
                  <svg className="w-6 h-6">
                    <use href="sprite.svg#download" />
                  </svg>
                }
              </a>
            </div>
          </div>

          <div className="w-full flex-1 text-white lg:text-left px-2 sm:px-6">
            <span className="text-neon text-[60%]">{`<h1>`}</span>
            <h2 className="ml-4 text-[180%]">Hola</h2>
            <h2 className="ml-4 text-[180%]">
              Soy <span className="text-neon">Omar Contreras</span>
            </h2>
            <h2 className="ml-4 text-[180%]">Desarrollador Full-Stack</h2>
            <span className="text-neon text-[60%]">{`</h1>`}</span>
            <p></p>
            <span className="text-neon text-[60%]">{`<p>`}</span>
            <p className={`${ibmPlexMono.className} ml-4 text-sm sm:text-base leading-relaxed`}>
              Creando experiencias funcionales y elegantes para empresas y
              profesionales
            </p>
            <span className=" text-neon text-[60%]">{`</p>`}</span>
            <Link
              href="/#contact"
              className="ml-4  flex gap-4 items-center text-neon"
            >
              Conectemos <SiGmail />
            </Link>
          </div>
          <div className="flex items-center w-50 rounded-full h-90 my-auto p-7 bg-[#1A1E23] text-white">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <h2 className="text-neon text-[210%]">2</h2>
                <p className={`${ibmPlexMono.className} text-[80%]`}>
                  Lenguajes de Programación
                </p>
              </li>
              <li className="flex items-center gap-2">
                <h2 className="text-neon text-[210%]">8</h2>
                <p className={`${ibmPlexMono.className} text-[80%]`}>
                  Herramientas de Desarrollo
                </p>
              </li>
              <li className="flex items-center gap-2">
                <h2 className="text-neon text-[210%]">1</h2>
                <p className={`${ibmPlexMono.className} text-[80%]`}>
                  Años de experiencia
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
