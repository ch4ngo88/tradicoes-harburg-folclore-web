
import { useLanguage } from "@/hooks/useLanguage";

export type MemberData = {
  id: number;
  name: string;
  role: string;
  regularImage: string;
  costumeImage: string;
  description?: string;
  category: "leadership" | "music" | "dancers";
};

export const useMembersData = (): MemberData[] => {
  const { language } = useLanguage();
  
  return [
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
};
