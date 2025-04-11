import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToActionButtons = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <Button
        variant="default"
        className="bg-seagreen hover:bg-seagreen/90 text-white flex items-center gap-2"
        asChild
      >
        <Link to="/activities">
          <Calendar size={18} />
          {language === "pt"
            ? "Ver próximas apresentações"
            : "Nächste Auftritte ansehen"}
        </Link>
      </Button>

      <Button
        variant="default"
        className="bg-portuguesered hover:bg-portuguesered/90 text-white flex items-center gap-2"
        asChild
      >
        <Link to="/contact">
          <Mail size={18} />
          {language === "pt" ? "Contratar para eventos" : "Für Events buchen"}
        </Link>
      </Button>
    </div>
  );
};
