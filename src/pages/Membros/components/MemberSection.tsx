
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
    className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <div className="flex items-center gap-2 mb-6">
      <Icon className="text-seagreen" />
      <h3 className="text-xl font-bold text-seagreen">{title}</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
