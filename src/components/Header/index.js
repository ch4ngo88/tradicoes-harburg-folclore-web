import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (_jsx("header", { className: `w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"}`, children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between py-2", children: [_jsx("div", { className: "flex-1 md:flex-initial", children: _jsx(Logo, { scrollToTop: scrollToTop }) }), _jsxs("div", { className: "flex items-center gap-3 z-20", children: [_jsx(MobileNav, {}), _jsx("div", { className: "hidden md:block", children: _jsx(LanguageSwitcher, {}) })] })] }), _jsx("div", { className: `${isScrolled ? "bg-seagreen/95 backdrop-blur-sm" : "bg-seagreen"} text-white rounded-md mb-2 transition-all duration-300 hidden md:block`, children: _jsx(DesktopNav, {}) })] }) }));
};
export default Header;
