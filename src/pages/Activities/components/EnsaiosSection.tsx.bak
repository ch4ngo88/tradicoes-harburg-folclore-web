import { Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { asset } from "@/lib/asset"; // falls Bilder relativ sind

export type EnsaioType = {
  title: string;
  schedule: string;
  image: string;
};

interface EnsaiosSectionProps {
  ensaios: EnsaioType[];
}

const EnsaiosSection = ({ ensaios }: EnsaiosSectionProps) => {
  const { language } = useLanguage();

  return (
    <section className="mb-12">
      {/* Überschrift ------------------------------------------ */}
      <div className="flex items-center gap-2 mb-4">
        <Users className="text-portuguesered" />
        <h3 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Ensaios" : "Proben"}
        </h3>
      </div>

      <p className="text-gray-600 italic mb-8 text-center">
        {language === "pt"
          ? "(Pausa durante as férias de verão e inverno)"
          : "(Pause während der Sommer- und Winterferien)"}
      </p>

      {/* Kartenraster ----------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ensaios.map((ensaio, index) => {
          const imgSrc = asset(ensaio.image); // erzeugt korrekten Pfad
          const altText =
            language === "pt"
              ? `Ensaio de ${ensaio.title} – ${ensaio.schedule}`
              : `${ensaio.title} Probe – ${ensaio.schedule}`;

          return (
            <div
              key={index}
              className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col card-hover"
            >
              {/* Dialog für Großansicht ----------------------- */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative h-48 cursor-pointer">
                    <img
                      src={imgSrc}
                      alt={altText}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </DialogTrigger>

                <DialogContent className="p-0 max-w-2xl border-none">
                  {/* A11y: unsichtbarer Titel/Beschreibung */}
                  <DialogTitle asChild>
                    <h3 className="sr-only">{altText}</h3>
                  </DialogTitle>
                  <DialogDescription asChild>
                    <p className="sr-only">
                      {language === "pt"
                        ? "Foto em tamanho grande do ensaio"
                        : "Großansicht des Probenfotos"}
                    </p>
                  </DialogDescription>

                  <img
                    src={imgSrc}
                    alt={altText}
                    className="w-full h-full max-h-[70vh] object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>

              {/* Karten‑Body -------------------------------- */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-seagreen mb-2">
                  {ensaio.title}
                </h3>
                <p className="text-gray-700">{ensaio.schedule}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EnsaiosSection;
