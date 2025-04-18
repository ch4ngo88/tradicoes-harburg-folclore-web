import { useMetaSEO } from "@/hooks/useMetaSEO";
import { MapPin, Mail, Shield, FileText } from "lucide-react";

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
            <div className="pl-6 space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-gray-700">
                  Tradicoes Portuguesas
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-portuguesered mt-1" />
                <span className="text-gray-700">
                  Hastedtstraße 30
                  <br />
                  21073 Hamburg
                </span>
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">
                Verantwortlich für den Inhalt
              </h3>
            </div>
            <p className="pl-6 text-gray-700">
              Marco da Silva Dácio
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="text-seagreen" />
              <h3 className="text-xl font-bold text-seagreen">Kontakt</h3>
            </div>
            <p className="pl-6 text-gray-700">
              E-Mail: g.c.r.f.p@hotmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
