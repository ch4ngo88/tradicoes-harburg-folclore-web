
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const heroImageSrc = "/images/gruppe.jpg";
  const heroImageSrcSet = `
    /images/gruppe-800w.jpg 800w, 
    /images/gruppe.jpg 1200w
  `;
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const elements = heroElement.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 200 + (index * 200));
    });
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroElement) {
        const overlay = heroElement.querySelector('.hero-overlay') as HTMLElement;
        if (overlay) {
          overlay.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="hero-overlay absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-seagreen/40 to-portuguesered/40 opacity-90 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="animate-on-load md:w-2/5 w-full flex justify-center md:justify-end">
          <div className="relative">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer relative">
                  {/* Top-left decorative border - now positioned above but part of the clickable area */}
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/30 rounded-lg"></div>
                  
                  {/* The image */}
                  <img
                    src={heroImageSrc}
                    srcSet={heroImageSrcSet}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                    width="512"
                    height="384"
                    alt="Group photo"
                    className="w-64 h-48 object-cover shadow-xl rounded-lg border border-white/40 transition-all duration-300 hover:shadow-lg hover:brightness-110"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Bottom-right decorative border - now positioned above but part of the clickable area */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-white/30 rounded-lg"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 max-w-4xl border-none">
                <img
                  src={heroImageSrc}
                  srcSet={heroImageSrcSet}
                  sizes="(max-width: 1200px) 90vw, 1200px"
                  alt="Group photo"
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="md:w-3/5 text-center md:text-left text-white space-y-4">
          <h2 className="animate-on-load text-4xl md:text-5xl lg:text-6xl font-bold font-lusitana leading-tight">
            {language === "pt"
              ? "Tradições Portuguesas"
              : "Portugiesische Traditionen"}
          </h2>
          <p
            className="animate-on-load text-xl md:text-2xl opacity-90 font-lusitana max-w-xl italic"
          >
            {language === "pt"
              ? "Preservando a cultura portuguesa em Hamburgo\ndesde 1979"
              : "Bewahrung der portugiesischen Kultur in Hamburg\nseit 1979"}
          </p>
          <div className="animate-on-load pt-4">
            <Link
              to="/activities"
              className="px-6 py-3 bg-seagreen text-white rounded-lg shadow-md transition-all duration-300 inline-flex items-center gap-2 group font-lusitana hover:shadow-lg hover:scale-[1.02]"
            >
              {language === "pt" ? "Descobrir Mais" : "Mehr Entdecken"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f9f9f9] to-transparent"></div>
    </div>
  );
};

export default HeroSection;
