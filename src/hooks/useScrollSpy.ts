// hooks/useScrollSpy.ts

import { useEffect, useState } from "react";

export function useScrollSpy() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin:"0px 0px -25% 0px"
    }
);
const sections = Array.from(document.querySelectorAll("section[id]")).reverse();
sections.forEach((section)=> observer.observe(section));

return () => observer.disconnect();
  });
  return activeId 
}
