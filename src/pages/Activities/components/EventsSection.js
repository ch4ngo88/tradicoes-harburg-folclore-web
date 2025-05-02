import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import EventCard from "./EventCard";
const EventsSection = ({ events }) => {
    const { t } = useLanguage();
    return (_jsxs("section", { className: "mb-12", children: [_jsxs("div", { className: "flex items-center gap-2 mb-8", children: [_jsx(Calendar, { className: "text-seagreen" }), _jsx("h3", { className: "text-xl font-bold text-seagreen", children: t("upcomingActivities") })] }), _jsx("div", { className: "space-y-6", children: events.map((event) => (_jsx(EventCard, { event: event }, event.id))) })] }));
};
export default EventsSection;
