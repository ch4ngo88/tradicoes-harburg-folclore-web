
import { useLanguage } from "@/hooks/useLanguage";

export const FooterLogo = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="bg-white p-4 rounded-md inline-block mb-3 w-full md:w-auto">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <img
            src="/images/logo.jpg"
            alt="Rancho logo"
            className="w-10 h-10 object-cover rounded-sm"
            width={40}
            height={40}
            loading="lazy"
          />
          <div>
            <h3 className="font-lusitana font-bold text-base text-seagreen">
              Tradições Portuguesas
            </h3>

            <p className="text-xs text-gray-600 italic">
              {language === "pt" ? (
                <>
                  Preservando a cultura portuguesa em Hamburgo desde 1979
                </>
              ) : (
                <>
                  Bewahrung der portugiesischen Kultur in Hamburg seit 1979
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      
      {/* Desktop: Copyright Notice */}
      <div className="text-xs text-white/70 mt-3 text-center md:text-left w-full hidden md:block">
        <span className="text-xs align-text-top mr-1">©</span> 2025
        GCRFP. Alle Rechte vorbehalten.
      </div>
    </div>
  );
};
