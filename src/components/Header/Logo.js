import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from "@/hooks/useLanguage";
import { useIsMobile } from "@/hooks/use-mobile";
const Logo = ({ scrollToTop }) => {
    const { language } = useLanguage();
    const isMobile = useIsMobile();
    return (_jsxs("div", { className: "flex items-center md:gap-3 cursor-pointer", onClick: scrollToTop, children: [_jsx("img", { src: "/logo.png", alt: "Rancho Folcl\u00F3rico Tradi\u00E7\u00F5es Portuguesas - Offizielles Logo der portugiesischen Tanzgruppe in Hamburg", className: "w-12 h-12 object-cover", width: 48, height: 48 }), _jsxs("div", { className: `${isMobile ? "text-center flex-1" : "text-left"}`, children: [_jsx("span", { className: "text-portuguesered text-sm font-medium block", children: "Rancho Folcl\u00F3rico" }), _jsx("h1", { className: "text-lg font-bold text-seagreen leading-tight font-lusitana", children: "Tradi\u00E7\u00F5es Portuguesas" }), _jsx("span", { className: "text-xs text-gray-600 italic block", children: language === "pt"
                            ? "Preservando a cultura portuguesa em Hamburgo desde 1979"
                            : "Bewahrung der portugiesischen Kultur in Hamburg seit 1979" })] })] }));
};
export default Logo;
