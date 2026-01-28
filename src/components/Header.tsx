import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Projects", 
    href: "/projects",
    subItems: [
      { label: "Commercial Plots", href: "/projects/commercial-plots" },
      { label: "Commercial Shops", href: "/projects/commercial-shops" },
      { label: "Corporate Plots", href: "/projects/corporate-plots" },
      { label: "Residential Flats", href: "/projects/residential-flats" },
      { label: "Plots in Noida", href: "/projects/plots-in-noida" },
      { label: "Plots in Vrindavan", href: "/projects/plots-in-vrindavan" },
      { label: "Jewar Airport Land", href: "/projects/jewar-airport-land" },
      { label: "Industrial Plots", href: "/projects/industrial-plots" },
      { label: "Institutional Plots", href: "/projects/institutional-plots" },
      { label: "Logistics Park Land", href: "/projects/logistics-park-land" },
      { label: "Medical Devices Park", href: "/projects/medical-devices-park" },
      { label: "Residential Plots", href: "/projects/residential-plots" },
      { label: "Land for Hotel", href: "/projects/land-for-hotel" },
      { label: "Raya Heritage City", href: "/projects/raya-heritage-city" },
      { label: "Master Plan", href: "/projects/master-plan" },
    ]
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
    setMobileMenuOpen(false);
    setProjectsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
              Nexa Realty<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <button
                    className={`flex items-center gap-1 text-base lg:text-lg font-medium transition-colors relative ${
                      isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </button>
                ) : item.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-base lg:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-base lg:text-lg font-medium transition-colors relative ${
                      isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                )}

                {/* Dropdown */}
                {item.subItems && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[280px] max-h-[280px] overflow-y-auto">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="lg" 
              onClick={() => handleNavClick("/#contact")}
            >
              Schedule a Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setProjectsOpen(!projectsOpen)}
                        className="flex items-center justify-between w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {projectsOpen && (
                        <div className="pl-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 w-full"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button 
                size="lg" 
                className="mt-2"
                onClick={() => handleNavClick("/#contact")}
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
