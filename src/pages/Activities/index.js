import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from "@/hooks/useLanguage";
import { useMetaSEO } from "@/hooks/useMetaSEO";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import EnsaiosSection from "./components/EnsaiosSection";
import { useNewsItems, useUpcomingEvents, useEnsaios, } from "./data/activitiesData";
const Activities = () => {
    useMetaSEO("activities");
    const { language } = useLanguage();
    const newsItems = useNewsItems();
    const upcomingEvents = useUpcomingEvents();
    const ensaios = useEnsaios();
    return (_jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("h1", { className: "section-title text-center", children: language === "pt" ? "Atividades" : "Aktivitäten" }), _jsx(NewsSection, { newsItems: newsItems }), _jsx(EventsSection, { events: upcomingEvents }), _jsx(EnsaiosSection, { ensaios: ensaios })] }));
};
export default Activities;
