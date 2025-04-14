
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

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

const NewsItem = ({ item }: NewsItemProps) => {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative overflow-hidden rounded-lg shadow-md bg-white/90 card-hover cursor-pointer h-36 sm:h-40">
          <div className="aspect-auto h-2/3">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {item.type === "video" && (
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
            )}
          </div>
          <div className="p-2">
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
        <div className="w-full">
          {item.type === "video" ? (
            <video controls className="w-full h-full">
              <source src={item.source} type="video/mp4" />
              {t("videoNotSupported")}
            </video>
          ) : (
            <img
              src={item.source}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-seagreen">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsItem;
