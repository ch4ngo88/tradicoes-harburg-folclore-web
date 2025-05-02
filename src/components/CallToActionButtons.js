import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export const CallToActionButtons = () => {
    const { t } = useLanguage();
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { variant: "default", className: "bg-seagreen hover:bg-seagreen/90 text-white flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-w-[200px] justify-center", asChild: true, onClick: handleClick, children: _jsxs(Link, { to: "/activities", children: [_jsx(Calendar, { size: 18 }), t("seeActivities")] }) }), _jsx(Button, { variant: "default", className: "bg-portuguesered hover:bg-portuguesered/90 text-white flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-w-[200px] justify-center", asChild: true, onClick: handleClick, children: _jsxs(Link, { to: "/contact", children: [_jsx(Mail, { size: 18 }), t("contactBtn")] }) })] }));
};
