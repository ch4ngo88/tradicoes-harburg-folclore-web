
import { Shield, FileText, User, Database, Globe, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useMetaSEO } from "@/hooks/useMetaSEO";

const Datenschutz = () => {
  useMetaSEO("datenschutz");
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-8">Datenschutzerklärung</h1>

        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Allgemeine Hinweise
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <User className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Verantwortlicher
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Marco da Silva Dácio<br />
                Hastedtstraße 30<br />
                21073 Hamburg<br />
                E-Mail: g.c.r.f.p@hotmail.com
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Datenerfassung auf unserer Website
              </h2>
            </div>
            <div className="pl-6 space-y-4 text-gray-700">
              <h3 className="font-bold">Server-Log-Dateien</h3>
              <p>
                Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst (z.B. Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage). Diese Daten dienen ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website.
              </p>

              <h3 className="font-bold">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (einschließlich der dort angegebenen Kontaktdaten) zwecks Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                Das Kontaktformular wird über den Dienst FormSubmit abgewickelt. Es gelten zusätzlich die Datenschutzbestimmungen und Nutzungsbedingungen von FormSubmit.
              </p>

              <h3 className="font-bold">Cookies</h3>
              <p>
                Diese Website verwendet Cookies ausschließlich zur technisch notwendigen Sicherstellung der Funktionalität sowie im Rahmen der Webanalyse (siehe unten).
              </p>

              <h3 className="font-bold">Webanalyse und Tracking</h3>
              <p>
                Diese Website nutzt Google Analytics sowie Bing Webmaster Tools, um die Nutzung der Website statistisch auszuwerten.
                Dabei können Cookies gesetzt und Informationen (einschließlich anonymisierter IP-Adresse) an Server in den USA übermittelt werden.
              </p>
              <p>
                Sie können der Erhebung und Verarbeitung Ihrer Daten durch Google widersprechen:<br />
                <a 
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-seagreen hover:text-seagreen/80 flex items-center gap-1"
                >
                  ➔ Google Analytics Opt-Out <ExternalLink className="h-4 w-4" />
                </a>
              </p>
              <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von:
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-seagreen hover:text-seagreen/80 flex items-center gap-1"
                >
                  Google <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="https://privacy.microsoft.com/de-de/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-seagreen hover:text-seagreen/80 flex items-center gap-1"
                >
                  Microsoft <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                Ihre Rechte
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>auf Auskunft über Ihre gespeicherten personenbezogenen Daten,</li>
                <li>auf Berichtigung, Löschung oder Einschränkung der Verarbeitung,</li>
                <li>auf Widerspruch gegen die Verarbeitung,</li>
                <li>auf Datenübertragbarkeit.</li>
              </ul>
              <p className="mt-4">
                Bitte wenden Sie sich hierzu an die oben angegebene Kontaktadresse.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
