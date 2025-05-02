import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from "@/hooks/useLanguage";
const NavigationTabs = ({ activeTab, setActiveTab }) => {
    const { t } = useLanguage();
    return (_jsxs("div", { className: "inline-flex rounded-md bg-gray-100 p-1", children: [_jsx("button", { onClick: () => setActiveTab("photos"), className: `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${activeTab === "photos"
                    ? "bg-white shadow-sm text-seagreen"
                    : "text-gray-600 hover:text-seagreen"}`, children: t("photos") }), _jsx("button", { onClick: () => setActiveTab("audio"), className: `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${activeTab === "audio"
                    ? "bg-white shadow-sm text-seagreen"
                    : "text-gray-600 hover:text-seagreen"}`, children: t("audio") }), _jsx("button", { onClick: () => setActiveTab("videos"), className: `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${activeTab === "videos"
                    ? "bg-white shadow-sm text-seagreen"
                    : "text-gray-600 hover:text-seagreen"}`, children: t("videos") })] }));
};
export default NavigationTabs;
