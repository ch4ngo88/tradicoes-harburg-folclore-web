import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Home, LayoutGrid, Archive, Users, Mail, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "../LanguageSwitcher";
const MobileNav = () => {
    const { t, language } = useLanguage();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    // Updated handleClick function to scroll to the very top of the page
    const handleClick = () => {
        // Using scrollTo with top: 0 and behavior: 'instant' to ensure immediate scrolling to the top
        window.scrollTo({ top: 0, behavior: "instant" });
    };
    const getNavIcon = (path) => {
        switch (path) {
            case "/":
                return _jsx(Home, { size: 18, className: "mr-3" });
            case "/activities":
                return _jsx(LayoutGrid, { size: 18, className: "mr-3" });
            case "/archive":
                return _jsx(Archive, { size: 18, className: "mr-3" });
            case "/membros":
                return _jsx(Users, { size: 18, className: "mr-3" });
            case "/contact":
                return _jsx(Mail, { size: 18, className: "mr-3" });
            default:
                return null;
        }
    };
    return (_jsx("div", { className: "md:hidden z-30", children: _jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx("button", { className: "flex items-center justify-center p-2 rounded-md border border-seagreen/30 hover:bg-seagreen/10 transition-colors text-seagreen focus:ring-2 focus:ring-seagreen focus:ring-offset-2 min-h-[44px] min-w-[44px]", "aria-label": "\u00D6ffne Hauptmen\u00FC", children: _jsx(Menu, { size: 22 }) }) }), _jsx(SheetContent, { side: "right", className: "bg-seagreen text-white w-64 p-0 rounded-l-2xl", children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsxs("div", { className: "p-4 border-b border-white/20 flex items-center justify-between", children: [_jsx("span", { className: "font-lusitana font-bold", children: "Menu" }), _jsxs(SheetClose, { className: "rounded-full flex items-center justify-center p-2 hover:bg-white/20 transition-colors focus:ring-2 focus:ring-white/50 focus:outline-none min-h-[40px] min-w-[40px]", children: [_jsx(X, { size: 20, className: "text-white", "aria-hidden": "true" }), _jsx("span", { className: "sr-only", children: "Men\u00FC schlie\u00DFen" })] })] }), _jsxs("ul", { className: "flex flex-col w-full text-center pt-4", children: [[
                                        { path: "/", label: t("home") },
                                        { path: "/activities", label: t("activities") },
                                        { path: "/archive", label: t("archive") },
                                        {
                                            path: "/membros",
                                            label: language === "de" ? "Mitglieder" : "Membros",
                                        },
                                        { path: "/contact", label: t("contact") },
                                    ].map((item) => (_jsx("li", { className: "py-3 relative", children: _jsx(SheetClose, { asChild: true, children: _jsxs(Link, { to: item.path, onClick: handleClick, className: `flex items-center px-6 py-2 rounded-lg transition-all ${isActive(item.path)
                                                    ? "bg-white/10 font-bold text-white"
                                                    : "hover:bg-white/5"}`, children: [getNavIcon(item.path), item.label, isActive(item.path) && (_jsx("span", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#ea384c] rounded-r-md shadow-md" }))] }) }) }, item.path))), _jsx("li", { className: "mt-auto py-6 border-t border-white/20 px-6 flex justify-center", children: _jsx(LanguageSwitcher, {}) })] })] }) })] }) }));
};
export default MobileNav;
