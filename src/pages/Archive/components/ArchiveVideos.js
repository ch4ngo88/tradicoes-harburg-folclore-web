import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import VideoCard from "./VideoCard";
import { useLanguage } from "@/hooks/useLanguage";
const ArchiveVideos = () => {
    const { language, t } = useLanguage();
    return (_jsxs("div", { className: "w-full max-w-4xl mx-auto mb-12 animate-fade-in", children: [_jsx("div", { className: "text-center mb-6", children: _jsx("h2", { className: "text-xl font-bold text-portuguesered", children: t("videos") }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(VideoCard, { videoSrc: "/images/archive/videos/Portugueses da zona de Hamburgo comentam eliminacao da Selecao-01.mp4", title: _jsxs(_Fragment, { children: ["Entrevista para ", _jsx("span", { className: "text-[#ea384c]", children: "A BOLA" })] }), description: language === "pt"
                            ? "Entrevista sobre como a comunidade portuguesa em Hamburgo acompanha a Seleção Nacional"
                            : "Interview über die portugiesische Community in Hamburg und ihre Verbindung zur Nationalmannschaft" }), _jsx(VideoCard, { videoSrc: "/images/archive/videos/Rancho Folclorico mantem viva a tradicao portuguesa em Hamburgo.mp4", title: _jsxs(_Fragment, { children: ["Entrevista para ", _jsx("span", { className: "text-[#ea384c]", children: "A BOLA" })] }), description: language === "pt"
                            ? "Reportagem sobre a nossa história e a preservação da cultura portuguesa no estrangeiro"
                            : "Bericht über unsere Geschichte und die Bewahrung der portugiesischen Kultur im Ausland" })] })] }));
};
export default ArchiveVideos;
