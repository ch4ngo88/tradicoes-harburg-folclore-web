
import { useMetaSEO } from "@/hooks/useMetaSEO";
import { MapPin, Mail, Shield, FileText, AlertTriangle, Copyright } from "lucide-react";

const Impressum = () => {
  useMetaSEO("impressum");
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title text-center mb-8">Impressum</h1>

        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Angaben gemäß § 5 TMG
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Tradicoes Portuguesas
                <br />
                Hastedtstraße 30
                <br />
                21073 Hamburg
                <br />
                Deutschland
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Vertreten durch
              </h2>
            </div>
            <p className="pl-6 text-gray-700">
              Marco da Silva Dácio
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">Kontakt</h2>
            </div>
            <p className="pl-6 text-gray-700">
              E-Mail: g.c.r.f.p@hotmail.com
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
            </div>
            <p className="pl-6 text-gray-700">
              Marco da Silva Dácio
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Haftungsausschluss
              </h2>
            </div>
            <p className="pl-6 text-gray-700">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Copyright className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Urheberrecht
              </h2>
            </div>
            <div className="pl-6 space-y-4 text-gray-700">
              <p>
                Alle auf dieser Website verwendeten Inhalte (Texte, Bilder, Grafiken, Logos) sind Eigentum der Tanzgruppe Tradicoes Portuguesas oder werden mit freundlicher Genehmigung verwendet. Jede weitere Nutzung bedarf der vorherigen schriftlichen Zustimmung.
              </p>
              <p>
                Sollten Sie auf eine mögliche Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Werbewiderspruch
              </h2>
            </div>
            <p className="pl-6 text-gray-700">
              Der Nutzung unserer Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung oder Informationsmaterialien wird hiermit ausdrücklich widersprochen. Rechtliche Schritte im Falle von unverlangter Zusendung von Werbematerialien (z.B. Spam-Mails) bleiben vorbehalten.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
