
import React from "react";
import MemberCard from "./MemberCard";

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

interface MemberSectionProps {
  title: string;
  icon: React.ElementType;
  members: MemberData[];
  isVisible: boolean;
  hoveredMember: number | null;
  setHoveredMember: (id: number | null) => void;
}

const MemberSection = ({
  title,
  icon: Icon,
  members,
  isVisible,
  hoveredMember,
  setHoveredMember
}: MemberSectionProps) => (
  <div 
    className={`bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg mb-5 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <div className="flex items-center gap-2 mb-3 sm:mb-4">
      <Icon className="text-seagreen" />
      <h3 className="text-xl font-bold text-seagreen">{title}</h3>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 justify-items-center">
      {members.map((member) => (
        <MemberCard 
          key={member.id} 
          member={member} 
          hoveredMember={hoveredMember}
          setHoveredMember={setHoveredMember}
        />
      ))}
    </div>
  </div>
);

export default MemberSection;
