
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";

const Home = () => {
  const { language } = useLanguage();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsContentLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection language={language} />

      {isContentLoaded && <AboutUsSection />}
    </div>
  );
};

export default Home;
