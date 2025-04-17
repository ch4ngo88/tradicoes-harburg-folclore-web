
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  
  return (
    <div
      key={member.id}
      className="member-card max-w-full"
      onMouseEnter={() => !isMobile && setHoveredMember(member.id)}
      onMouseLeave={() => !isMobile && setHoveredMember(null)}
      onClick={() => isMobile && handleInteraction()}
    >
      <div className="member-card-image-container w-full h-auto aspect-square">
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-t-lg"></div>
        )}
        <img
          src={hoveredMember === member.id ? member.costumeImage : member.regularImage}
          alt={member.name}
          className={`member-card-image object-cover w-full h-full rounded-t-lg ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          width="180" 
          height="180"
          onLoad={() => setImageLoaded(true)}
        />
        {hoveredMember === member.id && displayHoverText && (
          <div className="absolute bottom-0 left-0 w-full bg-seagreen/70 text-white text-center py-2 px-1">
            {displayHoverText}
          </div>
        )}
        <div className={`member-card-overlay rounded-t-lg ${hoveredMember === member.id ? 'opacity-0' : 'opacity-30'}`} />
      </div>
      <div className="member-card-info">
        <h4 className="font-semibold text-seagreen">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
