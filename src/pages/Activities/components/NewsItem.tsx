
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";

export type NewsItemType = {
  type: "image" | "video";
  thumbnail: string;
  source: string;
  title: string;
};

interface NewsItemProps {
  item: NewsItemType;
  index: number;
}

const NewsItem = ({ item }: NewsItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative overflow-hidden rounded-lg shadow-md bg-white/90 card-hover cursor-pointer h-28">
          <div className="aspect-auto h-full">
            <img
              src={item.type === "video" ? item.source : item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full p-2">
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
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden">
        {item.type === "video" ? (
          <video controls autoPlay className="w-full max-h-[80vh]">
            <source src={item.source} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.source}
            alt={item.title}
            className="w-full max-h-[80vh] object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsItem;
