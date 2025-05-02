import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, } from "@/components/ui/dialog";
import OptimizedImage from "@/components/OptimizedImage";
import PreloadLink from "@/components/PreloadLink";
const HeroSection = ({ language }) => {
    const heroRef = useRef(null);
    // Define image path - using only the JPG version which we know exists
    const heroImageSrc = "/images/gruppe.jpg";
    useEffect(() => {
        const heroElement = heroRef.current;
        if (!heroElement)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-on-screen");
                    observer.unobserve(entry.target); // Stop observing after animating
                }
            });
        }, {
            threshold: 0.2, // Trigger when 20% of the element is visible
        });
        // Observe all elements with the class 'animate-on-load' inside the hero
        heroElement.querySelectorAll(".animate-on-load").forEach((element) => {
            observer.observe(element);
        });
        // Simple parallax effect on the hero image
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (heroElement) {
                heroElement.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect(); // Clean up the observer
        };
    }, []);
    return (_jsxs("div", { ref: heroRef, className: "relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "hero-overlay absolute inset-0", children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-seagreen/40 to-portuguesered/40 opacity-90 mix-blend-multiply" }) }), _jsxs("div", { className: "relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8", children: [_jsx("div", { className: "animate-on-load md:w-2/5 w-full flex justify-center md:justify-end", children: _jsx("div", { className: "relative hero-stagger-1", children: _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs("button", { className: "relative cursor-pointer", "aria-label": language === "pt"
                                                ? "Ampliar imagem do grupo"
                                                : "Gruppenbild vergrößern", children: [_jsx("div", { className: "absolute -top-3 -left-3 w-full h-full border-2 border-white/30 rounded-lg", "aria-hidden": "true" }), _jsx(OptimizedImage, { src: heroImageSrc, alt: "Group photo", className: "w-64 h-48 object-cover shadow-xl rounded-lg border border-white/40 transition-all duration-300 hover:shadow-lg hover:brightness-110", loading: "eager", preload: true }), _jsx("div", { className: "absolute -bottom-3 -right-3 w-full h-full border-2 border-white/30 rounded-lg", "aria-hidden": "true" })] }) }), _jsxs(DialogContent, { className: "p-0 max-w-4xl border-none", children: [_jsx(DialogTitle, { className: "sr-only", children: language === "pt" ? "Foto do grupo" : "Gruppenfoto" }), _jsx(DialogDescription, { className: "sr-only", children: language === "pt"
                                                    ? "Imagem ampliada do grupo"
                                                    : "Vergrößertes Gruppenbild" }), _jsx(OptimizedImage, { src: heroImageSrc, alt: "Group photo", className: "w-full h-full object-contain rounded-lg", loading: "lazy", preload: false })] })] }) }) }), _jsxs("div", { className: "md:w-3/5 text-center md:text-left text-white space-y-4", children: [_jsx("h2", { className: "hero-stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold font-lusitana leading-tight", children: language === "pt"
                                    ? "Tradições Portuguesas"
                                    : "Portugiesische Traditionen" }), _jsx("p", { className: "hero-stagger-2 text-xl md:text-2xl opacity-90 font-lusitana max-w-xl italic", children: language === "pt" ? (_jsxs(_Fragment, { children: ["Preservando a cultura portuguesa em Hamburgo", _jsx("br", {}), "desde 1979"] })) : (_jsxs(_Fragment, { children: ["Bewahrung der portugiesischen Kultur in Hamburg", _jsx("br", {}), "seit 1979"] })) }), _jsx("div", { className: "hero-stagger-3 pt-4", children: _jsxs(PreloadLink, { to: "/activities", className: "px-6 py-3 bg-seagreen text-white rounded-lg shadow-md transition-all duration-300 inline-flex items-center gap-2 group font-lusitana hover:shadow-lg hover:scale-[1.02]", preloadResources: [
                                        {
                                            href: "/images/activity/ensaios/ensaioadultos.png",
                                            as: "image",
                                        },
                                        {
                                            href: "/images/activity/ensaios/ensaiocriancas.png",
                                            as: "image",
                                        },
                                    ], onlyPrefetchOnHover: true, children: [language === "pt" ? "Descobrir Mais" : "Mehr Entdecken", _jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })] }) })] })] }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f9f9f9] to-transparent" })] }));
};
export default HeroSection;
