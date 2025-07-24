import { Heart, Infinity, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-gradient-romantic">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center items-center gap-4">
            <Heart className="w-8 h-8 text-love heartbeat" />
            <Infinity className="w-8 h-8 text-accent" />
            <Heart className="w-8 h-8 text-love heartbeat" />
          </div>
          
          <div className="space-y-4">
            <p className="text-xl font-playfair text-foreground">
              Feito com amor por Lenilson Farache para Larissa Lisbôa
            </p>
            
            <div className="flex items-center justify-center gap-4 text-2xl font-playfair font-bold text-love">
              <span>24/07/2023</span>
              <Heart className="w-6 h-6 heartbeat" />
              <span>24/07/2025</span>
            </div>
            
            <p className="text-lg font-inter text-muted-foreground">
              Dois anos de amor infinito e uma vida inteira pela frente
            </p>
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="lg"
            className="hover:bg-love/10 hover:text-love transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Voltar ao início
          </Button>
          
          <div className="pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground font-inter">
              "O amor verdadeiro é eterno, infinito e sempre igual a si mesmo." - Honoré de Balzac
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;