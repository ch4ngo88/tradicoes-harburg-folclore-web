import { useMetaSEO } from "@/hooks/useMetaSEO";
import { Mail, Shield, FileText, AlertTriangle, Copyright } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Impressum = () => {
  useMetaSEO("impressum");
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title text-center mb-8">
          {language === "pt" ? "Impressum / Aviso Legal" : "Impressum"}
        </h1>

        <div className="glass-card p-8 space-y-8">
          {/* Abschnitt: Angaben gemäß § 5 TMG */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt"
                  ? "Informações conforme § 5 TMG"
                  : "Angaben gemäß § 5 TMG"}
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
                {language === "pt" ? "Alemanha" : "Deutschland"}
              </p>
            </div>
          </section>

          {/* Abschnitt: Vertretung */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Representado por" : "Vertreten durch"}
              </h2>
            </div>
            <p className="pl-6 text-gray-700">Marco da Silva Dácio</p>
          </section>

          {/* Abschnitt: Kontakt */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Contato" : "Kontakt"}
              </h2>
            </div>
            <p className="pl-6 text-gray-700">E-Mail: g.c.r.f.p@hotmail.com</p>
          </section>

          {/* Abschnitt: Verantwortlich nach RStV */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt"
                  ? "Responsável pelo conteúdo conforme § 55, parágrafo 2 RStV"
                  : "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"}
              </h2>
            </div>
            <p className="pl-6 text-gray-700">Marco da Silva Dácio</p>
          </section>

          {/* Abschnitt: Haftungsausschluss */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt"
                  ? "Exclusão de responsabilidade"
                  : "Haftungsausschluss"}
              </h2>
            </div>
            <p className="pl-6 text-gray-700">
              {language === "pt"
                ? "Apesar do controle cuidadoso do conteúdo, não assumimos qualquer responsabilidade pelo conteúdo de links externos. Os operadores das páginas vinculadas são os únicos responsáveis pelo seu conteúdo."
                : "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."}
            </p>
          </section>

          {/* Abschnitt: Urheberrecht */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Copyright className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Direitos de autor" : "Urheberrecht"}
              </h2>
            </div>
            <div className="pl-6 space-y-4 text-gray-700">
              <p>
                {language === "pt"
                  ? "Todos os conteúdos utilizados neste site (textos, imagens, gráficos, logótipos) são propriedade do grupo de dança Tradicoes Portuguesas ou são utilizados com autorização. Qualquer outro uso requer consentimento prévio por escrito."
                  : "Alle auf dieser Website verwendeten Inhalte (Texte, Bilder, Grafiken, Logos) sind Eigentum der Tanzgruppe Tradicoes Portuguesas oder werden mit freundlicher Genehmigung verwendet. Jede weitere Nutzung bedarf der vorherigen schriftlichen Zustimmung."}
              </p>
              <p>
                {language === "pt"
                  ? "Se tiver conhecimento de uma possível infração de direitos autorais, pedimos que nos informe. Em caso de infrações, os conteúdos afetados serão imediatamente removidos."
                  : "Sollten Sie auf eine mögliche Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Inhalte umgehend entfernen."}
              </p>
            </div>
          </section>

          {/* Abschnitt: Werbewiderspruch */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt"
                  ? "Objeção a publicidade"
                  : "Werbewiderspruch"}
              </h2>
            </div>
            <p className="pl-6 text-gray-700">
              {language === "pt"
                ? "A utilização dos nossos dados de contacto para o envio de publicidade ou material informativo não expressamente solicitado é expressamente rejeitada. Reservamo-nos o direito de tomar medidas legais em caso de envio não solicitado de material publicitário (por exemplo, spam)."
                : "Der Nutzung unserer Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung oder Informationsmaterialien wird hiermit ausdrücklich widersprochen. Rechtliche Schritte im Falle von unverlangter Zusendung von Werbematerialien (z.B. Spam-Mails) bleiben vorbehalten."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;



