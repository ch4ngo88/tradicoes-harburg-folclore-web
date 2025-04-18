import { Shield, FileText, User, Database, Globe, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useMetaSEO } from "@/hooks/useMetaSEO";

const Datenschutz = () => {
  useMetaSEO("datenschutz");
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-8">Datenschutzerklärung</h2>

        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Allgemeine Hinweise
              </h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <User className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Verantwortlich
              </h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Marco da Silva Dácio
                <br />
                Hastedtstraße 30
                <br />
                21073 Hamburg
                <br />
                E-Mail: g.c.r.f.p@hotmail.com
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Datenerfassung auf dieser Website
              </h3>
            </div>
            <div className="pl-6 space-y-4 text-gray-700">
              <h4 className="font-bold">Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen, zum Beispiel über das Kontaktformular. Andere Daten
                werden automatisch beim Besuch der Website durch unsere IT-Systeme
                erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h4 className="font-bold">Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Die Daten werden ausschließlich für die Bereitstellung der Website
                und die Kommunikation mit Interessenten verwendet. Es findet keine
                kommerzielle Nutzung statt.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Cookies</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Unsere Website verwendet Cookies ausschließlich für technisch
                notwendige Funktionen. Diese dienen dazu, unseren Internetauftritt
                nutzerfreundlicher zu gestalten.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Ihre Rechte</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Sie haben jederzeit das Recht auf Auskunft über die Sie
                betreffenden personenbezogenen Daten. Sie können sich jederzeit
                an uns wenden, um Ihre Rechte geltend zu machen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
