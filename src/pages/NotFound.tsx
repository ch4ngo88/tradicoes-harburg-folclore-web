
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f0f8ff]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-portuguesered mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          {language === 'pt' 
            ? 'Oops! Página não encontrada' 
            : 'Oops! Seite nicht gefunden'}
        </p>
        <Link 
          to="/" 
          className="text-seagreen hover:text-portuguesered underline transition-colors"
        >
          {language === 'pt' ? 'Voltar à página inicial' : 'Zurück zur Startseite'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
