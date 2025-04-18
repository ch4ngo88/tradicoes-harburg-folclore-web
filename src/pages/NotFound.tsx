import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { AlertTriangle, Home } from "lucide-react";
import { useMetaSEO } from "@/hooks/useMetaSEO";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  useMetaSEO("home"); // Fallback to home metadata for 404 page

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 py-10 glass-card max-w-md mx-auto">
        <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="h-10 w-10 text-portuguesered" />
        </div>
        <h1 className="text-5xl font-bold text-portuguesered mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">{t("notFoundTitle")}</p>
        <Link to="/" className="button-primary inline-flex items-center gap-2">
          <Home className="w-4 h-4" />
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
