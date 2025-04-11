
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { CallToActionButtons } from "@/components/CallToActionButtons";

const Index = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    <div className="flex flex-col">
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
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/30 rounded-lg"></div>
              <img
                src="/images/gruppe.jpg"
                alt="Group photo"
                className="w-64 h-48 object-cover shadow-xl rounded-lg border border-white/40"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-white/30 rounded-lg"></div>
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
                className="button-primary inline-flex items-center gap-2 group font-lusitana hover:shadow-lg transition-all duration-300"
              >
                {language === "pt" ? "Descobrir Mais" : "Mehr Entdecken"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f9f9f9] to-transparent"></div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h2 className="section-title mb-8 font-lusitana">{t("aboutUs")}</h2>

          <article className="prose max-w-none text-justify text-gray-700 space-y-6 font-lusitana">
            <p className="font-bold text-lg">{t("welcome")}</p>

            <p>{t("intro")}</p>

            <div className="rounded-lg overflow-hidden shadow-lg my-8 max-w-2xl mx-auto" style={{ maxHeight: "400px" }}>
              <video
                src="/images/offen.mp4"
                controls
                poster="/images/offen.jpeg"
                className="w-full rounded-md"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              >
                Your browser cannot play this video
              </video>
            </div>

            <div className="bg-cream p-6 rounded-xl border-l-4 border-seagreen shadow-md my-8">
              <h3 className="text-xl font-bold text-seagreen mb-3 font-lusitana">
                {t("generations")}
              </h3>
              <p>{t("generationsText")}</p>
            </div>

            <div className="bg-cream p-6 rounded-xl border-l-4 border-portuguesered shadow-md my-8">
              <h3 className="text-xl font-bold text-portuguesered mb-3 font-lusitana">
                {t("variety")}
              </h3>
              <p>{t("varietyText")}</p>
            </div>

            <div className="bg-cream p-6 rounded-xl border-l-4 border-seagreen shadow-md my-8">
              <h3 className="text-xl font-bold text-seagreen mb-3 font-lusitana">
                {t("timeTravel")}
              </h3>
              <p>{t("timeTravelText")}</p>
            </div>

            <div className="bg-lightgold/20 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-portuguesered mb-3 font-lusitana">
                {t("joinUs")}
              </h3>
              <p className="mb-6">
                {language === "pt" 
                  ? "Visite-nos em uma das nossas próximas apresentações ou surpreenda os seus convidados com algo especial e contrate-nos para o seu próximo evento."
                  : "Besuchen Sie uns bei einem unserer nächsten Auftritte oder überraschen Sie Ihre Gäste mit etwas Besonderem und buchen Sie uns für Ihre nächste Veranstaltung."
                }
              </p>
              
              <CallToActionButtons />
              
              <p className="mt-6">
                {language === "pt" 
                  ? "Seja como músico ou dançarino, estamos sempre à procura de novos talentos para enriquecer o nosso grupo. Junte-se a nós e viva a paixão pela cultura folclórica portuguesa!"
                  : "Ob als Musiker oder Tänzer, wir sind immer auf der Suche nach neuen Talenten, um unsere Gruppe zu bereichern. Werden Sie Teil von uns und erleben Sie die Leidenschaft für die portugiesische Folklorekultur!"
                }
              </p>
              
              <p className="font-bold mt-4 text-center">{t("finalMessage")}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Index;
