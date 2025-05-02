import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from "@/hooks/useLanguage";
import NavigationTabs from "./NavigationTabs";
const ArchiveLayout = ({ children, activeTab, setActiveTab, }) => {
    const { language } = useLanguage();
    return (_jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h1", { className: "section-title mb-0", children: language === "pt" ? "Arquivo" : "Archiv" }), _jsx(NavigationTabs, { activeTab: activeTab, setActiveTab: setActiveTab })] }), children] }));
};
export default ArchiveLayout;
