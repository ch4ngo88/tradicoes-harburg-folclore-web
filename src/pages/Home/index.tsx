
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { usePageLoading } from "@/hooks/usePageLoading";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";

const Home = () => {
  const { language } = useLanguage();
  const { isLoading } = usePageLoading();

  return (
    <div className="flex flex-col">
      <HeroSection language={language} />
      
      {isLoading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-seagreen border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <AboutUsSection />
      )}
    </div>
  );
};

export default Home;
