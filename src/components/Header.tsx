import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-wkeel-bg/80 backdrop-blur-md border-b border-wkeel-line' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-wkeel-text tracking-tight">
              WKEEL
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#platform" className="text-wkeel-dim hover:text-wkeel-text transition-colors font-medium">
              Platform
            </a>
            <a href="#security" className="text-wkeel-dim hover:text-wkeel-text transition-colors font-medium">
              Security
            </a>
            <a href="#solutions" className="text-wkeel-dim hover:text-wkeel-text transition-colors font-medium">
              Solutions
            </a>
            <a href="#pricing" className="text-wkeel-dim hover:text-wkeel-text transition-colors font-medium">
              Pricing
            </a>
            <a href="#resources" className="text-wkeel-dim hover:text-wkeel-text transition-colors font-medium">
              Resources
            </a>
            <a href="#contact" className="text-wkeel-dim hover:text-wkeel-text transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            <Button variant="text" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Request Demo
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;