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
      source: "/images/activity/news/info.jpg",
      title: language === "pt" ? "Folheto Informativo" : "Information Flyer",
    },
    {
      type: "video",

      source: "/images/activity/news/kinder.mp4",
      title: language === "pt" ? "Vídeo das Crianças" : "Kinder Video",
    },
    {
      type: "video",
      source: "/images/activity/news/tiktok.mp4",
      title: "TikTok",
    },
  ];
};

export const useUpcomingEvents = (): EventType[] => {
  const { language } = useLanguage();

  return [
    {
      id: 1,
      title: "31. Portugiesisches Folklore Festival - Dia de Portugal",
      date: "2025-06-14",
      image: "/images/activity/next/diadeportugal.mp4",
      video: "/images/activity/next/diadeportugal.mp4",
      description:
        language === "pt"
          ? "Celebração do Dia de Portugal com o 31º Festival de Folclore Português. Live Band: NOVO SOM e diretamente de Portugal: Claudia Martins & Minhotos Marotos. Comida, bebida, música, folclore e atividades para crianças. Horário: 12:00 - 22:00."
          : "31. Portugiesisches Folklore Festival mit Live Band NOVO SOM und direkt aus Portugal: Claudia Martins & Minhotos Marotos. Von 12:00 bis 22:00 Uhr gibt es Essen, Trinken, Musik, Folklore und Aktivitäten für Kinder.",
      location: "Landhaus Walter, Otto-Wels-Straße 2, 22303 Hamburg",
    },
    {
      id: 2,
      title:
        language === "pt"
          ? "Harburg Feiert Vielfalt"
          : "Harburg Feiert Vielfalt",
      date: "2025-07-06",
      image: "/images/activity/next/harburgvielfalt.jpg", // placeholder image
      description:
        language === "pt"
          ? "Apresentação em cooperação com o Kulturpalast Harburg no evento 'Harburg Feiert Vielfalt'"
          : "Auftritt in Kooperation mit dem Kulturpalast Harburg bei 'Harburg Feiert Vielfalt'",
      location: "Harburger Rathausplatz, 21073 Hamburg",
    },
  ];
};

export const useEnsaios = (): EnsaioType[] => {
  const { language } = useLanguage();

  return [
    {
      title:
        language === "pt" ? "Ensaio Grupo Adultos" : "Probe Erwachsenengruppe",
      schedule:
        language === "pt"
          ? "Todos os Domingos (menos Feriados) das 11:00 - 12:30"
          : "Jeden Sonntag (außer an Feiertagen) von 11:00 - 12:30",
      image: "/images/activity/ensaios/ensaioadultos.png",
    },
    {
      title: language === "pt" ? "Ensaio Grupo Crianças" : "Probe Kindergruppe",
      schedule:
        language === "pt"
          ? "Todos os Domingos (menos Feriados) das 12:30 às 14:00"
          : "Jeden Sonntag (außer an Feiertagen) von 12:30 bis 14:00 Uhr",
      image: "/images/activity/ensaios/ensaiocriancas.png",
    },
  ];
};



