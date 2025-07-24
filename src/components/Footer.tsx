import { Heart, Infinity, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParallaxContainer } from './PremiumEffects';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 glass-card">
      <div className="container mx-auto px-6">
        <ParallaxContainer>
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="flex justify-center items-center gap-6">
              <Heart className="w-10 h-10 text-love heartbeat-premium" />
              <Infinity className="w-10 h-10 text-accent float-premium" />
              <Heart className="w-10 h-10 text-love heartbeat-premium" />
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl font-sf text-foreground font-light tracking-wide">
                Feito com amor por Lenilson Farache para Larissa Lisbôa
              </p>
              
              <div className="flex items-center justify-center gap-6 text-3xl font-sf font-bold text-love">
                <span>24/07/2023</span>
                <Heart className="w-8 h-8 heartbeat-premium" />
                <span>24/07/2025</span>
              </div>
              
              <p className="text-xl font-inter text-muted-foreground font-light">
                Dois anos de amor infinito e uma vida inteira pela frente
              </p>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="lg"
              className="magnetic-btn hover-lift hover:text-love hover:bg-love/5 transition-all duration-300 rounded-2xl px-8 py-4"
            >
              <ArrowUp className="w-6 h-6 mr-3" />
              Voltar ao início
            </Button>
            
            <div className="pt-12 border-t border-border/10">
              <p className="text-base text-muted-foreground font-inter font-light italic">
                "O amor verdadeiro é eterno, infinito e sempre igual a si mesmo." - Honoré de Balzac
              </p>
            </div>
          </div>
        </ParallaxContainer>
      </div>
    </footer>
  );
};

export default Footer;