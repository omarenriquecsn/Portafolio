"use client";
import Link from "next/link";
import { MdApps, MdPerson, MdComputer, MdEmail } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Navbar() {
  const activeId = useScrollSpy();

  const links = [
    { id: "hero", icon: <MdApps /> },
    { id: "about", icon: <MdPerson /> },
    { id: "skills", icon: <FaCode /> },
    { id: "projects", icon: <MdComputer /> },
    { id: "contact", icon: <MdEmail /> },
  ];

  console.log(activeId);
  return (
    <nav className="flex flex-col rounded-full border items-center w-15 p-5 fixed top-10 left-10 z-50 bg-[#1A1E23] text-white gap-9 text-[150%]">
      {/* <Link
          href="#hero"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        ><MdApps/></Link>
        <Link
          href="#about"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        ><MdPerson/></Link>
        <Link
          href="#skills"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        ><FaCode/></Link>
        <Link
          href="#projects"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        ><MdComputer/></Link>
        <Link
          href="#contact"
          scroll={true}
          className="hover:text-blue-500 transition-colors duration-300"
        ><MdEmail/></Link> */}
      {links.map(({ id, icon }) => (
        <Link
          key={id}
          href={`#${id}`}
          scroll={true}
          className={`transition-colors duration-300 ${
            activeId === id ? "text-neon" : "hover:text-neon"
          }`}
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
}
