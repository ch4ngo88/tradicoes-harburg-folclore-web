
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import NavigationTabs from "./components/NavigationTabs";
import ArchivePhotos from "./components/ArchivePhotos";
import ArchiveAudio from "./components/ArchiveAudio";
import ArchiveVideos from "./components/ArchiveVideos";

const Archive = () => {
  const { language } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"photos" | "audio" | "videos">("photos");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load images progressively
  useEffect(() => {
    const loadFirstBatchImages = () => {
      const firstBatchImages = [
        "/images/Zeitungsartikel.jpg",
        "/images/Alt1.jpg",
        "/images/Alt2.jpg",
        "/images/Alt3.jpg",
      ];
      setImages(firstBatchImages);
      setImagesLoaded(true);
    };

    const loadRemainingImages = () => {
      const remainingImages = [
        "/images/Alt4.jpg",
        "/images/Jung1.jpg",
        "/images/Jung2.jpg",
        "/images/Jung4.jpg",
        "/images/Jung5.jpg",
        "/images/Jung8.jpg",
        "/images/mata.jpg",
        "/images/Jung9.jpg",
        "/images/Festival1.jpg",
        "/images/Festival2.jpg",
        "/images/Festival3.jpg",
        "/images/Festival4.jpg",
        "/images/Festival5.jpg",
        "/images/Neu1.jpg",
        "/images/Neu4.jpg",
        "/images/Bus.jpg",
        "/images/Neu5.jpg",
        "/images/Neu6.jpg",
      ];
      
      setImages(prev => [...prev, ...remainingImages]);
    };

    // Load first batch immediately
    loadFirstBatchImages();
    
    // Load the rest after the page has rendered
    const timer = setTimeout(loadRemainingImages, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="section-title mb-8 text-center">
        {language === "pt" ? "Arquivo" : "Archiv"}
      </h1>

      {/* Navigation Tabs */}
      <NavigationTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        language={language} 
      />

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
      {activeTab === "videos" && <ArchiveVideos language={language} />}
    </div>
  );
};

export default Archive;
