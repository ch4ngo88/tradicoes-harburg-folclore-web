import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
const PhotoGalleryItem = ({ image }) => {
    const getDescriptiveAlt = (imagePath) => {
        const fileName = imagePath.split("/").pop()?.split(".")[0];
        if (!fileName)
            return "Archivbild von Rancho Folclórico Tradições Portuguesas";
        const imageDescriptions = {
            "1": "Historische Aufnahme der Tanzgruppe bei einer traditionellen Aufführung",
            "2": "Gruppenfoto der Mitglieder in traditionellen Trachten",
        };
        return (imageDescriptions[fileName] ||
            "Historisches Archivbild der portugiesischen Tanzgruppe in Hamburg");
    };
    return (_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("div", { className: "photo-grid-item h-full aspect-square cursor-pointer", children: _jsx("img", { src: image, alt: getDescriptiveAlt(image), className: "gallery-photo w-full h-full object-cover rounded-md", loading: "lazy", width: "300", height: "300" }) }) }), _jsx(DialogContent, { className: "max-w-3xl p-0 overflow-hidden", children: _jsx("img", { src: image, alt: getDescriptiveAlt(image), className: "w-full h-auto max-h-[80vh] object-contain" }) })] }));
};
export default PhotoGalleryItem;
