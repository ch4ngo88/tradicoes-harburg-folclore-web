
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToActionButtons = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        variant="default"
        className="bg-seagreen hover:bg-seagreen/90 text-white flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-w-[200px] justify-center"
        asChild
        onClick={handleClick}
      >
        <Link to="/activities">
          <Calendar size={18} />
          {t("seeActivities")}
        </Link>
      </Button>

      <Button
        variant="default"
        className="bg-portuguesered hover:bg-portuguesered/90 text-white flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-w-[200px] justify-center"
        asChild
        onClick={handleClick}
      >
        <Link to="/contact">
          <Mail size={18} />
          {t("contact")}
        </Link>
      </Button>
    </div>
  );
};
