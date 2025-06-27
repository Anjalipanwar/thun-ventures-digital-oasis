
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { name: language === "de" ? "Startseite" : "Home", path: "/" },
    { name: language === "de" ? "Über uns" : "About", path: "/about" },
    { name: language === "de" ? "Dienstleistungen" : "Services", path: "/services" },
    { name: language === "de" ? "Pakete" : "Packages", path: "/packages" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-navy">
              Thun Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.path)
                    ? "text-electric-blue"
                    : "text-charcoal hover:text-electric-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Toggle - Always visible */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-50 rounded-full">
              <span className={`text-sm font-medium transition-colors ${language === "en" ? "text-electric-blue" : "text-charcoal/60"}`}>EN</span>
              <Switch 
                checked={language === "de"} 
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-electric-blue"
              />
              <span className={`text-sm font-medium transition-colors ${language === "de" ? "text-electric-blue" : "text-charcoal/60"}`}>DE</span>
            </div>
            
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white">
              <Link to="/contact">
                {language === "de" ? "Kostenlose Beratung" : "Get Free Consultation"}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-1">
              <span className={`text-xs font-medium ${language === "en" ? "text-electric-blue" : "text-charcoal/60"}`}>EN</span>
              <Switch 
                checked={language === "de"} 
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-electric-blue scale-75"
              />
              <span className={`text-xs font-medium ${language === "de" ? "text-electric-blue" : "text-charcoal/60"}`}>DE</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(item.path)
                      ? "text-electric-blue"
                      : "text-charcoal hover:text-electric-blue"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white self-start">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  {language === "de" ? "Kostenlose Beratung" : "Get Free Consultation"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
