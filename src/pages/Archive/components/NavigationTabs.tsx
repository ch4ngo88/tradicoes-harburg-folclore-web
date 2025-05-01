import { useLanguage } from "@/hooks/useLanguage";

interface NavigationTabsProps {
  activeTab: "photos" | "audio" | "videos";
  setActiveTab: (tab: "photos" | "audio" | "videos") => void;
}

const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="inline-flex rounded-md bg-gray-100 p-1">
      <button
        onClick={() => setActiveTab("photos")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
          activeTab === "photos"
            ? "bg-white shadow-sm text-seagreen"
            : "text-gray-600 hover:text-seagreen"
        }`}
      >
        {t("photos")}
      </button>
      <button
        onClick={() => setActiveTab("audio")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
          activeTab === "audio"
            ? "bg-white shadow-sm text-seagreen"
            : "text-gray-600 hover:text-seagreen"
        }`}
      >
        {t("audio")}
      </button>
      <button
        onClick={() => setActiveTab("videos")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
          activeTab === "videos"
            ? "bg-white shadow-sm text-seagreen"
            : "text-gray-600 hover:text-seagreen"
        }`}
      >
        {t("videos")}
      </button>
    </div>
  );
};

export default NavigationTabs;
