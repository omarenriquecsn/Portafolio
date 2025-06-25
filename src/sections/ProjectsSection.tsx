"use client";
import ProjectCard from "@/components/UI/ProjectCard";
import { projects } from "../data/proyects";
import { useState } from "react";

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
      <div className="max-w-6xl mx-auto" >
        <div className="flex flex-col colim items-center justify-center  text-center h-90">
          <svg className="flex-col gap-1 w-9 mb-5 mx-auto m-0  mt-20">
            <use href="/sprite.svg#mouse" />
          </svg>
          <h2 style={{ color: "#12F7D6" }} className="w-228 text-5xl">
            Proyectos Destacados
          </h2>
          <svg className="pt-4 h-10 w-60">
            <use href="/sprite.svg#linehorizontal" />
          </svg>
        </div>
        <div className="overflow-hidden flex border relative ">
          <div
            className="flex transition-transform duration-500 items-center w-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full flex justify-center items-stretch h-[500px]">
                <ProjectCard key={project.title} {...project} />
              </div>
            ))}
          </div>
        <svg className="absolute left-0 top-1/2" onClick={prev}>
          <use href="/sprite.svg#prev" />
        </svg>

        <svg className="absolute right-[-14rem] top-1/2" onClick={next}>
          <use href="/sprite.svg#next" />
        </svg>
        </div>

      </div>
    </section>
  );
}
