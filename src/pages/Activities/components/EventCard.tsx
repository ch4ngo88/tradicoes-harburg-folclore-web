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
    <div className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row card-hover h-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="md:w-1/3 relative cursor-pointer h-[250px]">
            {event.image && (
              <>
                {event.image.endsWith(".mp4") ? (
                  <video
                    src={event.image}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover aspect-video"
                    aria-label={`Event Video: ${event.title} am ${event.date} in ${event.location}`}
                  />
                ) : (
                  <img
                    src={event.image}
                    alt={`${event.title} - ${language === "pt" ? "Evento em" : "Veranstaltung in"} ${event.location} ${language === "pt" ? "no dia" : "am"} ${new Date(
                      event.date,
                    ).toLocaleDateString(
                      language === "pt" ? "pt-PT" : "de-DE",
                      { day: "numeric", month: "long", year: "numeric" },
                    )}`}
                    className="w-full h-full object-cover aspect-video"
                  />
                )}
                {event.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-2 animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                )}
              </>
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
        </DialogTrigger>
        <DialogContent className="p-0 max-w-2xl">
          <div className="w-full">
            {event.video ? (
              <video controls className="w-full h-full max-h-[70vh]">
                <source src={event.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain"
                />
              )
            )}
          </div>
        </DialogContent>
      </Dialog>
      <div className="p-6 md:w-2/3 flex flex-col justify-between h-full">
        <div>
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
        </div>
        {event.id === 1 && (
          <a
            href="https://diadeportugal.ticket.io/eg0vus7w/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 button-secondary min-w-[200px] text-center self-start"
          >
            {language === "pt" ? "Comprar Bilhetes" : "Tickets kaufen"}
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;



