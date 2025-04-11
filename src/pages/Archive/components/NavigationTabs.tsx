
import React from "react";

interface NavigationTabsProps {
  activeTab: "photos" | "audio" | "videos";
  setActiveTab: (tab: "photos" | "audio" | "videos") => void;
  language: string;
}

const NavigationTabs = ({ activeTab, setActiveTab, language }: NavigationTabsProps) => {
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
        {language === "pt" ? "Fotos" : "Fotos"}
      </button>
      <button
        onClick={() => setActiveTab("audio")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
          activeTab === "audio"
            ? "bg-white shadow-sm text-seagreen"
            : "text-gray-600 hover:text-seagreen"
        }`}
      >
        {language === "pt" ? "Áudio" : "Audio"}
      </button>
      <button
        onClick={() => setActiveTab("videos")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
          activeTab === "videos"
            ? "bg-white shadow-sm text-seagreen"
            : "text-gray-600 hover:text-seagreen"
        }`}
      >
        {language === "pt" ? "Vídeos" : "Videos"}
      </button>
    </div>
  );
};

export default NavigationTabs;
