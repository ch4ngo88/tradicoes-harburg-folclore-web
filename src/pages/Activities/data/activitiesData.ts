
import { useLanguage } from "@/hooks/useLanguage";
import { NewsItemType } from "../components/NewsItem";
import { EventType } from "../components/EventCard";

export const useNewsItems = (): NewsItemType[] => {
  const { language } = useLanguage();
  
  return [
    {
      type: "image",
      thumbnail: "/images/info.jpg",
      source: "/images/info.jpg",
      title: language === "pt" ? "Folheto Informativo" : "Information Flyer",
      description:
        language === "pt"
          ? "Detalhes sobre o nosso grupo folclórico"
          : "Details über unsere Folkloregruppe",
    },
    {
      type: "video",
      thumbnail: "/images/kinder.jpg", // Thumbnail for the video
      source: "/videos/kinder.mp4",
      title: language === "pt" ? "Vídeo das Crianças" : "Kinder Video",
      description:
        language === "pt"
          ? "Os nossos pequenos dançarinos em ação"
          : "Unsere kleinen Tänzer in Aktion",
    },
    {
      type: "video",
      thumbnail: "/images/TikFrontt.JPG",
      source: "/videos/tiktok.mp4",
      title: "TikTok",
      description:
        language === "pt"
          ? "Nossa presença nas redes sociais"
          : "Unsere Präsenz in sozialen Medien",
    },
  ];
};

export const useUpcomingEvents = (): EventType[] => {
  const { language } = useLanguage();
  
  return [
    {
      id: 1,
      title: "Dia de Portugal",
      date: "2025-06-10",
      image: "/images/dia_de_Portugal.jpeg",
      description:
        language === "pt"
          ? "Celebração do Dia de Portugal com música tradicional e apresentações de dança."
          : "Feier des Dia de Portugal mit traditioneller Musik und Tanzaufführungen.",
      location: "Hamburgo",
    },
    {
      id: 2,
      title: language === "pt" ? "Workshop de Dança" : "Tanzworkshop",
      date: "2025-05-15",
      image: "/images/gruppe.jpg",
      description:
        language === "pt"
          ? "Aprenda danças tradicionais portuguesas em nosso workshop especial."
          : "Lernen Sie traditionelle portugiesische Tänze in unserem speziellen Workshop.",
      location: "Centro Português de Harburg",
    },
  ];
};
