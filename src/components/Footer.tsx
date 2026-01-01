import { FileText, Briefcase, Calendar, Rocket } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold">Exploree</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Empowering businesses with unified access to tenders, jobs, events, and opportunities.
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://tender.exploree.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm">
                  <FileText className="w-4 h-4" />
                  Exploree Tender
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-secondary-foreground/50 text-sm">
                  <Briefcase className="w-4 h-4" />
                  Exploree Jobs
                  <span className="text-xs bg-secondary-foreground/10 px-2 py-0.5 rounded">Soon</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-secondary-foreground/50 text-sm">
                  <Calendar className="w-4 h-4" />
                  Exploree Events
                  <span className="text-xs bg-secondary-foreground/10 px-2 py-0.5 rounded">Soon</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-secondary-foreground/50 text-sm">
                  <Rocket className="w-4 h-4" />
                  Exploree Opportunity
                  <span className="text-xs bg-secondary-foreground/10 px-2 py-0.5 rounded">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Exploree Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors text-sm">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
