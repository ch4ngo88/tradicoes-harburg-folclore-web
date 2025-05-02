import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMetaSEO } from "@/hooks/useMetaSEO";
import { ScrollText, Info, AlertTriangle, Copyright } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
const Agb = () => {
    useMetaSEO("agb");
    const { language } = useLanguage();
    return (_jsx("div", { className: "container mx-auto py-8 px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "section-title text-center mb-8", children: language === "pt"
                        ? "Condições Gerais de Participação"
                        : "Allgemeine Geschäftsbedingungen" }), _jsxs("div", { className: "glass-card p-8 space-y-8", children: [_jsxs("section", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(ScrollText, { className: "text-seagreen" }), _jsx("h2", { className: "text-xl font-bold text-seagreen", children: language === "pt" ? "Âmbito de Aplicação" : "Geltungsbereich" })] }), _jsx("div", { className: "pl-6 space-y-2 text-gray-700", children: _jsx("p", { children: language === "pt"
                                            ? "Estas condições aplicam-se a todas as atividades do grupo de dança Tradições Portuguesas. Somos um grupo não-comercial, sem fins lucrativos."
                                            : "Diese AGB gelten für alle Aktivitäten der Tanzgruppe Tradicoes Portuguesas. Wir sind eine nicht-kommerzielle Gruppe ohne Gewinnabsicht." }) })] }), _jsxs("section", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Info, { className: "text-seagreen" }), _jsx("h2", { className: "text-xl font-bold text-seagreen", children: language === "pt" ? "Participação" : "Teilnahme" })] }), _jsx("div", { className: "pl-6 space-y-2 text-gray-700", children: _jsx("p", { children: language === "pt"
                                            ? "A participação nos ensaios e eventos é voluntária e sob responsabilidade própria. Para cobrir custos (por exemplo, trajes, aluguer de salas), podem ser cobradas contribuições."
                                            : "Die Teilnahme an unseren Proben und Veranstaltungen erfolgt freiwillig und auf eigene Verantwortung. Zur Deckung von Kosten (z.B. für Kostüme, Raummiete) können Beiträge erhoben werden." }) })] }), _jsxs("section", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(AlertTriangle, { className: "text-seagreen" }), _jsx("h2", { className: "text-xl font-bold text-seagreen", children: language === "pt" ? "Responsabilidade" : "Haftung" })] }), _jsxs("div", { className: "pl-6 space-y-2 text-gray-700", children: [_jsx("p", { children: language === "pt"
                                                ? "A participação é por conta e risco do próprio. Não nos responsabilizamos por danos ou perdas, exceto em caso de conduta dolosa ou negligência grave."
                                                : "Die Teilnahme erfolgt auf eigene Gefahr. Für Schäden oder Verluste übernehmen wir keine Haftung, außer bei vorsätzlichem oder grob fahrlässigem Verhalten." }), _jsx("p", { children: language === "pt"
                                                ? "Não nos responsabilizamos por objetos trazidos, especialmente objetos de valor."
                                                : "Für mitgebrachte Gegenstände, insbesondere Wertgegenstände, übernehmen wir keine Haftung." })] })] }), _jsxs("section", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Copyright, { className: "text-seagreen" }), _jsx("h2", { className: "text-xl font-bold text-seagreen", children: language === "pt" ? "Direitos de Autor" : "Urheberrechte" })] }), _jsx("div", { className: "pl-6 space-y-2 text-gray-700", children: _jsx("p", { children: language === "pt"
                                            ? "Fotos e vídeos de eventos podem ser usados para documentar e apresentar o nosso grupo. Se não desejar que as gravações sejam publicadas, fale connosco com antecedência."
                                            : "Fotos und Videos von Veranstaltungen können zur Dokumentation und Präsentation unserer Gruppe genutzt werden. Sollten Sie nicht möchten, dass Aufnahmen veröffentlicht werden, sprechen Sie uns bitte im Voraus an." }) })] })] })] }) }));
};
export default Agb;
