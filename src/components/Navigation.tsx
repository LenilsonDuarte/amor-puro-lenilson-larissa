import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Drawer, DrawerTrigger, DrawerContent } from '@/components/ui/drawer';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

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
  ];

  if (isMobile) {
    return (
      <nav className="fixed top-0 left-0 z-50">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="left">
          <DrawerTrigger asChild>
            <button className={`p-2 rounded-full bg-love/90 hover:bg-love/80 text-white shadow-lg focus:outline-none z-50 fixed top-4 ${isMobile ? 'left-2' : 'left-4'}`} style={{ transition: 'background 0.2s' }}>
              {drawerOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </DrawerTrigger>
          <DrawerContent className="fixed inset-0 pb-8 pt-20 bg-black/90 border-none shadow-2xl flex flex-col items-center justify-center gap-8">
            <div className="w-full flex justify-start px-6 md:hidden mb-4">
              <span className="flex items-center text-sm text-white/60 font-sf select-none">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="mr-1"><path d="M13 16l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                arraste para fechar
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    scrollToSection(item.id);
                    // Fechar o drawer após clicar
                    const evt = new KeyboardEvent('keydown', { key: 'Escape' });
                    window.dispatchEvent(evt);
                  }}
                  className="w-4/5 max-w-xs font-sf text-lg font-medium text-foreground/90 hover:text-love hover:bg-love/15 transition-all duration-300 px-6 py-3 rounded-xl"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    );
  }

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