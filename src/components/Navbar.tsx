import Link from "next/link";

export default function Navbar() {
  return (
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <Link
          href="#about"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        >Conoceme</Link>
        <Link
          href="#skills"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        >Habilidades</Link>
        <Link
          href="#projects"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        >Proyectos</Link>
        <Link
          href="#contact"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        >Contactame</Link>
      </nav>
  );
}
