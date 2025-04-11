import {
  ScrollText,
  FileCheck,
  Landmark,
  AlertTriangle,
  Info,
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
                für alle Verträge, die zwischen dem Centro Português Harburg
                e.V. (nachfolgend "Verein") und seinen Mitgliedern, Besuchern
                oder Kunden geschlossen werden.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Mitgliedschaft
              </h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die Mitgliedschaft im Verein wird durch einen schriftlichen
                Aufnahmeantrag beantragt. Über die Aufnahme entscheidet der
                Vorstand. Mit der Aufnahme erkennt das Mitglied die Satzung und
                die Ordnungen des Vereins an.
              </p>
              <p>
                Die Mitgliedschaft endet durch Austritt, Ausschluss oder Tod.
                Der Austritt muss schriftlich gegenüber dem Vorstand erklärt
                werden und ist nur zum Ende eines Kalenderjahres möglich.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Beiträge</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Der Verein erhebt Mitgliedsbeiträge, deren Höhe und Fälligkeit
                von der Mitgliederversammlung festgelegt werden. Der Beitrag ist
                im Voraus zu entrichten und wird per Lastschrift eingezogen,
                soweit das Mitglied ein SEPA-Lastschriftmandat erteilt hat.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Veranstaltungen
              </h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Für die Teilnahme an Veranstaltungen können zusätzliche Gebühren
                erhoben werden. Die Anmeldung zur Teilnahme ist verbindlich und
                verpflichtet zur Zahlung der festgesetzten Gebühr, auch bei
                Nichtteilnahme. Eine Erstattung erfolgt nur, wenn die Absage
                rechtzeitig (mindestens 7 Tage vor der Veranstaltung) erfolgt.
              </p>
              <p>
                Der Verein behält sich vor, Veranstaltungen bei zu geringer
                Teilnehmerzahl oder aus anderen wichtigen Gründen abzusagen. In
                diesem Fall werden bereits gezahlte Gebühren erstattet.
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
                Der Verein haftet nicht für Schäden oder Verluste, die
                Mitglieder oder Gäste bei Veranstaltungen des Vereins erleiden,
                soweit kein vorsätzliches oder grob fahrlässiges Verhalten von
                Vereinsmitarbeitern oder sonstigen Erfüllungsgehilfen vorliegt.
              </p>
              <p>
                Für mitgebrachte Gegenstände, insbesondere Wertgegenstände und
                Garderobe, übernimmt der Verein keine Haftung.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Agb;
