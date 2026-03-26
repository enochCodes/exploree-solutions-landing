"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
  FileText,
  ScrollText,
  GraduationCap,
  Calendar,
  ArrowRight,
  Sparkles,
  Brain
} from "lucide-react";

const userTypes = [
  {
    id: "job-seekers",
    icon: Briefcase,
    title: "Job Seekers",
    tagline: "Find your dream career",
    highlight: "Free for life",
    highlightColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/30",
    gradient: "from-neutral-600 to-neutral-800",
    glowColor: "neutral",
    isAI: true,
    features: [
      "AI-matched job alerts based on your skills",
      "One-click applications from your profile",
      "Real-time application status tracking",
    ],
    cta: "Start Job Hunting",
  },
  {
    id: "employers",
    icon: Building2,
    title: "Employers",
    tagline: "Hire the best talent",
    highlight: "AI-Powered Hiring",
    highlightColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/30",
    gradient: "from-neutral-700 to-neutral-950",
    glowColor: "neutral",
    isAI: true,
    features: [
      "AI-ranked candidates for your positions",
      "Smart applicant filtering dashboard",
      "Insights-driven hiring analytics",
    ],
    cta: "Post a Job",
  },
  {
    id: "tender-publishers",
    icon: FileText,
    title: "Tender Publishers",
    tagline: "Reach qualified bidders",
    highlight: "Digital Signing",
    highlightColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/30",
    gradient: "from-neutral-500 to-neutral-700",
    glowColor: "neutral",
    isAI: false,
    features: [
      "Publish tenders digitally nationwide",
      "Sell bid documents online securely",
      "Electronic document signing",
    ],
    cta: "Publish Tender",
  },
  {
    id: "tender-bidders",
    icon: ScrollText,
    title: "Tender Bidders",
    tagline: "Win more contracts",
    highlight: "AI Tender Matching",
    highlightColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/30",
    gradient: "from-neutral-600 to-neutral-900",
    glowColor: "neutral",
    isAI: true,
    features: [
      "AI-matched tender recommendations",
      "Automated deadline reminders",
      "Bid from anywhere in Ethiopia",
    ],
    cta: "Find Tenders",
  },
  {
    id: "opportunity-seekers",
    icon: GraduationCap,
    title: "Opportunity Seekers",
    tagline: "Scholarships, grants & more",
    highlight: "Smart Discovery",
    highlightColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/30",
    gradient: "from-neutral-500 to-neutral-800",
    glowColor: "neutral",
    isAI: true,
    features: [
      "Personalized funding opportunities",
      "AI-powered eligibility matching",
      "Never miss application deadlines",
    ],
    cta: "Explore Opportunities",
  },
  {
    id: "event-seekers",
    icon: Calendar,
    title: "Event Seekers",
    tagline: "Grow professionally",
    highlight: "Curated Events",
    highlightColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/30",
    gradient: "from-neutral-600 to-neutral-800",
    glowColor: "neutral",
    isAI: false,
    features: [
      "Discover trainings & workshops",
      "Smart event recommendations",
      "Calendar integration & reminders",
    ],
    cta: "Find Events",
  },
];

const PlatformsSection = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} id="who-we-help" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-30" />

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] right-[5%] w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"
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
            <Brain className="w-3 h-3 mr-1" />
            AI-Powered for Everyone
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Who <span className="gradient-text">Exploree Helps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored AI experiences for every user type. Select your journey and let our platform work for you.
          </p>
        </motion.div>

        {/* User Types Grid - Modern Card Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {userTypes.map((userType) => {
            const Icon = userType.icon;
            const isHovered = hoveredCard === userType.id;

            return (
              <motion.div
                key={userType.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(userType.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Card */}
                <motion.div
                  animate={{
                    y: isHovered ? -12 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full glass-premium rounded-3xl p-6 relative overflow-hidden border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  {/* Animated Gradient Border on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: `linear-gradient(135deg, transparent 40%, var(--primary) 50%, transparent 60%)`,
                          backgroundSize: "200% 200%",
                          animation: "shimmer 2s linear infinite",
                          padding: "1px",
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "exclude",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Background Glow */}
                  <motion.div
                    animate={{ opacity: isHovered ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${userType.gradient} blur-3xl`}
                  />

                  {/* AI Badge */}
                  {userType.isAI && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-medium text-primary">AI</span>
                    </motion.div>
                  )}

                  {/* Icon with Animated Gradient */}
                  <motion.div
                    animate={{ rotate: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${userType.gradient} flex items-center justify-center mb-5 relative shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <motion.div
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                    />
                  </motion.div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {userType.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{userType.tagline}</p>

                  {/* Highlight Badge */}
                  <Badge className={`mb-4 ${userType.highlightColor} border`}>
                    {userType.highlight}
                  </Badge>

                  {/* Features List - Animated on Hover */}
                  <motion.ul
                    className="space-y-2 mb-6"
                    animate={{ opacity: isHovered ? 1 : 0.8 }}
                  >
                    {userType.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: isHovered ? 4 : 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <motion.div
                          animate={{ scale: isHovered ? 1.2 : 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* CTA Button */}
                  <motion.button
                    animate={{
                      opacity: isHovered ? 1 : 0.7,
                      y: isHovered ? 0 : 4,
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 flex items-center justify-center gap-2 text-sm font-medium text-foreground group/btn transition-all"
                  >
                    {userType.cta}
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  {/* Decorative Corner Lines */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute bottom-3 right-3 w-10 h-10"
                  >
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
