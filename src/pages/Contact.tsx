import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
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

type UsefulLink = {
  url: string;
  icon: string;
  title: string;
};

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const ContactForm = () => {
  const { language } = useLanguage();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error("Execute recaptcha not available");
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha("contact_form");
      console.log("reCAPTCHA token:", token);

      console.log("Form submitted:", { ...formData, token });

      toast({
        title: language === "pt" ? "Mensagem enviada!" : "Nachricht gesendet!",
        description:
          language === "pt"
            ? "Obrigado pelo seu contacto. Responderemos em breve."
            : "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      toast({
        title: language === "pt" ? "Erro!" : "Fehler!",
        description:
          language === "pt"
            ? "Ocorreu um erro. Por favor, tente novamente."
            : "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-6">
      <form onSubmit={handleSubmit} className="space-y-5">
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
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
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
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-seagreen hover:bg-seagreen/90 mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? language === "pt"
              ? "A enviar..."
              : "Senden..."
            : language === "pt"
              ? "Enviar"
              : "Senden"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          {language === "pt"
            ? "Este site é protegido por reCAPTCHA e aplicam-se a Política de Privacidade e os Termos de Serviço do Google."
            : "Diese Website wird durch reCAPTCHA geschützt und es gelten die Datenschutzbestimmungen und Nutzungsbedingungen von Google."}
        </p>
      </form>
    </div>
  );
};

const Contact = () => {
  const { language } = useLanguage();

  const usefulLinks: UsefulLink[] = [
    {
      url: "https://www.rfptv.pt/",
      icon: "/images/links/MYvhCGImba3MPCwmRu2pZgGkFhy2L6tkTLsSO3LN.png",
      title: "Canal tv Digital do Folclore de Portugal",
    },
    {
      url: "https://folclore.pt/",
      icon: "/images/links/cropped-portal-logo.jpg",
      title: "Folclore de Portugal – O Portal do Folclore Português",
    },
    {
      url: "https://www.ffp.pt/",
      icon: "/images/links/logotipo.png",
      title: "Federação do Folclore Português",
    },
    {
      url: "https://www.casabrincheiro.pt/",
      icon: "/images/links/Screenshot+2023-12-22+at+09.47.32-240w.webp",
      title: "Casa Brincheiro",
    },
    {
      url: "https://portaldascomunidades.mne.gov.pt/pt/",
      icon: "/images/links/pdc_66x66.png",
      title: "Portal das Comunidades Portuguesas",
    },
    {
      url: "https://missao-portuguesa-hamburg.de/cms3/p/Mission/index.php",
      icon: "/images/links/logotipo_missao.jpg",
      title: "Missão Católica de Língua Portuguesa de Hamburgo",
    },
    {
      url: "https://www.instagram.com/musicoportuga",
      icon: "/images/links/417154003_7628155877197537_3387848453821547182_n.jpg",
      title: "Tiago Pinheiro - músico portuga de Hamburgo",
    },
  ];

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <div className="container mx-auto py-8 px-4">
        <h1 className="section-title text-center mb-10">
          {language === "pt" ? "Contacto" : "Kontakt"}
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="glass-card p-6">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex gap-2 items-center mb-4">
                  <Mail className="text-portuguesered" />
                  <h3 className="text-xl font-bold text-portuguesered">
                    Rancho Folclórico Tradicoes Portuguesas
                  </h3>
                </div>

                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-seagreen" />
                    <span>Hastedtstraße 30, 21073 Hamburg</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-seagreen" />
                    <span>g.c.r.f.p@hotmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-seagreen" />
                    <span>+49 (0) 157 316 250 61</span>
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.3882674799974!2d9.965910060063711!3d53.45063187422865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b191006ff27d9f%3A0x6701f53aa4f35d03!2sGottschalkring%201%2C%2021073%20Hamburg!5e0!3m2!1sde!2sde!4v1715674267055!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Accordion type="single" collapsible className="accordion-custom">
              <AccordionItem value="useful-links" className="border-none">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex gap-2 items-center">
                    <LinkIcon className="text-seagreen" />
                    <span>
                      {language === "pt" ? "Links Úteis" : "Nützliche Links"}
                    </span>
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
                        className="flex items-center p-3 rounded-md hover:bg-slate-100 transition-colors border border-transparent hover:border-seagreen/30 group"
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
          
          <div className="flex gap-2 items-center mb-6">
            <QrCode className="text-seagreen" />
            <div>
              <h3 className="text-xl font-bold text-seagreen">
                {language === "pt" ? "Código QR" : "QR-Code"}
              </h3>
              <p className="text-sm text-gray-600">
                {language === "pt"
                  ? "Escaneie para mais informações"
                  : "Scannen Sie für weitere Informationen"}
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="/images/QR Code.jpeg"
              alt="QR Code"
              className="h-40 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
