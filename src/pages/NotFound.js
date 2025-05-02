import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (_jsx("div", { className: "min-h-[70vh] flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "text-center px-4 py-10 glass-card max-w-md mx-auto", children: [_jsx("div", { className: "mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6", children: _jsx(AlertTriangle, { className: "h-10 w-10 text-portuguesered" }) }), _jsx("h1", { className: "text-5xl font-bold text-portuguesered mb-4", children: "404" }), _jsx("p", { className: "text-xl text-gray-600 mb-8", children: t("notFoundTitle") }), _jsxs(Link, { to: "/", className: "button-primary inline-flex items-center gap-2", children: [_jsx(Home, { className: "w-4 h-4" }), t("backToHome")] })] }) }));
};
export default NotFound;
