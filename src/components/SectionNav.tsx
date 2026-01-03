"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "platforms", label: "Platforms" },
  { id: "features", label: "Features" },
  { id: "cta", label: "Get Started" },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-end gap-3"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
        >
          <motion.span
            className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            initial={{ x: 10 }}
            whileHover={{ x: 0 }}
          >
            {section.label}
          </motion.span>
          <motion.div
            className={`relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? "border-primary bg-primary scale-125"
                : "border-muted-foreground/50 bg-transparent hover:border-primary"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-[-4px] rounded-full border-2 border-primary/30"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default SectionNav;
