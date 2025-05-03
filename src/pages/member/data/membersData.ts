import { useLanguage } from "@/hooks/useLanguage";
import { asset } from "@/lib/asset";

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

  const members: MemberData[] = [
    {
      id: 1,
      name: "Marco da Silva Dácio",
      role:
        language === "pt"
          ? "Responsável e Ensaiador Rancho Adulto"
          : "Leiter und Tanztrainer Erwachsenengruppe",
      regularImage: asset("images/members/marco1.webp"),
      costumeImage: asset("images/members/marco2.webp"),
      category: "leadership",
      hoverText: "Ribatejo",
    },
    {
      id: 2,
      name: "Mariana Marcelo Rodrigues",
      role:
        language === "pt"
          ? "Responsável e Ensaiadora Rancho Adulto"
          : "Leiterin und Tanztrainerin Erwachsenengruppe",
      regularImage: asset("images/members/mariana1.webp"),
      costumeImage: asset("images/members/mariana2.webp"),
      category: "leadership",
      hoverText: "Alentejo",
    },
    {
      id: 3,
      name: "Vanessa Matos",
      role: language === "pt" ? "Social Media" : "Social Media",
      regularImage: asset("images/members/vanessa1.webp"),
      costumeImage: asset("logo.png"),
      category: "leadership",
      hoverText: "Ribatejo",
    },
    {
      id: 4,
      name: "Yahima Rodriguez Rodriguez",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: asset("images/members/yahima1.webp"),
      costumeImage: asset("images/members/yahima2.webp"),
      category: "dancers",
      hoverText: "Beira-Baixa",
    },
    {
      id: 5,
      name: "Marta da Silva Dácio",
      role: language === "pt" ? "Comunicação interna" : "Interne Kommunikation" ,
      regularImage: asset("images/members/marta1.webp"),
      costumeImage: asset("logo.png"),
      category: "leadership",
      hoverText: "Ribatejo",
    },
    {
      id: 6,
      name: "Neuza da Silva Rodriguez Dácio",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: asset("images/members/neuza1.webp"),
      costumeImage: asset("images/members/neuza2.webp"),
      category: "dancers",
      hoverText: "Ribatejo",
    },
    {
      id: 7,
      name: "Alecio Ferreira",
      role: language === "pt" ? "Dançarino" : "Tänzer",
      regularImage: asset("logo.png"),
      costumeImage: asset("images/members/alecio2.webp"),
      category: "dancers",
      hoverText: "Estremadura",
    },
    {
      id: 8,
      name: "Raquel Bastos Rodrigues",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: asset("images/members/raquel1.webp"),
      costumeImage: asset("images/members/raquel2.webp"),
      category: "dancers",
      hoverText: "Ribatejo",
    },
    {
      id: 9,
      name: "Sabrina Sena",
      role:
        language === "pt"
          ? "Eventos e Relações Externas"
          : "Events & Außenbeziehungen",
      regularImage: asset("logo.png"),
      costumeImage: asset("logo.png"),
      category: "leadership",
      hoverText: "Estremadura",
    },
    {
      id: 10,
      name: "Sr. Gabriel",
      role: language === "pt" ? "Dançarina" : "Tänzerin",
      regularImage: asset("logo.png"),
      costumeImage: asset("logo.png"),
      category: "music",
      hoverText: "Alentejo",
    },
    {
      id: 11,
      name: "Adriana Rodrigues",
      role: language === "pt" ? "Acordeão" : "Akkordeon",
      regularImage: asset("images/members/adri1.webp"),
      costumeImage: asset("logo.png"),
      category: "dancers",
      hoverText: "Ribatejo",
    },
  ];
  return members.sort((a, b) =>
    a.name.localeCompare(b.name, language === "pt" ? "pt" : "de"),
  );
};
