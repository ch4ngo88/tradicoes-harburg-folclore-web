import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Info } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import NewsItem from "./NewsItem";
const NewsSection = ({ newsItems }) => {
    const { t } = useLanguage();
    return (_jsxs("section", { className: "mb-12 mt-8", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-6", children: [_jsx(Info, { className: "text-portuguesered" }), _jsx("h3", { className: "text-xl font-bold text-portuguesered", children: t("news") })] }), _jsx("div", { className: "grid grid-cols-3 gap-3 max-w-xl mx-auto", children: newsItems.map((item, index) => (_jsx(NewsItem, { item: item, index: index }, index))) })] }));
};
export default NewsSection;
