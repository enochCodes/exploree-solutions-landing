"use client";

import Image from "next/image";
import { FileText, Briefcase, Calendar, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, fadeInUp } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <footer id="about" className="bg-secondary text-secondary-foreground py-16 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/logo-dark.png"
                alt="Exploree Solutions"
                width={160}
                height={40}
                className="h-9 w-auto"
              />
            </motion.div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Empowering businesses with unified access to tenders, jobs, events, and opportunities.
            </p>
          </motion.div>

          {/* Platforms */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-3">
              {[
                { icon: FileText, label: "Exploree Tender", href: "https://tender.exploree.io", active: true },
                { icon: Briefcase, label: "Exploree Jobs", href: "#", active: false },
                { icon: Calendar, label: "Exploree Events", href: "#", active: false },
                { icon: Rocket, label: "Exploree Opportunity", href: "#", active: false },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.active ? (
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm group"
                      whileHover={{ x: 4 }}
                    >
                      <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                      {item.label}
                    </motion.a>
                  ) : (
                    <span className="flex items-center gap-2 text-secondary-foreground/50 text-sm">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                      <span className="text-xs bg-secondary-foreground/10 px-2 py-0.5 rounded">Soon</span>
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Contact", "Blog"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.a
                    href="#"
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.a
                    href="#"
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Exploree Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Twitter", "Facebook"].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors text-sm"
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
