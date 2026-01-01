import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Users, Globe, Lock, Layers } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Single Sign-On",
    description: "One account to access all platforms. Secure, seamless, and simple authentication.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Get instant notifications about new opportunities matching your preferences.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security to protect your data and business information.",
  },
  {
    icon: Globe,
    title: "Multi-Region Support",
    description: "Access opportunities from multiple regions and expand your reach globally.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite team members and collaborate on opportunities together.",
  },
  {
    icon: Layers,
    title: "Unified Dashboard",
    description: "Monitor all your activities across platforms from a single dashboard.",
  },
];

const FeaturesSection = () => {
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
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

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
            Why Exploree
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of unified opportunity management with features designed for efficiency.
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
                className="glass-premium rounded-2xl p-6 group spotlight cursor-default"
              >
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
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
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
