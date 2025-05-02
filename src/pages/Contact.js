import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { ExternalLink, Mail, Phone, MapPin, Link as LinkIcon, } from "lucide-react";
import { useMetaSEO } from "@/hooks/useMetaSEO";
import Map from "@/components/map"; // ganz oben hinzufügen
const usefulLinks = [
    {
        url: "https://www.rfptv.pt/",
        icon: "images/links/MYvhCGImba3MPCwmRu2pZgGkFhy2L6tkTLsSO3LN.png",
        title: "Canal tv Digital do Folclore de Portugal",
    },
    {
        url: "https://folclore.pt/",
        icon: "images/links/cropped-portal-logo.png",
        title: "Folclore de Portugal – O Portal do Folclore Português",
    },
    {
        url: "https://www.ffp.pt/",
        icon: "images/links/logotipo.png",
        title: "Federação do Folclore Português",
    },
    {
        url: "https://www.casabrincheiro.pt/",
        icon: "images/links/Screenshot+2023-12-22+at+09.47.32-240w.webp",
        title: "Casa Brincheiro",
    },
    {
        url: "https://portaldascomunidades.mne.gov.pt/pt/",
        icon: "images/links/pdc_66x66.png",
        title: "Portal das Comunidades Portuguesas",
    },
    {
        url: "https://missao-portuguesa-hamburg.de/cms3/p/Mission/index.php",
        icon: "images/links/logotipo_missao.jpg",
        title: "Missão Católica de Língua Portuguesa de Hamburgo",
    },
    {
        url: "https://www.instagram.com/musicoportuga",
        icon: "images/links/417154003_7628155877197537_3387848453821547182_n.jpg",
        title: "Tiago Pinheiro - músico portuga de Hamburgo",
    },
    {
        url: "https://www.kulturpalast-harburg.com/",
        icon: "images/links/logokp.png",
        title: "Kultur Palast Harburg",
    },
];
const ContactForm = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = React.useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);
    return (_jsxs("div", { className: "glass-card p-6", children: [_jsx("h2", { className: "text-xl font-semibold text-seagreen mb-6", children: language === "pt"
                    ? "Envie-nos uma mensagem"
                    : "Schreiben Sie uns eine Nachricht" }), _jsxs("form", { action: "https://formsubmit.co/marco.dacio@icloud.com", method: "POST", className: "space-y-5", autoComplete: "on" // optional – unterstützt gesamtes Formular
                , children: [_jsx("input", { type: "hidden", name: "_subject", value: "Neue Nachricht \u00FCber Kontaktformular" }), _jsx("input", { type: "hidden", name: "_template", value: "table" }), _jsx("input", { type: "hidden", name: "_next", value: "https://tradicionalisboa.lovable.app/contact" }), _jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "form-label", children: language === "pt" ? "Nome" : "Name" }), _jsx(Input, { id: "name", name: "name", autoComplete: "name", value: formData.name, onChange: handleChange, required: true, className: "form-input", placeholder: language === "pt" ? "Seu nome" : "Ihr Name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "form-label", children: language === "pt" ? "Email" : "E-Mail" }), _jsx(Input, { id: "email", name: "email", type: "email", autoComplete: "email", value: formData.email, onChange: handleChange, required: true, className: "form-input", placeholder: language === "pt" ? "Seu email" : "Ihre E-Mail" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "form-label", children: language === "pt" ? "Assunto" : "Betreff" }), _jsx(Input, { id: "subject", name: "subject", autoComplete: "off" // bewusst deaktivieren
                                , value: formData.subject, onChange: handleChange, required: true, className: "form-input", placeholder: language === "pt"
                                    ? "Assunto da mensagem"
                                    : "Betreff der Nachricht" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "form-label", children: language === "pt" ? "Mensagem" : "Nachricht" }), _jsx(Textarea, { id: "message", name: "message", autoComplete: "off" // bewusst deaktivieren
                                , value: formData.message, onChange: handleChange, rows: 4, required: true, className: "form-input", placeholder: language === "pt" ? "Sua mensagem" : "Ihre Nachricht" })] }), _jsx(Button, { type: "submit", className: "w-full bg-seagreen hover:bg-seagreen/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg", children: language === "pt" ? "Enviar" : "Senden" }), _jsx("p", { className: "text-xs text-gray-500 text-center", children: language === "pt"
                            ? "Este site é protegido por FormSubmit e aplicam-se a Política de Privacidade e os Termos de Serviço."
                            : "Diese Website wird durch FormSubmit geschützt und es gelten die Datenschutzbestimmungen und Nutzungsbedingungen." })] })] }));
};
const ContactPage = React.memo(() => {
    useMetaSEO("contact");
    const { language } = useLanguage();
    return (_jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("h1", { className: "section-title text-center mb-10", children: language === "pt" ? "Contacto" : "Kontakt" }), _jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10", children: [_jsxs("div", { className: "flex flex-col gap-6 h-full", children: [_jsxs("div", { className: "glass-card p-6 hover:shadow-lg transition-all duration-300 flex-grow", children: [_jsxs("div", { className: "flex gap-2 items-center mb-6", children: [_jsx(Mail, { className: "text-seagreen w-6 h-6" }), _jsx("h3", { className: "text-xl font-bold text-seagreen", children: "Tradicoes Portuguesas" })] }), _jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-6 text-gray-700 items-start", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("p", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "w-5 h-5 text-seagreen flex-shrink-0" }), _jsx("span", { children: "Hastedtstra\u00DFe 30, 21073 Hamburg" })] }), _jsxs("p", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "w-5 h-5 text-seagreen flex-shrink-0" }), _jsx("a", { href: "mailto:g.c.r.f.p@hotmail.com", className: "hover:text-seagreen transition-colors duration-300", children: "g.c.r.f.p@hotmail.com" })] }), _jsxs("p", { className: "flex items-center gap-3", children: [_jsx(Phone, { className: "w-5 h-5 text-seagreen flex-shrink-0" }), _jsx("span", { children: "+49 (0) 157 316 250 61" })] })] }), _jsx("div", { className: "flex-shrink-0", children: _jsx("img", { src: "/images/QR Code.jpeg", alt: "QR Code", className: "h-32 rounded-lg shadow-md hover:shadow-lg transition-shadow" }) })] })] }), _jsx("div", { className: "glass-card overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex-grow", children: _jsx(Map, {}) })] }), _jsx("div", { children: _jsx(ContactForm, {}) })] }), _jsx("div", { className: "mb-8", children: _jsx(Accordion, { type: "single", collapsible: true, className: "accordion-custom", children: _jsxs(AccordionItem, { value: "useful-links", className: "border-none", children: [_jsx(AccordionTrigger, { className: "accordion-trigger", children: _jsxs("div", { className: "flex gap-2 items-center", children: [_jsx(LinkIcon, { className: "text-seagreen" }), _jsx("span", { children: language === "pt" ? "Links Úteis" : "Nützliche Links" })] }) }), _jsx(AccordionContent, { className: "px-6 pb-4", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: usefulLinks.map((link, index) => (_jsxs("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center p-3 rounded-md hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-seagreen/30 group hover:shadow-md", children: [_jsx("img", { src: link.icon, alt: link.title, className: "w-6 h-6 mr-3 object-contain" }), _jsx("span", { className: "flex-1 text-sm", children: link.title }), _jsx(ExternalLink, { className: "w-4 h-4 text-gray-400 group-hover:text-seagreen transition-colors" })] }, index))) }) })] }) }) })] }));
});
ContactPage.displayName = "ContactPage";
export default ContactPage;
