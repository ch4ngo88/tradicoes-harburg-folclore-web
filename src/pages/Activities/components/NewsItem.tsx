
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export type NewsItemType = {
  type: "image" | "video";
  thumbnail: string;
  source: string;
  title: string;
  description?: string;
};

interface NewsItemProps {
  item: NewsItemType;
  index: number;
}

const NewsItem = ({ item, index }: NewsItemProps) => {
  const { t } = useLanguage();
  
  // Create a dialog for image items to make them openable
  if (item.type === "image") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative overflow-hidden rounded-lg shadow-md bg-white/90 card-hover cursor-pointer h-48">
            <div className="aspect-auto h-full">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="font-medium text-seagreen text-sm">{item.title}</h4>
              {item.description && (
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{item.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {item.description || item.title}
          </DialogDescription>
          <img
            src={item.source}
            alt={item.title}
            className="w-full h-full object-contain"
          />
          <div className="p-4">
            <h4 className="font-semibold">{item.title}</h4>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">
                {item.description}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // For videos, keep the hover card but make it smaller
  return (
    <HoverCard key={index}>
      <HoverCardTrigger asChild>
        <div className="relative overflow-hidden rounded-lg shadow-md bg-white/90 card-hover cursor-pointer h-48">
          <div className="aspect-auto h-full">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 rounded-full p-2 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
          </div>
          <div className="p-3">
            <h4 className="font-medium text-seagreen text-sm">{item.title}</h4>
            {item.description && (
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 overflow-hidden">
        <div className="p-4">
          <h4 className="font-semibold">{item.title}</h4>
          {item.description && (
            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>
          )}
          <a
            href={item.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-seagreen hover:underline flex items-center gap-1 mt-3"
          >
            {t("openInNewTab")}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default NewsItem;
