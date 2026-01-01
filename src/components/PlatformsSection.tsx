import { useState, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase, Calendar, Rocket, ArrowRight, ExternalLink } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const platforms = [
  {
    id: "tender",
    name: "Exploree Tender",
    description: "Access and manage government and private tenders with our comprehensive tender management platform.",
    icon: FileText,
    status: "live",
    gradient: "from-primary via-primary/80 to-accent",
    bgGlow: "bg-primary/20",
    url: "https://tender.exploree.io",
  },
  {
    id: "jobs",
    name: "Exploree Jobs",
    description: "Find your dream career with AI-powered job matching and application tracking.",
    icon: Briefcase,
    status: "coming-soon",
    gradient: "from-emerald-500 via-emerald-400 to-teal-500",
    bgGlow: "bg-emerald-500/20",
    url: "jobs.exploree.io",
  },
  {
    id: "events",
    name: "Exploree Events",
    description: "Discover and participate in industry events, conferences, and networking opportunities.",
    icon: Calendar,
    status: "coming-soon",
    gradient: "from-orange-500 via-orange-400 to-amber-500",
    bgGlow: "bg-orange-500/20",
    url: "events.exploree.io",
  },
  {
    id: "opportunity",
    name: "Exploree Opportunity",
    description: "Explore grants, funding, partnerships, and business opportunities tailored to your profile.",
    icon: Rocket,
    status: "coming-soon",
    gradient: "from-violet-500 via-violet-400 to-purple-500",
    bgGlow: "bg-violet-500/20",
    url: "opportunity.exploree.io",
  },
];

const PlatformsSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 15]);

  const handleJoinWaitlist = (platformId: string) => {
    setSelectedPlatform(platformId);
    setIsWaitlistOpen(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section ref={sectionRef} id="platforms" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-mesh" />
        
        {/* Parallax Background Elements */}
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-[10%] right-[5%] w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full"
        />
        
        {/* Floating shapes */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -60]) }}
          className="absolute top-[15%] left-[15%] w-12 h-12 border border-primary/15 rounded-xl rotate-12"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
          className="absolute bottom-[25%] right-[12%] w-16 h-16 border-2 border-accent/10 rounded-full"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -30]) }}
          className="absolute top-[40%] right-[20%] w-8 h-8 bg-primary/5 rounded-lg rotate-45"
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
              Our Ecosystem
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Four Platforms, <span className="gradient-text">One Account</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access all our platforms with a single unified account. No more juggling multiple logins.
            </p>
          </motion.div>

          {/* Platform Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              const isLive = platform.status === "live";

              return (
                <motion.div
                  key={platform.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  style={{
                    y: useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 20 : -20, index % 2 === 0 ? -20 : 20]),
                  }}
                  className={`glass-premium rounded-3xl p-8 relative overflow-hidden group ${
                    isLive ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  {/* Background Glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full ${platform.bgGlow} blur-3xl`}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    {isLive ? (
                      <Badge className="bg-primary/10 text-primary border-primary/30 backdrop-blur-sm">
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-primary mr-2 inline-block"
                        />
                        Live
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-muted/80 text-muted-foreground backdrop-blur-sm">
                        Coming Soon
                      </Badge>
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-6 relative`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>

                  {/* CTA */}
                  {isLive ? (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" className="group/btn" asChild>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          Visit Platform
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="hero-secondary"
                        className="group/btn"
                        onClick={() => handleJoinWaitlist(platform.id)}
                      >
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.gradient} origin-left`}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <WaitlistDialog
        open={isWaitlistOpen}
        onOpenChange={setIsWaitlistOpen}
        defaultPlatform={selectedPlatform}
      />
    </>
  );
};

export default PlatformsSection;
