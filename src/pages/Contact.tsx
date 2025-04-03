
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

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

  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-seagreen mb-6">
        {language === 'pt' ? 'Contacto' : 'Kontakt'}
      </h2>
      
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
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
            />
          </div>
          
          <Button type="submit" className="w-full bg-seagreen hover:bg-seagreen/90">
            {language === 'pt' ? 'Enviar' : 'Senden'}
          </Button>
        </form>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-seagreen mb-2">
          {language === 'pt' ? 'Nosso Endereço' : 'Unsere Adresse'}
        </h3>
        <p>
          Centro Português Harburg e.V.<br />
          Reetwerder 23<br />
          21029 Hamburg
        </p>
      </div>
    </div>
  );
};

export default Contact;
