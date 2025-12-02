import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за ваше обращение! Алиса свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-12 text-center">Контакты</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light mb-6">Связаться со мной</h3>
            <p className="text-gray-600 mb-8">
              Открыта к новым проектам и сотрудничеству. Свяжитесь со мной для обсуждения возможностей.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:alisa@example.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
              >
                <Icon name="Mail" size={20} />
                <span>alisa@example.com</span>
              </a>
              <a 
                href="tel:+79991234567" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
              >
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-light mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a 
                  href="https://vk.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Icon name="Chrome" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="border-gray-300 resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          © 2024 Алиса Меликова. Все права защищены.
        </div>
      </div>
    </section>
  );
};

export default Contact;
