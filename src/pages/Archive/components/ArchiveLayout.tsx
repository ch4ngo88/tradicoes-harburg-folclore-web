import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import NavigationTabs from "./NavigationTabs";

interface ArchiveLayoutProps {
  children: React.ReactNode;
  activeTab: "photos" | "audio" | "videos";
  setActiveTab: (tab: "photos" | "audio" | "videos") => void;
}

const ArchiveLayout = ({
  children,
  activeTab,
  setActiveTab,
}: ArchiveLayoutProps) => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="section-title mb-0">
          {language === "pt" ? "Arquivo" : "Archiv"}
        </h1>
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {children}
    </div>
  );
};

export default ArchiveLayout;



