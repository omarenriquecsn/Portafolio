import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiFirebase,
} from 'react-icons/si'

export default function SkillsSection() {
  const skills = [
    { label: 'Next.js', icon: <SiNextdotjs size={24} /> },
    { label: 'NestJS', icon: <SiNestjs size={24} /> },
    { label: 'TypeScript', icon: <SiTypescript size={24} /> },
    { label: 'PostgreSQL', icon: <SiPostgresql size={24} /> },
    { label: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
    { label: 'Framer Motion', icon: <SiFramer size={24} /> },
    { label: 'Vercel', icon: <SiVercel size={24} /> },
    { label: 'firebase', icon: <SiFirebase size={24} /> },
]

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-zinc-100 dark:bg-zinc-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
          Habilidades técnicas
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <li
              key={skill.label}
              className="flex flex-col items-center text-zinc-700 dark:text-zinc-300"
            >
              <div className="mb-2">{skill.icon}</div>
              <span>{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}