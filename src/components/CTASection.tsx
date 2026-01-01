import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const CTASection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-mesh" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[20%] w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-[20%] w-80 h-80 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full blur-3xl"
        />

        {/* Animated Border Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/10 rounded-full"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
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
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 mb-8"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Explore Opportunities</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of businesses already using Exploree to discover and manage opportunities efficiently.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
                    <a href="https://tender.exploree.io" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-2">
                        Start with Tenders
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="hero-secondary"
                    size="xl"
                    onClick={() => setIsWaitlistOpen(true)}
                    className="backdrop-blur-xl"
                  >
                    Join Waitlist
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
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
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
