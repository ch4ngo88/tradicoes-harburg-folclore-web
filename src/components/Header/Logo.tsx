
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  scrollToTop: () => void;
}

const Logo = ({ scrollToTop }: LogoProps) => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div
      className="flex items-center md:gap-3 cursor-pointer"
      onClick={scrollToTop}
    >
      <img
        src="/images/logo.jpg"
        alt="Rancho logo"
        className="w-12 h-12 object-cover"
        width={48}
        height={48}
      />
      <div className={`text-center ${isMobile ? 'absolute left-1/2 -translate-x-1/2' : 'text-left'}`}>
        <span className="text-portuguesered text-sm font-medium block">
          Rancho Folclórico
        </span>
        <h1 className="text-lg font-bold text-seagreen leading-tight font-lusitana">
          Tradições Portuguesas
        </h1>
        <span className="text-xs text-gray-600 italic block">
          {language === "pt"
            ? "Preservando a cultura portuguesa em Hamburgo desde 1979"
            : "Bewahrung der portugiesischen Kultur in Hamburg seit 1979"}
        </span>
      </div>
    </div>
  );
};

export default Logo;
