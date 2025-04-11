import { MapPin, Mail, Shield, BookOpen, Link, FileText } from "lucide-react";

const Impressum = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center mb-8">Impressum</h2>

        <div className="glass-card p-8 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Angaben gemäß § 5 TMG
              </h3>
            </div>
            <div className="pl-6 space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-gray-700">
                  Centro Português Harburg e.V.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-portuguesered mt-1" />
                <span className="text-gray-700">
                  Reetwerder 23
                  <br />
                  21029 Hamburg
                </span>
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Vertreten durch
              </h3>
            </div>
            <p className="pl-6 text-gray-700">
              Vorstand des Centro Português Harburg e.V.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Kontakt</h3>
            </div>
            <p className="pl-6 text-gray-700">
              E-Mail: info@tradicoesportuguesas.com
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h3>
            </div>
            <p className="pl-6 text-gray-700">
              Centro Português Harburg e.V.
              <br />
              Reetwerder 23
              <br />
              21029 Hamburg
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
