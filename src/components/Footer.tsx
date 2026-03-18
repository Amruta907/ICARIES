import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-bold text-xl text-primary mb-3">IEEE 2026</h3>
          <p className="text-sm text-muted-foreground">
            International Conference on Automation and Resilient Innovative Expert System ICARIES
          </p> 
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {["Home", "Committee", "For Authors", "Program", "Venue", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="block text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              PRMITR Amravati, Maharashtra, India
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              info@IEEE.in
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 IEEE. All rights reserved. | PRMITR Badnera, India
      </div>
    </footer>
  );
};

export default Footer;
