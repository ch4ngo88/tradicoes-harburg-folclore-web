import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AudioPlayer from "./AudioPlayer";
import { useLanguage } from "@/hooks/useLanguage";
const ArchiveAudio = () => {
    const { t } = useLanguage();
    return (_jsxs("div", { className: "w-full max-w-3xl mx-auto mb-12 animate-fade-in", children: [_jsx("div", { className: "text-center mb-6", children: _jsx("h2", { className: "text-xl font-bold text-portuguesered", children: t("interviews") }) }), _jsx("div", { className: "bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg", children: _jsx("div", { className: "flex flex-col items-center", children: _jsx(AudioPlayer, { audioSrc: "/images/archive/audio/Caf\u00E9 com Leite & Pimenta Interview Tradicoes.mp3", title: "Caf\u00E9 com Leite & Pimenta Interview", year: "2024", description: "(Caf\u00E9 com Leite & Pimenta Interview 2024)" }) }) })] }));
};
export default ArchiveAudio;
