
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect, lazy, Suspense } from "react";
import { Users, UserRound, Music } from "lucide-react";

// Custom dancing icon component that's more appropriate for dancers
const CustomDancingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="2" />
    <path d="m15 22-3-9-3 9" />
    <path d="M15 8v2l-3 1-3-1V8Z" />
    <path d="m9 22 1-14" />
    <path d="m15 22-1-14" />
    <path d="M12 8v14" />
    <path d="m7 6 1 2c.7 1.3 2.3 1.3 3 0 .7-1.3 2.3-1.3 3 0l1-2" />
  </svg>
);

// Lazy load Avatar components
const Avatar = lazy(() => import("@/components/ui/avatar").then(module => ({ default: module.Avatar })));
const AvatarImage = lazy(() => import("@/components/ui/avatar").then(module => ({ default: module.AvatarImage })));
const AvatarFallback = lazy(() => import("@/components/ui/avatar").then(module => ({ default: module.AvatarFallback })));

type MemberData = {
  id: number;
  name: string;
  role: string;
  regularImage: string;
  costumeImage: string;
  description?: string;
  category: "leadership" | "music" | "dancers";
};

const Membros = () => {
  const { language } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // Member data with added category property
  const members: MemberData[] = [
    {
      id: 1,
      name: "Maria Silva",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/images/member-1.jpg",
      costumeImage: "/images/member-1-costume.jpg",
      description:
        language === "pt" ? "Membro desde 2015" : "Mitglied seit 2015",
      category: "dancers",
    },
    {
      id: 2,
      name: "João Santos",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/images/member-2.jpg",
      costumeImage: "/images/member-2-costume.jpg",
      description:
        language === "pt" ? "Membro desde 2010" : "Mitglied seit 2010",
      category: "music",
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/images/member-3.jpg",
      costumeImage: "/images/member-3-costume.jpg",
      description:
        language === "pt" ? "Membro desde 2018" : "Mitglied seit 2018",
      category: "dancers",
    },
    {
      id: 4,
      name: "Pedro Almeida",
      role: language === "pt" ? "Diretor" : "Direktor",
      regularImage: "/images/member-4.jpg",
      costumeImage: "/images/member-4-costume.jpg",
      description:
        language === "pt" ? "Membro desde 2014" : "Mitglied seit 2014",
      category: "leadership",
    },
    {
      id: 5,
      name: "Sofia Costa",
      role: language === "pt" ? "Presidente" : "Präsidentin",
      regularImage: "/images/logo.jpg",
      costumeImage: "/images/logo.jpg",
      description:
        language === "pt" ? "Membro desde 2019" : "Mitglied seit 2019",
      category: "leadership",
    },
    {
      id: 6,
      name: "Manuel Ferreira",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/images/logo.jpg",
      costumeImage: "/images/logo.jpg",
      description:
        language === "pt" ? "Membro desde 2017" : "Mitglied seit 2017",
      category: "music",
    },
    {
      id: 7,
      name: "Inês Oliveira",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/images/logo.jpg",
      costumeImage: "/images/logo.jpg",
      description:
        language === "pt" ? "Membro desde 2020" : "Mitglied seit 2020",
      category: "dancers",
    },
    {
      id: 8,
      name: "Ricardo Santos",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/images/logo.jpg",
      costumeImage: "/images/logo.jpg",
      description:
        language === "pt" ? "Membro desde 2016" : "Mitglied seit 2016",
      category: "music",
    },
  ];

  // Implement progressive loading of sections
  useEffect(() => {
    const loadSections = () => {
      // First load leadership section
      setVisibleSections(["leadership"]);
      
      // Load music section after a delay
      setTimeout(() => {
        setVisibleSections(prev => [...prev, "music"]);
      }, 300);
      
      // Load dancers section last
      setTimeout(() => {
        setVisibleSections(prev => [...prev, "dancers"]);
      }, 600);
    };
    
    loadSections();
  }, []);

  // Filter members by category
  const leadershipMembers = members.filter(
    (member) => member.category === "leadership",
  );
  const musicMembers = members.filter((member) => member.category === "music");
  const dancerMembers = members.filter(
    (member) => member.category === "dancers",
  );

  // Component for displaying a member card with optimized image loading
  const MemberCard = ({ member }: { member: MemberData }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
      <div
        key={member.id}
        className="member-card"
        onMouseEnter={() => setHoveredMember(member.id)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        <div className="member-card-image-container">
          {!imageLoaded && (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-t-lg"></div>
          )}
          <img
            src={hoveredMember === member.id ? member.costumeImage : member.regularImage}
            alt={member.name}
            className={`member-card-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
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

  // Component for displaying a section of members
  const MemberSection = ({
    title,
    icon: Icon,
    members,
    isVisible
  }: {
    title: string;
    icon: React.ElementType;
    members: MemberData[];
    isVisible: boolean;
  }) => (
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
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title inline-block">
            {language === "pt" ? "Nossa Equipe" : "Unser Team"}
          </h2>
        </div>

        {/* Leadership Section */}
        <MemberSection
          title={language === "pt" ? "Direção" : "Leitung"}
          icon={UserRound}
          members={leadershipMembers}
          isVisible={visibleSections.includes("leadership")}
        />

        {/* Music Section */}
        <MemberSection
          title={language === "pt" ? "Coro" : "Chor"}
          icon={Music}
          members={musicMembers}
          isVisible={visibleSections.includes("music")}
        />

        {/* Dancers Section */}
        <MemberSection
          title={language === "pt" ? "Dançarinos" : "Tänzer/innen"}
          icon={CustomDancingIcon}
          members={dancerMembers}
          isVisible={visibleSections.includes("dancers")}
        />
      </div>
    </div>
  );
};

export default Membros;
