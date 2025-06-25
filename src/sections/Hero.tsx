import { siteConfig } from "@/config/site.config";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-6 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        {siteConfig.name}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
        {siteConfig.description} - Creando experiencias funcionales y elegantes
      </p>
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-6 py-2 rounded hover:opacity-90 transition"
      >
        Ver proyectos en GitHub
      </a>
    </section>
  );
}
