
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const FooterContactInfo = () => {
  return (
    <div className="flex flex-col items-center md:items-start bg-seagreen/20 p-4 rounded-md backdrop-blur-sm">
      <div className="space-y-2 text-sm md:text-left text-center w-full">
        <div className="flex items-start md:items-center justify-center md:justify-start gap-2">
          <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
          <span>
            Reetwerder 23
            <br />
            21029 Hamburg
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
          <a
            href="mailto:info@tradicoesportuguesas.com"
            className="hover:text-white/60 transition-colors"
          >
            info@tradicoesportuguesas.com
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Phone className="w-4 h-4 text-white/80 flex-shrink-0" />
          <a
            href="tel:+4940123456789"
            className="hover:text-white/60 transition-colors"
          >
            +49 (0) 40 123 456 789
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Clock className="w-4 h-4 text-white/80 flex-shrink-0" />
          <span>Di. & Fr. 19:00 - 21:00 Uhr</span>
        </div>
      </div>
      
      {/* Mobile only: Separator AFTER address info - soft, rounded style */}
      <div className="w-full mt-4 md:hidden px-4">
        <div className="h-0.5 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};
