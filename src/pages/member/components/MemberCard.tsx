
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import OptimizedImage from "@/components/OptimizedImage";

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

const MemberCard = ({ member, hoveredMember, setHoveredMember }: MemberCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  const handleInteraction = () => {
    if (hoveredMember === member.id) {
      setHoveredMember(null);
    } else {
      setHoveredMember(member.id);
    }
  };

  // Default hover text if not provided
  const displayHoverText = member.hoverText || 
    (member.name === "Marco da Silva" ? "Ribatejo" : "");
  
  const isHovered = hoveredMember === member.id;
  
  // Don't show role for dancers
  const showRole = member.category !== "dancers";
  
  return (
    <div
      className="member-card max-w-full"
      onMouseEnter={() => !isMobile && setHoveredMember(member.id)}
      onMouseLeave={() => !isMobile && setHoveredMember(null)}
      onClick={() => isMobile && handleInteraction()}
    >
      <div className="member-card-image-container w-full">
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-t-lg"></div>
        )}
        <OptimizedImage
          src={isHovered ? member.costumeImage : member.regularImage}
          alt={member.name}
          className="member-card-image object-cover rounded-t-lg"
          loading="lazy"
          width="200" 
          height="200"
          onLoad={() => setImageLoaded(true)}
        />
        {isHovered && displayHoverText && (
          <div className="absolute bottom-0 left-0 w-full bg-seagreen/70 text-white text-center py-2 px-1">
            {displayHoverText}
          </div>
        )}
        <div className={`member-card-overlay rounded-t-lg ${isHovered ? 'opacity-0' : 'opacity-30'}`} />
      </div>
      <div className="member-card-info">
        <h4 className="font-semibold text-seagreen line-clamp-2 text-base">{member.name}</h4>
        {showRole && <p className="text-sm text-gray-600 line-clamp-1 mt-1">{member.role}</p>}
      </div>
    </div>
  );
};

export default MemberCard;
