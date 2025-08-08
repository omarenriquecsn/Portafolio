"use client";
import ProjectCard from "@/components/UI/ProjectCard";
import { projects } from "../data/proyects";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < projects.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(projects.length - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-[image:var(--background-works)]  mx-auto "
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col colim items-center justify-center  text-center h-90">
          <svg className="flex-col gap-1 w-9 mb-5 mx-auto m-0  mt-20">
            <use href="/sprite.svg#mouse" />
          </svg>
          <h2 className="w-228 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neon">
            Proyectos destacados
          </h2>
          <svg className="pt-4 h-10 w-60">
            <use href="/sprite.svg#linehorizontal" />
          </svg>
        </div>
        <div className="overflow-hidden relative w-full max-w-6xl mx-auto px-2 sm:px-6">
          <div
            className="flex transition-transform duration-500 items-center w-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-full md:w-[500px] lg:w-full flex-shrink-0 flex justify-center items-stretch h-auto"
              >
                <ProjectCard key={project.title} {...project} />
              </div>
            ))}
          </div>
          <button
            onClick={prev}
            className="border absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-zinc-800 text-neon rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold shadow hover:scale-105 transition-transform z-10"
            aria-label="Anterior"
          >
            <FaChevronLeft className="h-15"/>
          </button>

          <button
            onClick={next}
            className="border absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-zinc-800 text-neon rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg font-bold shadow hover:scale-105 transition-transform z-10"
            aria-label="Siguiente"
          >
            <FaChevronRight className="h-15"/>
          </button>
        </div>
      </div>
    </section>
  );
}
