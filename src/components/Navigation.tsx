import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'nossa-historia', label: 'Nossa História' },
    { id: 'linha-tempo', label: 'Linha do Tempo' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'cartinha', label: 'Cartinha' },
    { id: 'promessas', label: 'Promessas' },
    { id: 'segredos', label: 'Segredos' },
    { id: 'surpresa', label: 'Surpresa Final' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } drop-shadow-2xl'`}
    >
      <div className="glass-card border-b border-love/30 shadow-xl glow-premium backdrop-blur-2xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="font-sf text-sm font-medium text-foreground/90 hover:text-love hover:bg-love/15 transition-all duration-300 hover-lift magnetic-btn px-5 py-2 rounded-2xl shadow-md border border-love/10 focus:ring-2 focus:ring-love/40 focus:outline-none"
                style={{ boxShadow: '0 2px 16px 0 rgba(255,0,64,0.08)' }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;