
import { useLanguage } from "@/hooks/useLanguage";
import { NewsItemType } from "../components/NewsItem";
import { EventType } from "../components/EventCard";
import { EnsaioType } from "../components/EnsaiosSection";

export const useNewsItems = (): NewsItemType[] => {
  const { language } = useLanguage();
  
  return [
    {
      type: "image",
      thumbnail: "/images/activity/news/info.jpg",
      source: "/images/info.jpg",
      title: language === "pt" ? "Folheto Informativo" : "Information Flyer",
      description:
        language === "pt"
          ? "Detalhes sobre o nosso grupo folclórico"
          : "Details über unsere Folkloregruppe",
    },
    {
      type: "video",
      thumbnail: "/images//activity/news/kinder.jpg", // Thumbnail for the video
      source: "/images//activity/news/kinder.mp4",
      title: language === "pt" ? "Vídeo das Crianças" : "Kinder Video",
      description:
        language === "pt"
          ? "Os nossos pequenos dançarinos em ação"
          : "Unsere kleinen Tänzer in Aktion",
    },
    {
      type: "video",
      thumbnail: "/images/activity/news/TikFrontt.JPG",
      source: "/images/activity/news/tiktok.mp4",
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
      video: "/videos/offen.mp4",
      description:
        language === "pt"
          ? "Celebração do Dia de Portugal com música tradicional e apresentações de dança."
          : "Feier des Dia de Portugal mit traditioneller Musik und Tanzaufführungen.",
      location: "Hamburgo",
    },/*
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
    },*/
  ];
};

export const useEnsaios = (): EnsaioType[] => {
  const { language } = useLanguage();
  
  return [
    {
      title: language === "pt" ? "Ensaio Grupo Adultos" : "Probe Erwachsenengruppe",
      schedule: language === "pt" 
        ? "Todos os Domingos (menos Feriados) das 10:00 - 11:30"
        : "Jeden Sonntag (außer an Feiertagen) von 10:00 - 11:30",
      image: "/images/activity/ensaios/ensaioadultos.png",
    },
    {
      title: language === "pt" ? "Ensaio Grupo Crianças" : "Probe Kindergruppe",
      schedule: language === "pt"
        ? "Todos os Domingos das 11:30 às 13:00"
        : "Jeden Sonntag von 11:30 bis 13:00 Uhr",
      image: "/images/activity/ensaios/ensaiocriancas.png",
    }
  ];
};
