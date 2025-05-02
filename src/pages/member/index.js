import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect, useMemo } from "react";
import { UserRound } from "lucide-react";
import CustomDancingIcon from "./components/DancingIcon";
import MemberSection from "./components/MemberSection";
import { useMembersData } from "./data/membersData";
const MembrosPage = () => {
    const { language } = useLanguage();
    const [hoveredMember, setHoveredMember] = useState(null);
    const [visibleSections, setVisibleSections] = useState([]);
    const members = useMembersData();
    // Filter members by category - memoized to prevent unnecessary recalculations
    const categorizedMembers = useMemo(() => ({
        leadership: members.filter((member) => member.category === "leadership"),
        music: members.filter((member) => member.category === "music"),
        dancers: members.filter((member) => member.category === "dancers"),
    }), [members]);
    useEffect(() => {
        // Staggered loading for better performance
        const loadSections = () => {
            setVisibleSections(["leadership"]);
            setTimeout(() => {
                setVisibleSections((prev) => [...prev, "music"]);
            }, 200);
            setTimeout(() => {
                setVisibleSections((prev) => [...prev, "dancers"]);
            }, 400);
        };
        loadSections();
        // Cleanup function
        return () => {
            setHoveredMember(null);
        };
    }, []);
    return (_jsx("div", { className: "container mx-auto py-6 px-3", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsx("div", { className: "mb-6", children: _jsx("h2", { className: "section-title", children: language === "pt" ? "A nossa Equipa" : "Unser Team" }) }), _jsx(MemberSection, { title: language === "pt" ? "Gerência" : "Leitung", icon: UserRound, members: categorizedMembers.leadership, isVisible: visibleSections.includes("leadership"), hoveredMember: hoveredMember, setHoveredMember: setHoveredMember }), _jsx(MemberSection, { title: language === "pt" ? "Dançarinos" : "Tänzer/innen", icon: CustomDancingIcon, members: categorizedMembers.dancers, isVisible: visibleSections.includes("dancers"), hoveredMember: hoveredMember, setHoveredMember: setHoveredMember })] }) }));
};
export default MembrosPage;
