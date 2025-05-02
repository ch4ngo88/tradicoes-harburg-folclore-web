import { useLanguage } from "@/hooks/useLanguage";
export const useMembersData = () => {
    const { language } = useLanguage();
    const members = [
        {
            id: 1,
            name: "Marco da Silva Dácio",
            role: language === "pt"
                ? "Responsável e Ensaiador Rancho Adulto"
                : "Leiter und Tanztrainer Erwachsenengruppe",
            regularImage: "/images/members/marco1.png",
            costumeImage: "/images/members/marco2.png",
            category: "leadership",
            hoverText: "Ribatejo",
        },
        {
            id: 2,
            name: "Mariana Marcelo Rodrigues",
            role: language === "pt"
                ? "Responsável e Ensaiadora Rancho Adulto"
                : "Leiterin und Tanztrainerin Erwachsenengruppe",
            regularImage: "/images/members/mariana1.png",
            costumeImage: "/images/members/mariana2.png",
            category: "leadership",
            hoverText: "Alentejo",
        },
        {
            id: 3,
            name: "Vanessa Matos",
            role: language === "pt" ? "Social Media" : "Social Media",
            regularImage: "/images/members/vanessa1.png",
            costumeImage: "/logo.png",
            category: "leadership",
            hoverText: "Ribatejo",
        },
        {
            id: 4,
            name: "Yahima Rodriguez Rodriguez",
            role: language === "pt" ? "Dançarina" : "Tänzerin",
            regularImage: "/images/members/yahima1.png",
            costumeImage: "/images/members/yahima2.png",
            category: "dancers",
            hoverText: "Beira-Baixa",
        },
        {
            id: 5,
            name: "Marta da Silva Dácio",
            role: language === "pt" ? "Interne Kommunikation" : "Comunicação interna",
            regularImage: "/images/members/marta1.png",
            costumeImage: "/logo.png",
            category: "leadership",
            hoverText: "Ribatejo",
        },
        {
            id: 6,
            name: "Neuza da Silva Rodriguez Dácio",
            role: language === "pt" ? "Dançarina" : "Tänzerin",
            regularImage: "/images/members/neuza1.png",
            costumeImage: "/images/members/neuza2.png",
            category: "dancers",
            hoverText: "Ribatejo",
        },
        {
            id: 7,
            name: "Alecio Ferreira",
            role: language === "pt" ? "Dançarino" : "Tänzer",
            regularImage: "logo.png",
            costumeImage: "/images/members/alecio2.png",
            category: "dancers",
            hoverText: "Estremadura",
        },
        {
            id: 8,
            name: "Raquel Bastos Rodrigues",
            role: language === "pt" ? "Dançarina" : "Tänzerin",
            regularImage: "/images/members/raquel1.png",
            costumeImage: "/images/members/raquel2.png",
            category: "dancers",
            hoverText: "Ribatejo",
        },
        {
            id: 9,
            name: "Sabrina Sena",
            role: language === "pt"
                ? "Eventos e Relações Externas"
                : "Events & Außenbeziehungen",
            regularImage: "logo.png",
            costumeImage: "logo.png",
            category: "leadership",
            hoverText: "Estremadura",
        },
    ];
    return members.sort((a, b) => a.name.localeCompare(b.name, language === "pt" ? "pt" : "de"));
};
