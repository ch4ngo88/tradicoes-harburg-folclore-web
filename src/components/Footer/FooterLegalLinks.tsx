
import { Link } from "react-router-dom";

export const FooterLegalLinks = () => {
  return (
    <div className="flex flex-col md:items-start bg-seagreen/20 p-4 rounded-md backdrop-blur-sm">
      {/* Mobile-only copyright notice */}
      <div className="text-xs text-white/70 mb-4 text-center w-full md:hidden">
        <span className="text-xs align-text-top mr-1">©</span> 2025
        GCRFP. Alle Rechte vorbehalten.
      </div>

      <ul className="flex flex-col space-y-1 items-center md:items-start w-full">
        <li>
          <Link
            to="/impressum"
            className="text-white hover:text-white/60 transition-colors text-sm"
          >
            Impressum
          </Link>
        </li>
        <li>
          <Link
            to="/datenschutz"
            className="text-white hover:text-white/60 transition-colors text-sm"
          >
            Datenschutzerklärung
          </Link>
        </li>
        <li>
          <Link
            to="/agb"
            className="text-white hover:text-white/60 transition-colors text-sm"
          >
            AGB
          </Link>
        </li>
      </ul>
    </div>
  );
};
