import { useLanguage } from "@/hooks/useLanguage";

export type MemberData = {
  id: number;
  name: string;
  role: string;
  regularImage: string;
  costumeImage: string;
  description?: string;
  category: "leadership" | "music" | "dancers";
  hoverText?: string;
};

export const useMembersData = (): MemberData[] => {
  const { language } = useLanguage();
  
  return [
    {
      id: 1,
      name: "Marco da Silva",
      role: language === "pt" ? "Diretor" : "Direktor",
      regularImage: "/images/members/marco1.png",
      costumeImage: "/images/members/marco2.png",
      category: "leadership",
      hoverText: "Ribatejo"
    },
    {
      id: 2,
      name: "Sofia Costa",
      role: language === "pt" ? "Presidente" : "Präsidentin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "leadership",
      hoverText: "Leadership"
    },
    {
      id: 3,
      name: "António Santos",
      role: language === "pt" ? "Vice-Presidente" : "Vize-Präsident",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "leadership",
      hoverText: "Leadership"
    },
    // ... weitere Members (alle mit logo.png + hoverText)
    // Ab hier kannst du copy-paste machen für die anderen

    {
      id: 4,
      name: "Maria Oliveira",
      role: language === "pt" ? "Tesoureira" : "Schatzmeisterin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "leadership",
      hoverText: "Leadership"
    },
    {
      id: 5,
      name: "José Ferreira",
      role: language === "pt" ? "Secretário" : "Sekretär",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "leadership",
      hoverText: "Leadership"
    },
    {
      id: 6,
      name: "Ana Rodrigues",
      role: language === "pt" ? "Coordenadora" : "Koordinatorin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "leadership",
      hoverText: "Leadership"
    },
    // Music/Choir
    {
      id: 7,
      name: "Manuel Ferreira",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
      hoverText: "Musiker"
    },
    {
      id: 8,
      name: "Ricardo Santos",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
      hoverText: "Musiker"
    },
    {
      id: 9,
      name: "Carla Pereira",
      role: language === "pt" ? "Cantora" : "Sängerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
    },
    {
      id: 10,
      name: "Paulo Silva",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
    },
    {
      id: 11,
      name: "Teresa Lima",
      role: language === "pt" ? "Cantora" : "Sängerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
    },
    {
      id: 12,
      name: "João Martins",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
    },
    {
      id: 13,
      name: "Beatriz Costa",
      role: language === "pt" ? "Cantora" : "Sängerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
    },
    {
      id: 14,
      name: "Miguel Sousa",
      role: language === "pt" ? "Músico" : "Musiker",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "music",
    },
    // Dancers (20)
    {
      id: 15,
      name: "Marta Silva",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
      hoverText: "Tänzerin"
    },
    {
      id: 16,
      name: "Pedro Santos",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    // ... Adding more dancers
    {
      id: 17,
      name: "Ana Soares",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 18,
      name: "Rui Costa",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 19,
      name: "Carolina Dias",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 20,
      name: "Francisco Oliveira",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 21,
      name: "Diana Ferreira",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 22,
      name: "André Martins",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 23,
      name: "Sofia Rodrigues",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 24,
      name: "Tiago Almeida",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 25,
      name: "Mariana Santos",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 26,
      name: "João Lima",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 27,
      name: "Inês Costa",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 28,
      name: "Miguel Pereira",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 29,
      name: "Catarina Silva",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 30,
      name: "Bruno Santos",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 31,
      name: "Rita Oliveira",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 32,
      name: "Paulo Ferreira",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 33,
      name: "Luísa Martins",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
    {
      id: 34,
      name: "Carlos Silva",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: "/logo.png",
      costumeImage: "/logo.png",
      category: "dancers",
    },
  ];
};
