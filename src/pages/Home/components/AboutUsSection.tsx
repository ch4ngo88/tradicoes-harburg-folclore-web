import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { CallToActionButtons } from "@/components/CallToActionButtons";

const AboutUsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-4");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className="container mx-auto py-12 px-4 transition-all duration-500 opacity-0 translate-y-4"
    >
      <div className="glass-card p-8 max-w-4xl mx-auto">
        <h2 className="section-title mb-8 font-lusitana">{t("aboutUs")}</h2>

        <article className="prose max-w-none text-justify text-gray-700 space-y-6 font-lusitana">
          <p className="font-bold text-lg">{t("welcome")}</p>
          <p>{t("intro")}</p>
          <p className="italic text-gray-600">{t("storyIntro")}</p>

          <div className="rounded-lg overflow-hidden shadow-lg my-8 max-w-2xl mx-auto" style={{ maxHeight: "400px" }}>
            <video
              src="/images/offen.mp4"
              controls
              poster="/images/offen.jpeg"
              className="w-full rounded-md"
              style={{ maxHeight: "400px", objectFit: "cover" }}
              preload="metadata"
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
            <p className="mb-6">{t("joinUsText")}</p>
            
            <CallToActionButtons />
            
            <p className="font-bold mt-6 text-center">{t("finalMessage")}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutUsSection;
