
import { useLanguage } from "@/hooks/useLanguage";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type EventType = {
  id: number;
  title: string;
  date: string;
  image?: string;
  video?: string;
  description: string;
  location: string;
};

interface EventCardProps {
  event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
  const { language } = useLanguage();
  
  return (
    <div
      key={event.id}
      className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row card-hover"
    >
      <div className="md:w-1/3 relative">
        {event.video ? (
          <div className="w-full h-full object-cover aspect-video">
            <video 
              src={event.video} 
              controls 
              poster={event.image} 
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : event.image && (
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer w-full h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-4xl border-none">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </DialogContent>
          </Dialog>
        )}
        <div className="absolute top-0 left-0 bg-seagreen text-white px-4 py-2 rounded-br-lg font-medium">
          {new Date(event.date).toLocaleDateString(
            language === "pt" ? "pt-PT" : "de-DE",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            },
          )}
        </div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-portuguesered mb-2">
          {event.title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700">{event.description}</p>

        <button className="mt-4 button-secondary self-start">
          {language === "pt"
            ? "Mais Informações"
            : "Mehr Informationen"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
