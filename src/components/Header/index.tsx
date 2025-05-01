
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex-1 md:flex-initial">
            <Logo scrollToTop={scrollToTop} />
          </div>

          <div className="flex items-center gap-3 z-20">
            {/* Mobile Navigation */}
            <MobileNav />
            
            {/* Language switcher (desktop only) */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={`${isScrolled ? "bg-seagreen/95 backdrop-blur-sm" : "bg-seagreen"} text-white rounded-md mb-2 transition-all duration-300 hidden md:block`}>
          <DesktopNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
