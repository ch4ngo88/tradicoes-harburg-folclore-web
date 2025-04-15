import { useState } from "react";

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
  
  return (
    <div
      key={member.id}
      className="member-card max-w-[240px]"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div className="member-card-image-container h-[240px]">
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-t-lg"></div>
        )}
        <img
          src={hoveredMember === member.id ? member.costumeImage : member.regularImage}
          alt={member.name}
          className={`member-card-image object-cover w-full h-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          width="240" 
          height="240"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="member-card-overlay">
          <div className="text-white p-4 w-full">
            <p className="font-bold">{member.name}</p>
            <p className="text-sm text-white/90">{member.role}</p>
            {member.description && (
              <p className="text-xs mt-1 text-white/70">
                {member.description}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="member-card-info">
        <h4 className="font-semibold text-seagreen">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
