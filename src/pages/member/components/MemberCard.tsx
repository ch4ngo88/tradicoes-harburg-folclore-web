
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
        <div className={`member-card-overlay rounded-t-lg ${hoveredMember === member.id ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      <div className="member-card-info">
        <h4 className="font-semibold text-seagreen">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
