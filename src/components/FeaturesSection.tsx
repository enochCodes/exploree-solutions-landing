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
  return (
    <section id="features" className="py-24 md:py-32 bg-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-primary border-primary/30">
            Why Exploree
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of unified opportunity management with features designed for efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
