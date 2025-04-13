
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect, lazy, Suspense } from "react";
import { Users, UserRound, Music } from "lucide-react";
import CustomDancingIcon from "./components/DancingIcon";
import MemberSection from "./components/MemberSection";
import { useMembersData } from "./data/membersData";

const Avatar = lazy(() => import("@/components/ui/avatar").then(module => ({ default: module.Avatar })));
const AvatarImage = lazy(() => import("@/components/ui/avatar").then(module => ({ default: module.AvatarImage })));
const AvatarFallback = lazy(() => import("@/components/ui/avatar").then(module => ({ default: module.AvatarFallback })));

const Membros = () => {
  const { language } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const members = useMembersData();

  useEffect(() => {
    const loadSections = () => {
      setVisibleSections(["leadership"]);
      
      setTimeout(() => {
        setVisibleSections(prev => [...prev, "music"]);
      }, 300);
      
      setTimeout(() => {
        setVisibleSections(prev => [...prev, "dancers"]);
      }, 600);
    };
    
    loadSections();
  }, []);

  const leadershipMembers = members.filter(
    (member) => member.category === "leadership",
  );
  const musicMembers = members.filter((member) => member.category === "music");
  const dancerMembers = members.filter(
    (member) => member.category === "dancers",
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="section-title text-left">
            {language === "pt" ? "Nossa Equipe" : "Unser Team"}
          </h2>
        </div>

        <MemberSection
          title={language === "pt" ? "Direção" : "Leitung"}
          icon={UserRound}
          members={leadershipMembers}
          isVisible={visibleSections.includes("leadership")}
          hoveredMember={hoveredMember}
          setHoveredMember={setHoveredMember}
        />

        <MemberSection
          title={language === "pt" ? "Coro" : "Chor"}
          icon={Music}
          members={musicMembers}
          isVisible={visibleSections.includes("music")}
          hoveredMember={hoveredMember}
          setHoveredMember={setHoveredMember}
        />

        <MemberSection
          title={language === "pt" ? "Dançarinos" : "Tänzer/innen"}
          icon={CustomDancingIcon}
          members={dancerMembers}
          isVisible={visibleSections.includes("dancers")}
          hoveredMember={hoveredMember}
          setHoveredMember={setHoveredMember}
        />
      </div>
    </div>
  );
};

export default Membros;
