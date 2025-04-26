
import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  QrCode,
  Link as LinkIcon,
} from "lucide-react";
import { useMetaSEO } from "@/hooks/useMetaSEO";

type UsefulLink = {
  url: string;
  icon: string;
  title: string;
};

const usefulLinks: UsefulLink[] = [
  {
    url: "https://www.consuladoportugal-hamburg.com/",
    icon: "/images/links/pdc_66x66.png",
    title: "Consulado Português em Hamburgo",
  },
  {
    url: "https://www.ccphh.org/",
    icon: "/images/links/logotipo.png",
    title: "Centro Cultural Português",
  },
  {
    url: "https://missao-catolica-hamburgo.de/",
    icon: "/images/links/logotipo_missao.jpg",
    title: "Missão Católica Portuguesa",
  },
  {
    url: "https://hamburg-portugal.de/",
    icon: "/images/links/417154003_7628155877197537_3387848453821547182_n.jpg",
    title: "Deutsch-Portugiesische Gesellschaft",
  },
  {
    url: "https://www.facebook.com/hamburgerportugiesenwelt/",
    icon: "/images/links/297537604_569168504998554_343296032616875640_n.jpg",
    title: "Hamburger Portugiesen Welt",
  },
  {
    url: "https://www.mundoportugues.pt/",
    icon: "/images/links/cropped-portal-logo.jpg",
    title: "Mundo Português",
  },
  {
    url: "https://www.portugalpost.de/",
    icon: "/images/links/Screenshot+2023-12-22+at+09.47.32-240w.webp",
    title: "Portugal Post",
  },
  {
    url: "https://ahk-portugal.pt/",
    icon: "/images/links/MYvhCGImba3MPCwmRu2pZgGkFhy2L6tkTLsSO3LN.png",
    title: "Câmara de Comércio Luso-Alemã",
  },
];

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-semibold text-seagreen mb-6">
        {language === "pt" 
          ? "Envie-nos uma mensagem" 
          : "Schreiben Sie uns eine Nachricht"}
      </h2>
      <form 
        action="https://formsubmit.co/marco.dacio@icloud.com" 
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="Neue Nachricht über Kontaktformular" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://tradicionalisboa.lovable.app/contact" />

        <div>
          <label htmlFor="name" className="form-label">
            {language === "pt" ? "Nome" : "Name"}
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder={language === "pt" ? "Seu nome" : "Ihr Name"}
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            {language === "pt" ? "Email" : "E-Mail"}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder={language === "pt" ? "Seu email" : "Ihre E-Mail"}
          />
        </div>

        <div>
          <label htmlFor="subject" className="form-label">
            {language === "pt" ? "Assunto" : "Betreff"}
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
            placeholder={language === "pt" ? "Assunto da mensagem" : "Betreff der Nachricht"}
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            {language === "pt" ? "Mensagem" : "Nachricht"}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="form-input"
            placeholder={language === "pt" ? "Sua mensagem" : "Ihre Nachricht"}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-seagreen hover:bg-seagreen/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          {language === "pt" ? "Enviar" : "Senden"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          {language === "pt"
            ? "Este site é protegido por FormSubmit e aplicam-se a Política de Privacidade e os Termos de Serviço."
            : "Diese Website wird durch FormSubmit geschützt und es gelten die Datenschutzbestimmungen und Nutzungsbedingungen."}
        </p>
      </form>
    </div>
  );
};

const Contact = React.memo(() => {
  useMetaSEO("contact");
  const { language } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="section-title text-center mb-10">
        {language === "pt" ? "Contacto" : "Kontakt"}
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      <div className="flex flex-col gap-6 h-full">
  <div className="glass-card p-6 hover:shadow-lg transition-all duration-300 flex-grow">
    
            <div className="flex gap-2 items-center mb-6">
              <Mail className="text-seagreen w-6 h-6" />
              <h3 className="text-xl font-bold text-seagreen">
                Tradicoes Portuguesas
              </h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6 text-gray-700 items-start">
  <div className="space-y-4">
    <p className="flex items-center gap-3">
      <MapPin className="w-5 h-5 text-seagreen flex-shrink-0" />
      <span>Hastedtstraße 30, 21073 Hamburg</span>
    </p>
    <p className="flex items-center gap-3">
      <Mail className="w-5 h-5 text-seagreen flex-shrink-0" />
      <a 
        href="mailto:g.c.r.f.p@hotmail.com"
        className="hover:text-seagreen transition-colors duration-300"
      >
        g.c.r.f.p@hotmail.com
      </a>
    </p>
    <p className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-seagreen flex-shrink-0" />
      <span>+49 (0) 157 316 250 61</span>
    </p>
  </div>

  <div className="flex-shrink-0">
    <img
      src="/images/QR Code.jpeg"
      alt="QR Code"
      className="h-32 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
  </div>
</div>

          </div>

          <div className="glass-card overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex-grow">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.3882674799974!2d9.965910060063711!3d53.45063187422865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b191006ff27d9f%3A0x6701f53aa4f35d03!2sHastedtstra%C3%9Fe%2030%2C%2021073%20Hamburg!5e0!3m2!1sde!2sde!4v1715674267055!5m2!1sde!2sde"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div className="mb-8">
        <Accordion type="single" collapsible className="accordion-custom">
          <AccordionItem value="useful-links" className="border-none">
            <AccordionTrigger className="accordion-trigger">
              <div className="flex gap-2 items-center">
                <LinkIcon className="text-seagreen" />
                <span>{language === "pt" ? "Links Úteis" : "Nützliche Links"}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-seagreen/30 group hover:shadow-md"
                  >
                    <img
                      src={link.icon}
                      alt={link.title}
                      className="w-6 h-6 mr-3 object-contain"
                    />
                    <span className="flex-1 text-sm">{link.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-seagreen transition-colors" />
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
});

export default Contact;
