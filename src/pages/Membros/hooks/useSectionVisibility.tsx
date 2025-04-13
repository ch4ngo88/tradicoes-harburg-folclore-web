
import { useState, useEffect } from "react";

export const useSectionVisibility = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

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

  return { visibleSections };
};
