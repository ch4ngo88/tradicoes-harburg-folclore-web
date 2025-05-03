import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const DesktopNav = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="relative py-0.5 bg-seagreen text-white rounded-md mb-2 transition-all duration-300 hidden md:block">
      <div className="px-4 md:px-6 flex justify-between items-center">
        <ul className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 w-full text-center">
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
            <li key={item.path} className="md:py-1.5 py-4">
              <Link
                to={item.path}
                onClick={handleClick}
                className={`relative block md:inline-block transition-all duration-300
                          hover:text-[#ea384c] focus:text-[#ea384c]
                          focus:outline-none focus:ring-2 focus:ring-[#ea384c]/50 rounded-sm
                          group`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#ea384c] 
                              transition-all duration-300 
                              ${
                                isActive(item.path)
                                  ? "w-full"
                                  : "w-0 group-hover:w-full"
                              }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;



