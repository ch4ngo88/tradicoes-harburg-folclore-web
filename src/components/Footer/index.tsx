
import { useLanguage } from "@/hooks/useLanguage";
import { FooterLogo } from "./FooterLogo";
import { FooterSocialMedia } from "./FooterSocialMedia";
import { FooterContactInfo } from "./FooterContactInfo";
import { FooterLegalLinks } from "./FooterLegalLinks";

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-seagreen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-3 md:gap-8">
          {/* Logo Column */}
          <FooterLogo />

          {/* Mobile: Social Media Section */}
          <FooterSocialMedia />

          {/* Contact Information Column */}
          <FooterContactInfo />

          {/* Legal Links Column */}
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
};
