import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const VideoCard = ({ videoSrc, title, description }) => {
    return (_jsxs("div", { className: "glass-card overflow-hidden", children: [_jsxs("video", { controls: true, className: "w-full rounded-t-xl hover:scale-[1.01] transition-transform", preload: "metadata", children: [_jsx("source", { src: videoSrc, type: "video/mp4" }), "Your browser does not support the video tag."] }), _jsxs("div", { className: "p-4", children: [_jsx("h4", { className: "font-medium text-seagreen", children: title }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: description })] })] }));
};
export default VideoCard;
