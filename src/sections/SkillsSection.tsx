import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiFirebase,
  SiGithub,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    {
      label: "Next.js",
      icon: <SiNextdotjs size={35} className="text-white" />,
      color: "bg-gradient-to-r from-gray-500 to-zinc-900",
    },
    {
      label: "NestJS",
      icon: <SiNestjs size={35} className="text-white" />,
      color: "bg-gradient-to-r from-red-600 to-rose-900",
    },
    {
      label: "TypeScript",
      icon: <SiTypescript size={35} className="text-white " />,
      color: "bg-gradient-to-r from-blue-400 to-blue-700",
    },
    {
      label: "Docker",
      icon: <SiDocker size={35} className="text-white" />,
      color: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600",
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss size={35} className="text-white" />,
      color: "bg-blue-400",
    },
    {
      label: "GitHub",
      icon: <SiGithub size={35} className="text-white " />,
      color: "bg-gradient-to-r from-zinc-500 to-black",
    },
    {
      label: "firebase",
      icon: <SiFirebase size={35} className="text-white" />,
      color: "bg-gradient-to-r from-yellow-400 to-red-500",
    },
    {
      label: "PostgreSQL",
      icon: <SiPostgresql size={35} className="text-white" />,
      color: "bg-blue-800",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 min-h-screen bg-[image:var(--background-skills)] dark:bg-zinc-800"
    >
      <div className="flex flex-col colim items-center justify-center  text-center h-90">
        <svg className="flex-col gap-1 w-9 mb-5 mx-auto m-0  mt-20">
          <use href="/sprite.svg#mouse" />
        </svg>
        <h2 className="text-neon text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-center mb-8">
          Habilidades técnicas
        </h2>
        <svg className="pt-4 h-10 w-60">
          <use href="/sprite.svg#linehorizontal" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto text-center ">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {skills.map((skill) => (
            <li
              key={skill.label}
              className="flex flex-col items-center text-zinc-700 dark:text-zinc-300"
            >
              <div
                className={`${skill.color} flex items-center justify-center w-20 h-20 rounded-full mb-5`}
              >
                {skill.icon}
              </div>
              <span className="text-white">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
