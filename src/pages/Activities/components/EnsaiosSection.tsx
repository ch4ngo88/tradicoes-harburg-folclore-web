
import { Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type EnsaioType = {
  title: string;
  schedule: string;
  image: string;
};

interface EnsaiosSectionProps {
  ensaios: EnsaioType[];
}

const EnsaiosSection = ({ ensaios }: EnsaiosSectionProps) => {
  const { t, language } = useLanguage();
  
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-8">
        <Users className="text-portuguesered" />
        <h3 className="text-xl font-bold text-portuguesered">
          {language === "pt" ? "Ensaios" : "Proben"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ensaios.map((ensaio, index) => (
          <div
            key={index}
            className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col card-hover"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-48 cursor-pointer">
                  <img
                    src={ensaio.image}
                    alt={ensaio.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 max-w-2xl border-none">
                <img
                  src={ensaio.image}
                  alt={ensaio.title}
                  className="w-full h-full max-h-[70vh] object-contain rounded-lg"
                  loading="lazy"
                />
              </DialogContent>
            </Dialog>
            <div className="p-5">
              <h3 className="text-lg font-bold text-seagreen mb-2">
                {ensaio.title}
              </h3>
              <p className="text-gray-700">{ensaio.schedule}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnsaiosSection;
