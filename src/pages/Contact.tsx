
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from 'lucide-react';

type UsefulLink = {
  url: string;
  icon: string;
  title: string;
};

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    toast({
      title: language === 'pt' ? 'Mensagem enviada!' : 'Nachricht gesendet!',
      description: language === 'pt' 
        ? 'Obrigado pelo seu contacto. Responderemos em breve.' 
        : 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const usefulLinks: UsefulLink[] = [
    {
      url: "https://www.rfptv.pt/",
      icon: "/images/links/MYvhCGImba3MPCwmRu2pZgGkFhy2L6tkTLsSO3LN.png",
      title: "Canal tv Digital do Folclore de Portugal"
    },
    {
      url: "https://folclore.pt/",
      icon: "/images/links/cropped-portal-logo.jpg",
      title: "Folclore de Portugal – O Portal do Folclore Português"
    },
    {
      url: "https://www.ffp.pt/",
      icon: "/images/links/logotipo.png",
      title: "Federação do Folclore Português"
    },
    {
      url: "https://www.casabrincheiro.pt/",
      icon: "/images/links/Screenshot+2023-12-22+at+09.47.32-240w.webp",
      title: "Casa Brincheiro"
    },
    {
      url: "https://portaldascomunidades.mne.gov.pt/pt/",
      icon: "/images/links/pdc_66x66.png",
      title: "Portal das Comunidades Portuguesas"
    },
    {
      url: "https://missao-portuguesa-hamburg.de/cms3/p/Mission/index.php",
      icon: "/images/links/logotipo_missao.jpg",
      title: "Missão Católica de Língua Portuguesa de Hamburgo"
    },
    {
      url: "https://www.instagram.com/musicoportuga",
      icon: "/images/links/417154003_7628155877197537_3387848453821547182_n.jpg",
      title: "Tiago Pinheiro - músico portuga de Hamburgo"
    }
  ];

  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-seagreen mb-6">
        {language === 'pt' ? 'Contacto' : 'Kontakt'}
      </h2>
      
      <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
        <div className="flex-1 w-full md:max-w-md">
          <div className="mb-6 flex justify-center">
            <img 
              src="/images/QR Code.jpeg" 
              alt="QR Code" 
              className="h-32 rounded shadow-md"
            />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 p-6 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'pt' ? 'Nome' : 'Name'}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'pt' ? 'Assunto' : 'Betreff'}
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'pt' ? 'Mensagem' : 'Nachricht'}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="bg-white"
              />
            </div>
            
            <Button type="submit" className="w-full bg-seagreen hover:bg-seagreen/90">
              {language === 'pt' ? 'Enviar' : 'Senden'}
            </Button>
          </form>
        </div>
        
        <div className="flex-1">
          <div className="bg-white/80 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-seagreen mb-4">
              {language === 'pt' ? 'Rancho Folclórico Tradições Portuguesas de Harburg' : 'Rancho Folclórico Tradições Portuguesas de Harburg'}
            </h3>
            <p className="mb-4">
              Gottschalkring 1<br />
              Hamburg 21073<br />
              <br />
              g.c.r.f.p@hotmail.com<br />
              0160 63 79 525
            </p>
          </div>
          
          <div className="bg-white/80 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-seagreen mb-4">
              {language === 'pt' ? 'Grupo Cultural Recreativo e Folclorio Portugues em Harburg e.V.' : 'Grupo Cultural Recreativo e Folclorio Portugues em Harburg e.V.'}
            </h3>
            <p className="mb-4">
              Gottschalkring 1<br />
              Hamburg 21073<br />
              <br />
              gcrfp@hotmail.de<br />
              040 77 90 80
            </p>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.3882674799974!2d9.965910060063711!3d53.45063187422865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b191006ff27d9f%3A0x6701f53aa4f35d03!2sGottschalkring%201%2C%2021073%20Hamburg!5e0!3m2!1sde!2sde!4v1715674267055!5m2!1sde!2sde" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="w-full mb-8">
        <Accordion type="single" collapsible className="bg-white/80 rounded-lg shadow-md overflow-hidden">
          <AccordionItem value="useful-links">
            <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 text-lg font-medium text-seagreen">
              {language === 'pt' ? 'Links Úteis' : 'Nützliche Links'}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {usefulLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md hover:bg-slate-100 transition-colors border border-transparent hover:border-seagreen/30"
                  >
                    <img src={link.icon} alt={link.title} className="w-6 h-6 mr-3 object-contain" />
                    <span className="flex-1 text-sm">{link.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="md:hidden flex gap-4 mt-8">
        <a href="https://www.youtube.com/@tradicoesportuguesasdeharb1754" target="_blank" rel="noopener noreferrer">
          <img src="/images/youtube.png" alt="YouTube" className="icon" />
        </a>
        <a href="https://www.facebook.com/portugiesischerverein.harburg?locale=de_DE" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.webp" alt="Facebook" className="icon" />
        </a>
        <a href="https://www.instagram.com/centroportuguesharburg?igsh=MW9qbGpxNTZuN3M1Nw==" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.webp" alt="Instagram" className="icon" />
        </a>
        <a href="https://www.tiktok.com/@tradies.portugues?_t=8lbFMCvtLA8&_r=1" target="_blank" rel="noopener noreferrer">
          <img src="/images/tiktok.webp" alt="TikTok" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
