import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Home, LayoutGrid, Archive, Users, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 w-full text-center">
      <li className="md:py-1.5 py-4 relative group">
        <Link
          to="/"
          className={`block md:inline-block hover:text-portuguesered transition-colors ${
            isActive("/") ? "font-bold relative" : ""
          }`}
        >
          {t("home")}
          {isActive("/") && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li className="md:py-1.5 py-4 relative group">
        <Link
          to="/activities"
          className={`block md:inline-block hover:text-portuguesered transition-colors ${
            isActive("/activities") ? "font-bold relative" : ""
          }`}
        >
          {t("activities")}
          {isActive("/activities") && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li className="md:py-1.5 py-4 relative group">
        <Link
          to="/archive"
          className={`block md:inline-block hover:text-portuguesered transition-colors ${
            isActive("/archive") ? "font-bold relative" : ""
          }`}
        >
          {t("archive")}
          {isActive("/archive") && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li className="md:py-1.5 py-4 relative group">
        <Link
          to="/membros"
          className={`block md:inline-block hover:text-portuguesered transition-colors ${
            isActive("/membros") ? "font-bold relative" : ""
          }`}
        >
          {language === "de" ? "Mitglieder" : "Membros"}
          {isActive("/membros") && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li className="md:py-1.5 py-4 relative group">
        <Link
          to="/contact"
          className={`block md:inline-block hover:text-portuguesered transition-colors ${
            isActive("/contact") ? "font-bold relative" : ""
          }`}
        >
          {t("contact")}
          {isActive("/contact") && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portuguesered"></span>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portuguesered transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    </ul>
  );

  // Nav icons for mobile
  const getNavIcon = (path: string) => {
    switch (path) {
      case "/":
        return <Home size={18} className="mr-3" />;
      case "/activities":
        return <LayoutGrid size={18} className="mr-3" />;
      case "/archive":
        return <Archive size={18} className="mr-3" />;
      case "/membros":
        return <Users size={18} className="mr-3" />;
      case "/contact":
        return <Mail size={18} className="mr-3" />;
      default:
        return null;
    }
  };

  // Mobile nav with icons
  const MobileNavLinks = () => (
    <ul className="flex flex-col w-full text-center pt-4">
      {[
        { path: "/", label: t("home") },
        { path: "/activities", label: t("activities") },
        { path: "/archive", label: t("archive") },
        {
          path: "/membros",
          label: language === "de" ? "Mitglieder" : "Membros",
        },
        { path: "/contact", label: t("contact") },
      ].map((item) => (
        <li key={item.path} className="py-3 relative">
          <Link
            to={item.path}
            className={`flex items-center px-6 py-2 rounded-lg transition-all ${
              isActive(item.path)
                ? "bg-white/10 font-bold text-white"
                : "hover:bg-white/5"
            }`}
          >
            {getNavIcon(item.path)}
            {item.label}
            {isActive(item.path) && (
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-r-md"></span>
            )}
          </Link>
        </li>
      ))}
      <li className="mt-auto py-6 border-t border-white/10 px-6 flex justify-center">
        <LanguageSwitcher />
      </li>
    </ul>
  );

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"}`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 px-4 gap-2">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src="/images/logo.jpg"
              alt="Rancho logo"
              className="w-12 h-12 object-cover"
              width={48}
              height={48}
            />
            <div className="text-center md:text-left">
              <span className="text-portuguesered text-sm font-medium block">
                Rancho Folclórico
              </span>
              <h1 className="text-lg font-bold text-seagreen leading-tight font-lusitana">
                Tradições Portuguesas
              </h1>
              <span className="text-xs text-gray-600 italic block">
                {language === "pt"
                  ? "Preservando a cultura portuguesa em Hamburgo desde 1979"
                  : "Bewahrung der portugiesischen Kultur in Hamburg seit 1979"}
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-2 items-end">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`relative py-0.5 ${isScrolled ? "bg-seagreen/95 backdrop-blur-sm" : "bg-seagreen"} text-white rounded-md mb-2 transition-all duration-300 hidden md:block`}
        >
          <div className="px-4 md:px-6 flex justify-between items-center">
            <NavLinks />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center px-4 py-2">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-1.5 rounded-md border border-seagreen/30 hover:bg-seagreen/10 transition-colors text-seagreen"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-seagreen text-white w-64 p-0"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <span className="font-lusitana font-bold">Menu</span>
                  <SheetClose className="rounded-full p-1 hover:bg-white/10 transition-colors">
                    <X size={18} />
                  </SheetClose>
                </div>
                <MobileNavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
