
import React, { useState } from "react";
import ArchiveLayout from "./components/ArchiveLayout";
import ArchivePhotos from "./components/ArchivePhotos";
import ArchiveAudio from "./components/ArchiveAudio";
import ArchiveVideos from "./components/ArchiveVideos";
import useArchiveImages from "./hooks/useArchiveImages";
import { useLanguage } from "@/hooks/useLanguage";

const Archive = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"photos" | "audio" | "videos">("photos");
  const { images, imagesLoaded } = useArchiveImages();

  return (
    <ArchiveLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    >
      {/* Photos Tab */}
      {activeTab === "photos" && (
        <ArchivePhotos 
          images={images} 
          imagesLoaded={imagesLoaded} 
          language={language} 
        />
      )}

      {/* Audio Tab */}
      {activeTab === "audio" && <ArchiveAudio language={language} />}

      {/* Videos Tab */}
      {activeTab === "videos" && <ArchiveVideos />}
    </ArchiveLayout>
  );
};

export default Archive;
