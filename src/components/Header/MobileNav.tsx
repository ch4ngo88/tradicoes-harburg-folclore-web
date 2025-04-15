
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Home, LayoutGrid, Archive, Users, Mail, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "../LanguageSwitcher";

const MobileNav = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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

  return (
    <div className="md:hidden">
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
          className="bg-seagreen text-white w-64 p-0 rounded-l-2xl"
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-white/20 flex items-center justify-between">
              <span className="font-lusitana font-bold">Menu</span>
              <SheetClose className="rounded-full p-1 hover:bg-white/10 transition-colors">
                <X size={18} className="text-[#ea384c]" />
              </SheetClose>
            </div>
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
                  <SheetClose asChild>
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
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#ea384c] rounded-r-md shadow-md"></span>
                      )}
                    </Link>
                  </SheetClose>
                </li>
              ))}
              <li className="mt-auto py-6 border-t border-white/20 px-6 flex justify-center">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
