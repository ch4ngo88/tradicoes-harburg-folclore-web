import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useMetaSEO } from "@/hooks/useMetaSEO";
import ArchiveLayout from "./components/ArchiveLayout";
import ArchivePhotos from "./components/ArchivePhotos";
import ArchiveAudio from "./components/ArchiveAudio";
import ArchiveVideos from "./components/ArchiveVideos";
import useArchiveImages from "./hooks/useArchiveImages";
const Archive = () => {
    useMetaSEO("archive");
    const [activeTab, setActiveTab] = useState("photos");
    const { images, imagesLoaded } = useArchiveImages();
    return (_jsxs(ArchiveLayout, { activeTab: activeTab, setActiveTab: setActiveTab, children: [activeTab === "photos" && (_jsx(ArchivePhotos, { images: images, imagesLoaded: imagesLoaded })), activeTab === "audio" && _jsx(ArchiveAudio, {}), activeTab === "videos" && _jsx(ArchiveVideos, {})] }));
};
export default Archive;
