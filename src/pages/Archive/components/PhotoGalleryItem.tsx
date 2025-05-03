import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

interface PhotoGalleryItemProps {
  image: string;
  index: number;
}

const PhotoGalleryItem = ({ image }: PhotoGalleryItemProps) => {
  const getDescriptiveAlt = (imagePath: string) => {
    const fileName = imagePath.split("/").pop()?.split(".")[0];
    if (!fileName)
      return "Archivbild von Rancho Folclórico Tradições Portuguesas";

    const imageDescriptions: Record<string, string> = {
      "1": "Historische Aufnahme der Tanzgruppe bei einer traditionellen Aufführung",
      "2": "Gruppenfoto der Mitglieder in traditionellen Trachten",
    };

    return (
      imageDescriptions[fileName] ||
      "Historisches Archivbild der portugiesischen Tanzgruppe in Hamburg"
    );
  };

  const isAbsolute = image.startsWith("http");
  const fullSrc = isAbsolute
    ? image
    : `${import.meta.env.BASE_URL}${image.replace(/^\/+/, "")}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="photo-grid-item h-full aspect-square cursor-pointer">
          <img
            src={fullSrc}
            alt={getDescriptiveAlt(image)}
            className="gallery-photo w-full h-full object-cover rounded-md"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <img
          src={fullSrc}
          alt={getDescriptiveAlt(image)}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGalleryItem;
