"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, FileText, GraduationCap, Calendar, Sparkles, Brain } from "lucide-react";

const opportunityTypes = [
    { icon: Briefcase, label: "Looking for a job" },
    { icon: Users, label: "Hiring talent" },
    { icon: FileText, label: "Publishing or bidding on tenders" },
    { icon: GraduationCap, label: "Searching for scholarships or grants" },
    { icon: Calendar, label: "Exploring events and professional growth" },
];

const WhatIsExploreeSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section ref={sectionRef} id="what-is" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-muted/20" />
            <div className="absolute inset-0 bg-mesh opacity-30" />

            {/* Parallax Decorative Elements */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[10%] right-[5%] w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-primary border-primary/30 bg-primary/5">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI-Powered Platform
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            What Is <span className="gradient-text">Exploree ET</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Exploree ET is an <strong>AI-powered opportunity discovery platform</strong> built to help individuals and
                            organizations in Ethiopia find relevant life-changing opportunities without endless searching.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Our intelligent algorithms learn your preferences and automatically match you with jobs, tenders, events,
                            and scholarships that fit your unique profile. <span className="text-primary font-medium">You don't search — we deliver.</span>
                        </p>

                        {/* Key Highlight */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="glass-premium rounded-2xl p-6 mb-8 border-l-4 border-primary relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-2 right-2"
                            >
                                <Brain className="w-6 h-6 text-primary/40" />
                            </motion.div>
                            <p className="text-xl font-semibold text-foreground">
                                "Exploree works for you – <span className="text-primary">not the other way around.</span>"
                            </p>
                        </motion.div>

                        {/* Opportunity Types Pills */}
                        <p className="text-muted-foreground mb-4">
                            We believe access to opportunity should be simple, fair, and inclusive, whether you are:
                        </p>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {opportunityTypes.map((type, index) => {
                                const Icon = type.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium border border-border/50 text-sm font-medium cursor-default"
                                    >
                                        <Icon className="w-4 h-4 text-primary" />
                                        <span>{type.label}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right: Illustrative Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Central Hub */}
                            <motion.div
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-12 rounded-full border-2 border-dashed border-primary/20 dark:border-primary/30"
                            />
                            <motion.div
                                animate={{ scale: [1.03, 1, 1.03] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-20 rounded-full border-2 border-dashed border-accent/20 dark:border-accent/30"
                            />

                            {/* Center Logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Brain className="w-14 h-14 text-white" />
                                </motion.div>
                            </div>

                            {/* Orbiting Icons */}
                            {opportunityTypes.map((type, index) => {
                                const Icon = type.icon;
                                const angle = (index * 360) / opportunityTypes.length;
                                // Outer dashed circle uses inset-12 (3rem = 48px).
                                // For max-w-lg (~512px), radius = (512/2 - 48) / 512 * 100 ≈ 40.6%
                                const radius = 40.6;
                                const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                        whileHover={{ scale: 1.2 }}
                                        className="absolute w-16 h-16 rounded-xl glass-premium border border-border/50 dark:border-border flex items-center justify-center shadow-lg dark:shadow-xl cursor-pointer group"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap"
                                        >
                                            {type.label.split(" ").slice(0, 2).join(" ")}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsExploreeSection;
