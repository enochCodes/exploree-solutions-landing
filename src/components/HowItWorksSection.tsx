import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Bell, Smartphone } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        step: "1",
        title: "Create Your Profile",
        subtitle: "(One Time)",
        description: "Tell us what opportunities you want (jobs, tenders, events), your interests and preferences, and your skills or business focus.",
        highlight: "One profile powers everything – no repeated searching.",
    },
    {
        icon: Bell,
        step: "2",
        title: "Smart Alerts That Match You",
        subtitle: "",
        description: "Exploree continuously scans new listings and sends you real-time alerts, personalized notifications, and deadline reminders.",
        highlight: "Only opportunities relevant to you – no noise.",
    },
    {
        icon: Smartphone,
        step: "3",
        title: "Access Opportunities Anywhere",
        subtitle: "",
        description: "Mobile-friendly access, digital bid documents, and notifications via app, email, or Telegram.",
        highlight: "Opportunities reach you wherever you are.",
    },
];

const HowItWorksSection = () => {
    const sectionRef = useRef(null);
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
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
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
        <section ref={sectionRef} id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <div className="absolute inset-0 bg-mesh opacity-40" />

            {/* Parallax Orbs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[15%] left-[10%] w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[15%] right-[10%] w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"
            />

            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-1 z-0">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="w-full h-[2px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 origin-left"
                />
            </div>

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
                        How It Works
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Three Simple <span className="gradient-text">Steps</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get started in minutes and let Exploree do the searching for you.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative"
                            >
                                {/* Card */}
                                <div className="glass-premium rounded-3xl p-8 h-full relative overflow-hidden group">
                                    {/* Hover Glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />

                                    {/* Step Number Badge */}
                                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-lg font-bold text-primary">{step.step}</span>
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 relative overflow-hidden"
                                    >
                                        <Icon className="w-8 h-8 text-primary relative z-10" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors relative z-10">
                                        {step.title}
                                    </h3>
                                    {step.subtitle && (
                                        <p className="text-sm text-primary font-medium mb-4">{step.subtitle}</p>
                                    )}
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                                        {step.description}
                                    </p>

                                    {/* Highlight Box */}
                                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 relative z-10">
                                        <p className="text-sm font-medium text-foreground">{step.highlight}</p>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-primary/20 rounded-br-xl" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
