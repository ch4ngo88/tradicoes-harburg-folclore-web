import { useRef, useEffect } from "react";
import { asset } from "@/lib/asset";

import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import OptimizedImage from "@/components/OptimizedImage";
import PreloadLink from "@/components/PreloadLink";

interface HeroSectionProps {
  language: string;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Fixierter Bildpfad via asset()
  const heroImageSrc = asset("images/gruppe.webp");

  /* ---------- Intersection & Parallax ---------- */
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-screen");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    heroElement
      .querySelectorAll(".animate-on-load")
      .forEach(el => observer.observe(el));

    const handleScroll = () => {
      const y = window.pageYOffset;
      heroElement.style.transform = `translateY(${y * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-seagreen/40 to-portuguesered/40 opacity-90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* ---------- Gruppenfoto ---------- */}
        <div className="animate-on-load md:w-2/5 w-full flex justify-center md:justify-end">
          <div className="relative hero-stagger-1">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="relative cursor-pointer"
                  aria-label={
                    language === "pt"
                      ? "Ampliar imagem do grupo"
                      : "Gruppenbild vergrößern"
                  }
                >
                  {/* Zier‑Rahmen */}
                  <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/30 rounded-lg" />
                  <OptimizedImage
                    src={heroImageSrc}
                    alt={language === "pt" ? "Foto do grupo" : "Gruppenfoto"}
                    className="w-64 h-48 object-cover shadow-xl rounded-lg border border-white/40 transition-all duration-300 hover:shadow-lg hover:brightness-110"
                    loading="eager"
                    preload
                  />
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-white/30 rounded-lg" />
                </button>
              </DialogTrigger>

              {/* ---------- Modal ---------- */}
              <DialogContent className="p-0 max-w-4xl border-none">
                <DialogTitle asChild>
                  <h3 className="sr-only">
                    {language === "pt" ? "Foto do grupo" : "Gruppenfoto"}
                  </h3>
                </DialogTitle>
                <DialogDescription asChild>
                  <p className="sr-only">
                    {language === "pt"
                      ? "Imagem ampliada do grupo"
                      : "Vergrößertes Gruppenbild"}
                  </p>
                </DialogDescription>

                <OptimizedImage
                  src={heroImageSrc}
                  alt={language === "pt" ? "Foto do grupo" : "Gruppenfoto"}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                  preload={false}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* ---------- Headline & CTA ---------- */}
        <div className="md:w-3/5 text-center md:text-left text-white space-y-4">
          <h2 className="hero-stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold font-lusitana leading-tight">
            {language === "pt"
              ? "Tradições Portuguesas"
              : "Portugiesische Traditionen"}
          </h2>
          <p className="hero-stagger-2 text-xl md:text-2xl opacity-90 font-lusitana max-w-xl italic">
            {language === "pt" ? (
              <>
                Preservando a cultura portuguesa em Hamburgo
                <br />
                desde 1979
              </>
            ) : (
              <>
                Bewahrung der portugiesischen Kultur in Hamburg
                <br />
                seit 1979
              </>
            )}
          </p>

          <div className="hero-stagger-3 pt-4">
            <PreloadLink
              to="/activities"
              className="px-6 py-3 bg-seagreen text-white rounded-lg shadow-md transition-all duration-300 inline-flex items-center gap-2 group font-lusitana hover:shadow-lg hover:scale-[1.02]"
              preloadResources={[
                {
                  href: asset("images/activity/ensaios/ensaioadultos.webp"),
                  as: "image",
                },
                {
                  href: asset("images/activity/ensaios/ensaiocriancas.webp"),
                  as: "image",
                },
              ]}
              onlyPrefetchOnHover
            >
              {language === "pt" ? "Descobrir Mais" : "Mehr Entdecken"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </PreloadLink>
          </div>
        </div>
      </div>

      {/* Weißer Fade unten */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f9f9f9] to-transparent" />
    </div>
  );
};

export default HeroSection;
