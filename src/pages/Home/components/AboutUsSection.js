import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { CallToActionButtons } from "@/components/CallToActionButtons";
const AboutUsSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100");
                    entry.target.classList.remove("opacity-0", "translate-y-4");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (_jsx("div", { ref: sectionRef, className: "container mx-auto py-12 px-4 transition-all duration-500 opacity-0 translate-y-4", children: _jsxs("div", { className: "glass-card p-8 max-w-4xl mx-auto", children: [_jsx("h2", { className: "section-title mb-8 font-lusitana", children: t("aboutUs") }), _jsxs("article", { className: "prose max-w-none text-justify text-gray-700 space-y-6 font-lusitana", children: [_jsx("p", { className: "font-bold text-lg", children: t("welcome") }), _jsx("p", { children: t("intro") }), _jsx("p", { className: "italic text-gray-600", children: t("storyIntro") }), _jsx("div", { className: "rounded-lg overflow-hidden shadow-lg my-8 max-w-2xl mx-auto", style: { maxHeight: "400px" }, children: _jsx("video", { src: "/images/offen.mp4", controls: true, poster: "/images/offen.jpeg", className: "w-full rounded-md", style: { maxHeight: "400px", objectFit: "cover" }, preload: "metadata", children: "Your browser cannot play this video" }) }), _jsxs("div", { className: "bg-cream p-6 rounded-xl border-l-4 border-seagreen shadow-md my-8", children: [_jsx("h3", { className: "text-xl font-bold text-seagreen mb-3 font-lusitana", children: t("generations") }), _jsx("p", { children: t("generationsText") })] }), _jsxs("div", { className: "bg-cream p-6 rounded-xl border-l-4 border-portuguesered shadow-md my-8", children: [_jsx("h3", { className: "text-xl font-bold text-portuguesered mb-3 font-lusitana", children: t("variety") }), _jsx("p", { children: t("varietyText") })] }), _jsxs("div", { className: "bg-cream p-6 rounded-xl border-l-4 border-seagreen shadow-md my-8", children: [_jsx("h3", { className: "text-xl font-bold text-seagreen mb-3 font-lusitana", children: t("timeTravel") }), _jsx("p", { children: t("timeTravelText") })] }), _jsxs("div", { className: "bg-lightgold/20 p-6 rounded-xl shadow-md", children: [_jsx("h3", { className: "text-xl font-bold text-portuguesered mb-3 font-lusitana", children: t("joinUs") }), _jsx("p", { className: "mb-6", children: t("joinUsText") }), _jsx(CallToActionButtons, {}), _jsx("p", { className: "font-bold mt-6 text-center", children: t("finalMessage") })] })] })] }) }));
};
export default AboutUsSection;
