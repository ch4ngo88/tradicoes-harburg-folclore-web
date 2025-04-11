
import { useLanguage } from "@/hooks/useLanguage";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import { useNewsItems, useUpcomingEvents } from "./data/activitiesData";

const Activities = () => {
  const { language } = useLanguage();
  const newsItems = useNewsItems();
  const upcomingEvents = useUpcomingEvents();

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="section-title text-center">
        {language === "pt" ? "Atividades e Eventos" : "Aktivitäten und Events"}
      </h2>

      {/* News Section */}
      <NewsSection newsItems={newsItems} />

      {/* Events Calendar Section */}
      <EventsSection events={upcomingEvents} />
    </div>
  );
};

export default Activities;
