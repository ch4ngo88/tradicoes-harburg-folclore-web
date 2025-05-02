import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const EnsaiosSection = ({ ensaios }) => {
    const { language } = useLanguage();
    return (_jsxs("section", { className: "mb-12", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Users, { className: "text-portuguesered" }), _jsx("h3", { className: "text-xl font-bold text-portuguesered", children: language === "pt" ? "Ensaios" : "Proben" })] }), _jsx("p", { className: "text-gray-600 italic mb-8 text-center", children: language === "pt"
                    ? "(Pausa durante as férias de verão e inverno)"
                    : "(Pause während der Sommer- und Winterferien)" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: ensaios.map((ensaio, index) => (_jsxs("div", { className: "bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col card-hover", children: [_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("div", { className: "relative h-48 cursor-pointer", children: _jsx("img", { src: ensaio.image, alt: language === "pt"
                                                ? `Ensaio de ${ensaio.title} - ${ensaio.schedule}`
                                                : `${ensaio.title} Probe - ${ensaio.schedule}`, className: "w-full h-full object-cover" }) }) }), _jsx(DialogContent, { className: "p-0 max-w-2xl border-none", children: _jsx("img", { src: ensaio.image, alt: language === "pt"
                                            ? `Ensaio de ${ensaio.title} - ${ensaio.schedule}`
                                            : `${ensaio.title} Probe - ${ensaio.schedule}`, className: "w-full h-full max-h-[70vh] object-contain rounded-lg", loading: "lazy" }) })] }), _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "text-lg font-bold text-seagreen mb-2", children: ensaio.title }), _jsx("p", { className: "text-gray-700", children: ensaio.schedule })] })] }, index))) })] }));
};
export default EnsaiosSection;
