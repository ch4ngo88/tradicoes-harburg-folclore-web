import OptimizedImage from "@/components/OptimizedImage";
import { useCanHover } from "@/hooks/use-can-hover";

type MemberData = {
  id: number;
  name: string;
  role: string;
  regularImage: string;
  costumeImage: string;
  description?: string;
  category: "leadership" | "music" | "dancers";
  hoverText?: string;
};

interface MemberCardProps {
  member: MemberData;
  hoveredMember: number | null;
  setHoveredMember: (id: number | null) => void;
}

const MemberCard = ({
  member,
  hoveredMember,
  setHoveredMember,
}: MemberCardProps) => {
  const canHover = useCanHover();

  const handleInteraction = () => {
    if (hoveredMember === member.id) {
      setHoveredMember(null);
    } else {
      setHoveredMember(member.id);
    }
  };

  const isHovered = hoveredMember === member.id;

  const showRole = member.category !== "dancers";

  return (
    <div
      className="relative w-[200px] h-[300px] flex flex-col items-center justify-start bg-white rounded-xl overflow-hidden shadow-md cursor-pointer mb-6"
      onMouseEnter={() => canHover && setHoveredMember(member.id)}
      onMouseLeave={() => canHover && setHoveredMember(null)}
      onClick={() => !canHover && handleInteraction()}
    >
      <div className="relative w-full h-[70%] overflow-hidden">
        <OptimizedImage
          src={isHovered ? member.costumeImage : member.regularImage}
          alt={
            isHovered
              ? `${member.name} in traditioneller portugiesischer Tracht als ${member.role}`
              : `${member.name} - ${member.role} bei Rancho Folclórico Tradições Portuguesas`
          }
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${isHovered ? "scale-105" : "scale-100"}`}
        />
        {isHovered && member.hoverText && (
          <div className="absolute bottom-0 left-0 w-full bg-seagreen/80 text-white text-center text-sm font-semibold py-2 px-1 z-10">
            {member.hoverText}
          </div>
        )}
      </div>
      <div className="w-full h-[30%] flex flex-col items-center justify-center px-2 py-2">
        <h4 className="text-seagreen font-semibold text-base text-center">
          {member.name}
        </h4>
        {showRole && (
          <p className="text-gray-600 text-sm text-center mt-1">
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
