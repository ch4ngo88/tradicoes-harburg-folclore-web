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

  const displayHoverText = member.hoverText || 
    (member.name === "Marco da Silva" ? "Ribatejo" : "");
  
  const isHovered = hoveredMember === member.id;
  
  const showRole = member.category !== "dancers";

  const normalizeImagePath = (imagePath: string): string => {
    if (imagePath.startsWith('/')) {
      return imagePath; // Already absolute path
    } else if (imagePath.startsWith('http')) {
      return imagePath; // External URL
    } else {
      return `/images/members/${imagePath}`; // Add prefix for relative paths
    }
  };
  
  const regularImage = normalizeImagePath(member.regularImage);
  const costumeImage = normalizeImagePath(member.costumeImage);
  
  if (member.id === 1) { // Only log for first member to avoid console spam
    console.debug("Member image paths:", {
      regular: regularImage,
      costume: costumeImage,
      originalRegular: member.regularImage,
      originalCostume: member.costumeImage
    });
  }
  
  return (
    <div
      className="member-card mx-auto"
      style={{ width: '180px', height: '280px' }}
      onMouseEnter={() => !isMobile && setHoveredMember(member.id)}
      onMouseLeave={() => !isMobile && setHoveredMember(null)}
      onClick={() => isMobile && handleInteraction()}
    >
      <div className="member-card-image-container w-full" style={{ height: '180px' }}>
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-t-lg"></div>
        )}
        <OptimizedImage
          src={hoveredMember === member.id ? costumeImage : regularImage}
          alt={member.name}
          className="member-card-image object-cover rounded-t-lg"
          loading="lazy"
          width="180" 
          height="180"
          onLoad={() => setImageLoaded(true)}
        />
        {hoveredMember === member.id && displayHoverText && (
          <div className="absolute bottom-0 left-0 w-full bg-seagreen/70 text-white text-center py-1 px-1 text-xs">
            {displayHoverText}
          </div>
        )}
        <div className={`member-card-overlay rounded-t-lg ${hoveredMember === member.id ? 'opacity-0' : 'opacity-30'}`} />
      </div>
      <div className="member-card-info px-1 py-1">
        <h4 className="font-semibold text-seagreen line-clamp-2 text-sm">{member.name}</h4>
        {showRole && <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">{member.role}</p>}
      </div>
    </div>
  );
};

export default MemberCard;
