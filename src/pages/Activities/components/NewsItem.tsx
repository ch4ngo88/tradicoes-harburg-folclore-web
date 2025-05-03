import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { asset } from "@/lib/asset";

export type NewsItemType = {
  type: "image" | "video";
  thumbnail?: string;
  source: string;
  title: string;
};

interface NewsItemProps {
  item: NewsItemType;
  index: number;
}

const NewsItem = ({ item }: NewsItemProps) => {
  /* ---------- Pfade angleichen ---------- */
  const src = asset(item.source);
  const thumbnailSrc = asset(item.thumbnail || item.source);

  /* ---------- Alt‑ & Aria‑Texte ---------- */
  const altThumb = `Neuigkeiten: ${item.title}`;
  const altFull =
    item.type === "video" ? `Video: ${item.title}` : item.title;

  return (
    <Dialog>
      {/* ---------- Thumbnail / Trigger ---------- */}
      <DialogTrigger asChild>
        <div className="relative overflow-hidden rounded-lg shadow-md bg-white/90 card-hover cursor-pointer h-24">
          <div className="aspect-auto h-full relative">
            {item.type === "video" ? (
              <video
                src={src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label={altFull}
              />
            ) : (
              <img
                src={thumbnailSrc}
                alt={altThumb}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}

            {/* Play‑Icon-Overlay für Videos */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>

      {/* ---------- Modal ---------- */}
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <DialogTitle asChild>
          <h3 className="sr-only">{item.title}</h3>
        </DialogTitle>
        <DialogDescription asChild>
          <p className="sr-only">
            {item.type === "video" ? "Video" : "Bild"} – {item.title}
          </p>
        </DialogDescription>

        {item.type === "video" ? (
          <video controls autoPlay className="w-full max-h-[70vh]">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={src}
            alt={altFull}
            className="w-full max-h-[70vh] object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsItem;
