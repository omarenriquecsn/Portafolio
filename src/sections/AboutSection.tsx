import { siteConfig } from "@/config/site.config";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2>Sobre mi</h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
         {siteConfig.bio}
        </p>
      </div>
    </section>
  );
}
