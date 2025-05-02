import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OptimizedImage from "@/components/OptimizedImage";
import { useCanHover } from "@/hooks/use-can-hover";
const MemberCard = ({ member, hoveredMember, setHoveredMember, }) => {
    const canHover = useCanHover();
    const handleInteraction = () => {
        if (hoveredMember === member.id) {
            setHoveredMember(null);
        }
        else {
            setHoveredMember(member.id);
        }
    };
    const isHovered = hoveredMember === member.id;
    const showRole = member.category !== "dancers";
    return (_jsxs("div", { className: "relative w-[200px] h-[300px] flex flex-col items-center justify-start bg-white rounded-xl overflow-hidden shadow-md cursor-pointer mb-6 transform scale-[0.75] sm:scale-100", onMouseEnter: () => canHover && setHoveredMember(member.id), onMouseLeave: () => canHover && setHoveredMember(null), onClick: () => !canHover && handleInteraction(), children: [_jsxs("div", { className: "relative w-full h-[70%] overflow-hidden", children: [_jsx(OptimizedImage, { src: isHovered ? member.costumeImage : member.regularImage, alt: isHovered
                            ? `${member.name} in traditioneller portugiesischer Tracht als ${member.role}`
                            : `${member.name} - ${member.role} bei Rancho Folclórico Tradições Portuguesas`, className: `w-full h-full object-cover transition-transform duration-500 ease-in-out ${isHovered ? "scale-105" : "scale-100"}` }), isHovered && member.hoverText && (_jsx("div", { className: "absolute bottom-0 left-0 w-full bg-seagreen/80 text-white text-center text-sm font-semibold py-2 px-1 z-10", children: member.hoverText }))] }), _jsxs("div", { className: "w-full h-[30%] flex flex-col items-center justify-center px-2 py-2", children: [_jsx("h4", { className: "text-seagreen font-semibold text-base text-center", children: member.name }), showRole && (_jsx("p", { className: "text-gray-600 text-sm text-center mt-1", children: member.role }))] })] }));
};
export default MemberCard;
