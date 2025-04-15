
import {
  ScrollText,
  Info,
  AlertTriangle
} from "lucide-react";

const Agb = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-8">
          Allgemeine Geschäftsbedingungen
        </h2>

        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <ScrollText className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Allgemeines</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten
                für alle Aktivitäten und Veranstaltungen der Tanzgruppe Tradicoes
                Portuguesas. Wir sind eine nicht-kommerzielle Hobbygruppe ohne
                Gewinnabsicht.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Teilnahme und Veranstaltungen
              </h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die Teilnahme an unseren Aktivitäten erfolgt freiwillig und auf
                eigene Verantwortung. Für Proben und Auftritte können
                organisatorische Beiträge erhoben werden, die ausschließlich zur
                Deckung der anfallenden Kosten dienen.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Haftung</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die Teilnahme an allen Aktivitäten erfolgt auf eigene Gefahr.
                Die Gruppe haftet nicht für Schäden oder Verluste, die Teilnehmer
                bei Proben oder Auftritten erleiden, soweit diese nicht auf
                vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
              </p>
              <p>
                Für mitgebrachte Gegenstände, insbesondere Wertgegenstände und
                Garderobe, wird keine Haftung übernommen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Agb;
