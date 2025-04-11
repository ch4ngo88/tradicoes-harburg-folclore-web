import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'de';

type Translations = {
  [key: string]: {
    pt: string;
    de: string;
  };
};

const translations: Translations = {
  home: {
    pt: 'Home',
    de: 'Home',
  },
  activities: {
    pt: 'Atividades',
    de: 'Aktivitäten',
  },
  archive: {
    pt: 'Arquivo',
    de: 'Archiv',
  },
  membros: {
    pt: 'Membros',
    de: 'Membros',
  },
  contact: {
    pt: 'Contacto',
    de: 'Kontakt',
  },
  aboutUs: {
    pt: 'Sobre nós',
    de: 'Über uns',
  },
  welcome: {
    pt: 'Bem-vindos ao nosso rancho folclórico Tradições Portuguesas!',
    de: 'Herzlich Willkommen bei Tradições Portuguesas!',
  },
  intro: {
    pt: 'Descubra os diversos encantos da cultura portuguesa com o nosso grupo folclórico, que alegra o público com músicas e danças tradicionais desde 1979.',
    de: 'Tauchen Sie in die farbenfrohe, vielfältige Welt der portugiesischen Kultur, mit unser Tanzgruppe die seit 1979 das Publikum mit den traditionellen Folklore Tänzen begeistert.',
  },
  generations: {
    pt: 'Um lar para todas as gerações:',
    de: 'Von Klein bis Groß:',
  },
  generationsText: {
    pt: 'Com cerca de 60 membros, o nosso rancho é composto por pessoas de todas as idades. No nosso grupo infantil, os mais pequenos descobrem o mundo da cultura portuguesas de uma forma divertida. No grupo adulto, os membros (a partir de 14 anos) podem aprofundar e desenvolver as suas habilidades.',
    de: 'Mit rund 60 talentierten Mitgliedern begeistert unsere Tanzgruppe Menschen jeden Alters. In unserer Kindergruppe entdecken die Kleinsten die Welt der portugiesischen Traditionen mit Spiel und Spaß. In der Erwachsenengruppe können motivierte Mitglieder (ab 14 Jahren) ihr Können vertiefen und neue Herausforderungen meistern.',
  },
  variety: {
    pt: 'Representação do folclore de norte a sul:',
    de: 'Tänzerische Vielfalt von Nord bis Süd:',
  },
  varietyText: {
    pt: 'Preservamos a cultura portuguesa, desde as danças animadas e puladas do Minho, às danças elegantes e graciosas do Ribatejo, até aos passos alegres e movidos do Algarve.',
    de: 'Wir bewahren und repräsentieren die portugiesische Kultur, von den lebhaften und energetischen Tänzen des Nordens, zu den eleganten und anmutigen Tänzen des Zentrums, bis hin zu den fröhlichen und raschen Schrittfolgen des Süden Portugals.',
  },
  timeTravel: {
    pt: 'Viajem no tempo:',
    de: 'Erleben Sie eine Zeitreise:',
  },
  timeTravelText: {
    pt: 'As nossas atuações levam-vos a uma viagem cultural pelas antigas e ricas tradições do país. Deixe-se encantar pelos ritmos vibrantes, pelos trajes coloridos e pela energia contagiante do nosso grupo.',
    de: 'Unsere Auftritte führen Sie auf eine kulturelle Reise durch die alten Traditionen des Landes. Lassen Sie sich von den temperamentvollen Rhythmen, den farbenfrohen Trachten und der mitreißenden Energie unserer Gruppe verzaubern.',
  },
  joinUs: {
    pt: 'Gostaria de fazer parte da nossa família folclórica?',
    de: 'Möchten Sie gemeinsam mit uns die Leidenschaft für portugiesische Folklore entdecken?',
  },
  joinUsText: {
    pt: 'Visite-nos em uma das nossas próximas apresentações (datas sob a guia Atividades) ou surpreenda os seus convidados com algo especial e contrate-nos para o seu próximo evento (pedidos sob a guia Contacto).',
    de: 'Dann besuchen Sie uns doch bei einem unserer nächsten Auftritte (Termine unter dem Reiter Aktivitäten) oder überraschen Sie Ihre Gäste mit etwas ganz Besonderem und buchen Sie uns für Ihr nächstes Event (Anfragen unter dem Reiter Kontakt).',
  },
  finalMessage: {
    pt: 'Seja como músico ou dançarino, estamos sempre à procura de novos talentos para enriquecer o nosso grupo. Junte-se a nós e viva a paixão pela cultura folclórica portuguesa!',
    de: 'Mit uns erleben Sie ein Stück portugiesische Sonne und Lebensfreude!',
  },
  upcomingActivities: {
    pt: 'Proximas atividades',
    de: 'Kommende Aktivitäten',
  },
  news: {
    pt: 'News',
    de: 'News',
  },
  openInNewTab: {
    pt: 'Abrir em nova aba',
    de: 'In neuem Tab öffnen',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
