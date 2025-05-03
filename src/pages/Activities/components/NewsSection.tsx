import { Info } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import NewsItem, { NewsItemType } from "./NewsItem";

interface NewsSectionProps {
  newsItems: NewsItemType[];
}

const NewsSection = ({ newsItems }: NewsSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="mb-12 mt-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Info className="text-portuguesered" />
        <h3 className="text-xl font-bold text-portuguesered">{t("news")}</h3>
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto">
        {newsItems.map((item, index) => (
          <NewsItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;



