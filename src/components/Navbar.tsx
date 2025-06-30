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
    <nav className="fixed top-6 left-6 flex flex-col items-center gap-6 bg-[#1A1E23] text-white border border-white rounded-full p-4 z-50 shadow-md">
      {links.map(({ id, icon }) => (
        <Link
          key={id}
          href={`#${id}`}
          scroll={true}
          className={`transition-colors duration-300 ${
            activeId === id ? "text-neon" : "text-white hover:text-neon"
          }`}
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
}
