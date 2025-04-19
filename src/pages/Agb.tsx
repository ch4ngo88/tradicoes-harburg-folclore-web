
import { useMetaSEO } from "@/hooks/useMetaSEO";
import {
  ScrollText,
  Info,
  AlertTriangle,
  Copyright
} from "lucide-react";

const Agb = () => {
  useMetaSEO("agb");
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">Geltungsbereich</h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Diese AGB gelten für alle Aktivitäten der Tanzgruppe Tradicoes Portuguesas. Wir sind eine nicht-kommerzielle Gruppe ohne Gewinnabsicht.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">Teilnahme</h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die Teilnahme an unseren Proben und Veranstaltungen erfolgt freiwillig und auf eigene Verantwortung.
                Zur Deckung von Kosten (z.B. für Kostüme, Raummiete) können Beiträge erhoben werden.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">Haftung</h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die Teilnahme erfolgt auf eigene Gefahr. Für Schäden oder Verluste übernehmen wir keine Haftung, außer bei vorsätzlichem oder grob fahrlässigem Verhalten.
              </p>
              <p>
                Für mitgebrachte Gegenstände, insbesondere Wertgegenstände, übernehmen wir keine Haftung.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Copyright className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">Urheberrechte</h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Fotos und Videos von Veranstaltungen können zur Dokumentation und Präsentation unserer Gruppe genutzt werden. Sollten Sie nicht möchten, dass Aufnahmen veröffentlicht werden, sprechen Sie uns bitte im Voraus an.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Agb;
