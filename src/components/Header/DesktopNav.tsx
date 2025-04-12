
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const DesktopNav = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative py-0.5 bg-seagreen text-white rounded-md mb-2 transition-all duration-300 hidden md:block">
      <div className="px-4 md:px-6 flex justify-between items-center">
        <ul className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 w-full text-center">
        <li className="md:py-1.5 py-4 group">
  <Link
    to="/"
    className={`relative block md:inline-block hover:text-[#ea384c] transition-colors ${
      isActive("/") ? "font-bold" : ""
    }`}
  >
    {t("home")}
    {isActive("/") && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea384c]"></span>
    )}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea384c] transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>

<li className="md:py-1.5 py-4 group">
  <Link
    to="/activities"
    className={`relative block md:inline-block hover:text-[#ea384c] transition-colors ${
      isActive("/activities") ? "font-bold" : ""
    }`}
  >
    {t("activities")}
    {isActive("/activities") && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea384c]"></span>
    )}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea384c] transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>
<li className="md:py-1.5 py-4 group">
  <Link
    to="/archive"
    className={`relative block md:inline-block hover:text-[#ea384c] transition-colors ${
      isActive("/archive") ? "font-bold" : ""
    }`}
  >
    {t("archive")}
    {isActive("/archive") && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea384c]"></span>
    )}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea384c] transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>
<li className="md:py-1.5 py-4 group">
  <Link
    to="/membros"
    className={`relative block md:inline-block hover:text-[#ea384c] transition-colors ${
      isActive("/membros") ? "font-bold" : ""
    }`}
  >
    {language === "de" ? "Mitglieder" : "Membros"}
    {isActive("/membros") && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea384c]"></span>
    )}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea384c] transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>

<li className="md:py-1.5 py-4 group">
  <Link
    to="/contact"
    className={`relative block md:inline-block hover:text-[#ea384c] transition-colors ${
      isActive("/contact") ? "font-bold" : ""
    }`}
  >
    {t("contact")}
    {isActive("/contact") && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea384c]"></span>
    )}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea384c] transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
