"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const CTASection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-mesh" />

        {/* Parallax Floating Orbs */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-10 left-[20%] w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-morph"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-10 right-[20%] w-80 h-80 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full blur-3xl animate-morph"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/3 right-[10%] w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-glow-pulse"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
          className="absolute bottom-1/3 left-[10%] w-36 h-36 bg-accent/10 rounded-full blur-xl animate-glow-pulse"
        />

        {/* Animated Border Ring with Parallax */}
        <motion.div
          style={{ rotate: rotate1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
        />
        <motion.div
          style={{ rotate: rotate2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/10 rounded-full"
        />
        <motion.div
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 90]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/5 rounded-full"
        />

        {/* Floating geometric shapes */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -50]) }}
          className="absolute top-[20%] left-[8%] w-10 h-10 border border-primary/15 rounded-lg rotate-45"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 60]) }}
          className="absolute bottom-[30%] right-[8%] w-14 h-14 border-2 border-accent/10 rounded-full"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ scale }}
            className="max-w-3xl mx-auto"
          >
            {/* Glass Card Container */}
            <div className="glass-premium rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-30" />

              {/* Decorative Corner Elements */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />

              {/* Floating Icon */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 mb-8"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Get Started Today</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Create your profile in minutes and let Exploree do the searching for you. Join Exploree ET and never miss an opportunity again.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="group relative overflow-hidden" onClick={() => setIsWaitlistOpen(true)}>
                    <span className="relative z-10 flex items-center gap-2">
                      Create Your Profile
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </Button>
                </motion.div>
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </motion.div>
                  ))}
                </div>
                <span className="ml-2">Trusted by 1,000+ businesses</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};

export default CTASection;
