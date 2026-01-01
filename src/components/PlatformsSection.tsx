import { useState } from "react";
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
    color: "from-primary to-accent",
    url: "https://tender.exploree.io",
  },
  {
    id: "jobs",
    name: "Exploree Jobs",
    description: "Find your dream career with AI-powered job matching and application tracking.",
    icon: Briefcase,
    status: "coming-soon",
    color: "from-emerald-500 to-teal-500",
    url: "jobs.exploree.io",
  },
  {
    id: "events",
    name: "Exploree Events",
    description: "Discover and participate in industry events, conferences, and networking opportunities.",
    icon: Calendar,
    status: "coming-soon",
    color: "from-orange-500 to-amber-500",
    url: "events.exploree.io",
  },
  {
    id: "opportunity",
    name: "Exploree Opportunity",
    description: "Explore grants, funding, partnerships, and business opportunities tailored to your profile.",
    icon: Rocket,
    status: "coming-soon",
    color: "from-violet-500 to-purple-500",
    url: "opportunity.exploree.io",
  },
];

const PlatformsSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handleJoinWaitlist = (platformId: string) => {
    setSelectedPlatform(platformId);
    setIsWaitlistOpen(true);
  };

  return (
    <>
      <section id="platforms" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-primary border-primary/30">
              Our Ecosystem
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Four Platforms, <span className="gradient-text">One Account</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access all our platforms with a single unified account. No more juggling multiple logins.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              const isLive = platform.status === "live";

              return (
                <div
                  key={platform.id}
                  className={`glass-card-hover rounded-2xl p-8 relative overflow-hidden ${
                    isLive ? "ring-2 ring-primary/20" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    {isLive ? (
                      <Badge className="bg-primary/10 text-primary border-primary/30">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                        Live
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        Coming Soon
                      </Badge>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>

                  {/* CTA */}
                  {isLive ? (
                    <Button variant="hero" className="group" asChild>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        Visit Platform
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="hero-secondary"
                      className="group"
                      onClick={() => handleJoinWaitlist(platform.id)}
                    >
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  )}

                  {/* Decorative Element */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${platform.color} opacity-10 blur-2xl`} />
                </div>
              );
            })}
          </div>
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
