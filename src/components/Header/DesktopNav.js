import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
const DesktopNav = () => {
    const { t, language } = useLanguage();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsx("nav", { className: "relative py-0.5 bg-seagreen text-white rounded-md mb-2 transition-all duration-300 hidden md:block", children: _jsx("div", { className: "px-4 md:px-6 flex justify-between items-center", children: _jsx("ul", { className: "flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 w-full text-center", children: [
                    { path: "/", label: t("home") },
                    { path: "/activities", label: t("activities") },
                    { path: "/archive", label: t("archive") },
                    {
                        path: "/membros",
                        label: language === "de" ? "Mitglieder" : "Membros",
                    },
                    { path: "/contact", label: t("contact") },
                ].map((item) => (_jsx("li", { className: "md:py-1.5 py-4", children: _jsxs(Link, { to: item.path, onClick: handleClick, className: `relative block md:inline-block transition-all duration-300
                          hover:text-[#ea384c] focus:text-[#ea384c]
                          focus:outline-none focus:ring-2 focus:ring-[#ea384c]/50 rounded-sm
                          group`, children: [item.label, _jsx("span", { className: `absolute bottom-0 left-0 h-0.5 bg-[#ea384c] 
                              transition-all duration-300 
                              ${isActive(item.path)
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"}` })] }) }, item.path))) }) }) }));
};
export default DesktopNav;
