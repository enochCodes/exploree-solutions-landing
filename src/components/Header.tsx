import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">Exploree</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#platforms" className="text-muted-foreground hover:text-foreground transition-colors">
                Platforms
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" asChild>
                <a href="https://tender.exploree.io" target="_blank" rel="noopener noreferrer">
                  Go to Tender
                </a>
              </Button>
              <Button variant="hero" onClick={() => setIsWaitlistOpen(true)}>
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50">
              <nav className="flex flex-col gap-4">
                <a href="#platforms" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  Platforms
                </a>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  Features
                </a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  About
                </a>
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="ghost" asChild>
                    <a href="https://tender.exploree.io" target="_blank" rel="noopener noreferrer">
                      Go to Tender
                    </a>
                  </Button>
                  <Button variant="hero" onClick={() => setIsWaitlistOpen(true)}>
                    Join Waitlist
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};

export default Header;
