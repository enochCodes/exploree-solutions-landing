import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Layers, Bell, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our intelligent algorithms analyze your profile and deliver personalized opportunities automatically.",
    isAI: true,
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Machine learning that gets smarter over time, understanding your preferences and career goals.",
    isAI: true,
  },
  {
    icon: Layers,
    title: "All-in-One Platform",
    description: "Jobs, tenders, events & opportunities — all in one unified ecosystem powered by AI.",
  },
  {
    icon: Bell,
    title: "Intelligent Alerts",
    description: "AI-driven notifications that know when and what to alert you about. Never miss a deadline.",
    isAI: true,
  },
  {
    icon: Globe,
    title: "Inclusive Access",
    description: "Digital documents & alerts designed for both urban and rural users across Ethiopia.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Listings",
    description: "AI-verified and curated information from trusted stakeholders.",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-mesh opacity-50" />

      {/* Parallax Grid Pattern */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Parallax Decorative Orbs */}
      <motion.div
        style={{ y: y1, rotate, scale }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
      />

      {/* Floating geometric shapes with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -80]) }}
        className="absolute top-[20%] right-[10%] w-16 h-16 border border-primary/10 rounded-xl rotate-12"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 60]) }}
        className="absolute bottom-[30%] left-[5%] w-12 h-12 bg-accent/5 rounded-lg rotate-45"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
        className="absolute top-[60%] right-[5%] w-8 h-8 border-2 border-primary/10 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-primary border-primary/30 bg-primary/5">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Exploree Is Different</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with you in mind — simple, inclusive, and designed to bring opportunities to you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-premium rounded-2xl p-6 group spotlight cursor-default relative overflow-hidden"
              >
                {/* AI Badge */}
                {(feature as { isAI?: boolean }).isAI && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-medium text-primary">AI</span>
                  </div>
                )}

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 relative overflow-hidden"
                >
                  <Icon className="w-7 h-7 text-primary relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
