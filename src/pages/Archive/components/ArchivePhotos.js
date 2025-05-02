import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Grid2X2, Images } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import PhotoGalleryItem from "./PhotoGalleryItem";
const ArchivePhotos = ({ images, imagesLoaded }) => {
    const [isGridView, setIsGridView] = useState(false);
    const { language } = useLanguage();
    return (_jsxs("div", { className: "w-full max-w-5xl mx-auto mb-12 animate-fade-in", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h2", { className: "text-xl font-bold text-portuguesered", children: language === "pt" ? "Galeria de Fotos" : "Fotogalerie" }), _jsxs("div", { className: "flex items-center gap-3 bg-white/90 px-3 py-1.5 rounded-full shadow-sm", children: [_jsxs("div", { className: "flex items-center text-gray-700", children: [_jsx(Images, { size: 18, "aria-hidden": "true" }), _jsx("span", { className: "sr-only", children: "Karussell-Ansicht" })] }), _jsx(Switch, { checked: isGridView, onCheckedChange: setIsGridView, className: "data-[state=checked]:bg-seagreen data-[state=checked]:border-seagreen focus-visible:ring-2 focus-visible:ring-seagreen", id: "view-switch", "aria-label": isGridView
                                    ? "Zur Karussell-Ansicht wechseln"
                                    : "Zur Rasteransicht wechseln" }), _jsxs("div", { className: "flex items-center text-gray-700", children: [_jsx(Grid2X2, { size: 18, "aria-hidden": "true" }), _jsx("span", { className: "sr-only", children: "Rasteransicht" })] })] })] }), _jsx("div", { className: "bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg", children: isGridView ? (_jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3", children: imagesLoaded &&
                        images.map((image, index) => (_jsx(PhotoGalleryItem, { image: image, index: index }, index))) })) : (_jsxs(Carousel, { className: "w-full", children: [imagesLoaded ? (_jsx(CarouselContent, { children: images.map((image, index) => (_jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3 p-1", children: _jsx(PhotoGalleryItem, { image: image, index: index }) }, index))) })) : (_jsx("div", { className: "flex justify-center items-center w-full h-64", children: _jsx("div", { className: "w-12 h-12 border-4 border-seagreen border-t-transparent rounded-full animate-spin" }) })), _jsx(CarouselPrevious, { className: "left-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm focus:ring-2 focus:ring-white/50" }), _jsx(CarouselNext, { className: "right-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm focus:ring-2 focus:ring-white/50" })] })) })] }));
};
export default ArchivePhotos;
