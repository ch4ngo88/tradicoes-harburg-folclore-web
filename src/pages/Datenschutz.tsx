
import { Shield, FileText, User, Database, Globe, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Datenschutz = () => {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-8">Datenschutzerklärung</h2>
        
        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Allgemeine Hinweise</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-2 mb-4">
              <User className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Verantwortlich</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Centro Português Harburg e.V.<br />
                Reetwerder 23<br />
                21029 Hamburg<br />
                E-Mail: info@tradicoesportuguesas.com
              </p>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Datenerfassung auf dieser Website</h3>
            </div>
            <div className="pl-6 space-y-4 text-gray-700">
              <h4 className="font-bold">Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
                um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme 
                erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              
              <h4 className="font-bold">Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
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
                Unsere Website verwendet Cookies, um unseren Internetauftritt benutzerfreundlicher zu gestalten. 
                Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
            </div>
          </section>
          
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Kontaktformular</h3>
            </div>
            <div className="pl-6 space-y-2 text-gray-700">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
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
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die 
                Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur 
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit widerrufen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
