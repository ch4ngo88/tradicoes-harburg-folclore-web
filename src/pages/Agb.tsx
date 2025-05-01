import { useMetaSEO } from "@/hooks/useMetaSEO";
import {
  ScrollText,
  Info,
  AlertTriangle,
  Copyright
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Agb = () => {
  useMetaSEO("agb");
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-8">
          {language === "pt"
            ? "Condições Gerais de Participação"
            : "Allgemeine Geschäftsbedingungen"}
        </h1>

        <div className="glass-card p-8 space-y-8">
          {/* Abschnitt: Geltungsbereich */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Âmbito de Aplicação" : "Geltungsbereich"}
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                {language === "pt"
                  ? "Estas condições aplicam-se a todas as atividades do grupo de dança Tradições Portuguesas. Somos um grupo não-comercial, sem fins lucrativos."
                  : "Diese AGB gelten für alle Aktivitäten der Tanzgruppe Tradicoes Portuguesas. Wir sind eine nicht-kommerzielle Gruppe ohne Gewinnabsicht."}
              </p>
            </div>
          </section>

          {/* Abschnitt: Teilnahme */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Participação" : "Teilnahme"}
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                {language === "pt"
                  ? "A participação nos ensaios e eventos é voluntária e sob responsabilidade própria. Para cobrir custos (por exemplo, trajes, aluguer de salas), podem ser cobradas contribuições."
                  : "Die Teilnahme an unseren Proben und Veranstaltungen erfolgt freiwillig und auf eigene Verantwortung. Zur Deckung von Kosten (z.B. für Kostüme, Raummiete) können Beiträge erhoben werden."}
              </p>
            </div>
          </section>

          {/* Abschnitt: Haftung */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Responsabilidade" : "Haftung"}
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                {language === "pt"
                  ? "A participação é por conta e risco do próprio. Não nos responsabilizamos por danos ou perdas, exceto em caso de conduta dolosa ou negligência grave."
                  : "Die Teilnahme erfolgt auf eigene Gefahr. Für Schäden oder Verluste übernehmen wir keine Haftung, außer bei vorsätzlichem oder grob fahrlässigem Verhalten."}
              </p>
              <p>
                {language === "pt"
                  ? "Não nos responsabilizamos por objetos trazidos, especialmente objetos de valor."
                  : "Für mitgebrachte Gegenstände, insbesondere Wertgegenstände, übernehmen wir keine Haftung."}
              </p>
            </div>
          </section>

          {/* Abschnitt: Urheberrechte */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Copyright className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Direitos de Autor" : "Urheberrechte"}
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                {language === "pt"
                  ? "Fotos e vídeos de eventos podem ser usados para documentar e apresentar o nosso grupo. Se não desejar que as gravações sejam publicadas, fale connosco com antecedência."
                  : "Fotos und Videos von Veranstaltungen können zur Dokumentation und Präsentation unserer Gruppe genutzt werden. Sollten Sie nicht möchten, dass Aufnahmen veröffentlicht werden, sprechen Sie uns bitte im Voraus an."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Agb;
