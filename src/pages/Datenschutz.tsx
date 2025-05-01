import { Shield, FileText, User, Database, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useMetaSEO } from "@/hooks/useMetaSEO";

const Datenschutz = () => {
  useMetaSEO("datenschutz");
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-8">
          {language === "pt" ? "Política de Privacidade" : "Datenschutzerklärung"}
        </h1>

        <div className="glass-card p-8 space-y-8">
          {/* Abschnitt: Allgemeine Hinweise */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Informações Gerais" : "Allgemeine Hinweise"}
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                {language === "pt"
                  ? "A proteção dos seus dados pessoais é muito importante para nós. Tratamos os seus dados de forma confidencial e de acordo com os regulamentos legais de proteção de dados, bem como com esta política de privacidade."
                  : "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."}
              </p>
            </div>
          </section>

          {/* Abschnitt: Verantwortlicher */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <User className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Responsável" : "Verantwortlicher"}
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

          {/* Abschnitt: Datenerfassung */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt"
                  ? "Coleta de Dados em Nosso Site"
                  : "Datenerfassung auf unserer Website"}
              </h2>
            </div>
            <div className="pl-6 space-y-4 text-gray-700">
              <h3 className="font-bold">
                {language === "pt" ? "Arquivos de Log do Servidor" : "Server-Log-Dateien"}
              </h3>
              <p>
                {language === "pt"
                  ? "Ao visitar este site, informações gerais são automaticamente coletadas (por exemplo, tipo de navegador, sistema operacional, URL de referência, horário da solicitação ao servidor). Esses dados são utilizados exclusivamente para garantir o funcionamento livre de erros do site."
                  : "Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst (z.B. Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage). Diese Daten dienen ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website."}
              </p>

              <h3 className="font-bold">
                {language === "pt" ? "Formulário de Contato" : "Kontaktformular"}
              </h3>
              <p>
                {language === "pt"
                  ? "Se você nos enviar solicitações via formulário, seus dados do formulário (incluindo os dados de contato fornecidos) serão armazenados para o processamento da solicitação. Esses dados não serão repassados sem o seu consentimento. O formulário de contato é processado via FormSubmit. Aplicam-se também as políticas de privacidade e os termos de uso do FormSubmit."
                  : "Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (einschließlich der dort angegebenen Kontaktdaten) zwecks Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Das Kontaktformular wird über den Dienst FormSubmit abgewickelt. Es gelten zusätzlich die Datenschutzbestimmungen und Nutzungsbedingungen von FormSubmit."}
              </p>

              <h3 className="font-bold">
                Cookies
              </h3>
              <p>
                {language === "pt"
                  ? "Este site utiliza cookies exclusivamente para garantir a funcionalidade técnica necessária e no contexto da análise da web (veja abaixo)."
                  : "Diese Website verwendet Cookies ausschließlich zur technisch notwendigen Sicherstellung der Funktionalität sowie im Rahmen der Webanalyse (siehe unten)."}
              </p>

              <h3 className="font-bold">
                {language === "pt" ? "Análise da Web e Rastreamento" : "Webanalyse und Tracking"}
              </h3>
              <p>
                {language === "pt"
                  ? "Este site utiliza o Google Analytics e o Bing Webmaster Tools para avaliar estatisticamente o uso do site. Cookies podem ser definidos e informações (incluindo o endereço IP anonimizado) podem ser transmitidas para servidores nos EUA."
                  : "Diese Website nutzt Google Analytics sowie Bing Webmaster Tools, um die Nutzung der Website statistisch auszuwerten. Dabei können Cookies gesetzt und Informationen (einschließlich anonymisierter IP-Adresse) an Server in den USA übermittelt werden."}
              </p>

              <p>
                {language === "pt"
                  ? "Você pode se opor à coleta e ao processamento dos seus dados pelo Google:"
                  : "Sie können der Erhebung und Verarbeitung Ihrer Daten durch Google widersprechen:"}
                <br />
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
                {language === "pt"
                  ? "Mais informações podem ser encontradas nas políticas de privacidade de:"
                  : "Weitere Informationen finden Sie in der Datenschutzerklärung von:"}
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

          {/* Abschnitt: Ihre Rechte */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h2 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Os Seus Direitos" : "Ihre Rechte"}
              </h2>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                {language === "pt"
                  ? "Você tem o direito de, a qualquer momento:"
                  : "Sie haben jederzeit das Recht:"}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{language === "pt" ? "acessar seus dados pessoais armazenados," : "auf Auskunft über Ihre gespeicherten personenbezogenen Daten,"}</li>
                <li>{language === "pt" ? "corrigir, apagar ou restringir o processamento," : "auf Berichtigung, Löschung oder Einschränkung der Verarbeitung,"}</li>
                <li>{language === "pt" ? "opor-se ao processamento," : "auf Widerspruch gegen die Verarbeitung,"}</li>
                <li>{language === "pt" ? "solicitar a portabilidade dos dados." : "auf Datenübertragbarkeit."}</li>
              </ul>
              <p className="mt-4">
                {language === "pt"
                  ? "Por favor, entre em contato com o endereço acima indicado."
                  : "Bitte wenden Sie sich hierzu an die oben angegebene Kontaktadresse."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
