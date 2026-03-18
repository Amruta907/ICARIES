import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavHashLink } from "react-router-hash-link"; // Import this

const navLinks = [
  { label: "HOME", href: "/#home" },
  {
    label: "ABOUT",
    href: "/#about", // This will be the default link if clicked directly
    isDropdown: true,
    children: [
        { label: "Our Institute", href: "/#about" }, // Links to the AboutSection
        { label: "Our City", href: "/#city" }, // Assuming you'll have a section with id="city"
    ]
  },
  { label: "COMMITTEE", href: "/committee" },
  { label: "FOR AUTHORS", href: "/author-guidelines" },
  { label: "PROGRAM", href: "/#program" },
  { label: "VENUE", href: "/#about" },
  // { label: "SPONSORSHIP", href: "/#sponsors" },
  { label: "CONTACT", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Helper to ensure it scrolls to top if the ID is 'home'
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your Navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  // We no longer need the manual 'handleClick' function! 
  // NavHashLink handles the logic now.

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-8xl mx-auto px-4 flex items-center justify-between h-16">
        <NavHashLink smooth to="/#home" className="text-3xl font-heading font-bold text-primary">
          ICARIES
        </NavHashLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <NavHashLink
              key={link.label}
              smooth // This enables the smooth scrolling
              to={link.href}
              className="nav-link text-xs tracking-wide hover:text-cyan-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavHashLink>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <NavHashLink
              key={link.label}
              smooth
              to={link.href}
              className="block nav-link py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavHashLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
