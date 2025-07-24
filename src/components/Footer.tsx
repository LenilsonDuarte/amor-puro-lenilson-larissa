import { Heart, Infinity, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParallaxContainer } from './PremiumEffects';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 bg-gradient-to-t from-pink-200 via-pink-100 to-yellow-100 overflow-hidden">
      {/* Corações animados de fundo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 animate-float-premium"><Heart className="w-16 h-16 text-love/30" /></div>
        <div className="absolute right-1/4 bottom-0 animate-float-premium" style={{ animationDelay: '2s' }}><Heart className="w-20 h-20 text-love/20" /></div>
        <div className="absolute left-1/2 top-1/2 animate-bounce" style={{ animationDelay: '1s' }}><Heart className="w-10 h-10 text-love/40" /></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <ParallaxContainer>
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="flex justify-center items-center gap-6">
              <Heart className="w-10 h-10 text-love heartbeat-premium drop-shadow-lg animate-bounce" />
              <Infinity className="w-10 h-10 text-accent float-premium drop-shadow-lg animate-spin-slow" />
              <Heart className="w-10 h-10 text-love heartbeat-premium drop-shadow-lg animate-bounce" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-sf text-love font-bold tracking-wide drop-shadow animate-fade-in">
                Feito com muito amor por Lenilson para Larissa 💖
              </p>
              <div className="flex items-center justify-center gap-6 text-3xl font-sf font-bold text-love drop-shadow animate-fade-in">
                <span>24/07/2023</span>
                <Heart className="w-8 h-8 heartbeat-premium animate-pulse" />
                <span>∞</span>
              </div>
              <p className="text-xl font-inter text-pink-700 font-light animate-fade-in">
                Dois anos de amor infinito e uma vida inteira de aventuras, sorrisos e sonhos juntos! ✨💑
              </p>
            </div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="lg"
              className="magnetic-btn hover-lift hover:text-love hover:bg-love/15 transition-all duration-300 rounded-2xl px-8 py-4 border-2 border-love/30 shadow-lg focus:ring-2 focus:ring-love/40 focus:outline-none animate-bounce"
              style={{ boxShadow: '0 2px 16px 0 rgba(255,0,64,0.12)', background: 'rgba(255,255,255,0.7)', color: '#d72660', fontWeight: 700 }}
            >
              <ArrowUp className="w-6 h-6 mr-3 animate-float-premium" />
              Voltar ao topo com amor
            </Button>
            <div className="pt-12 border-t-2 border-pink-200">
              <p className="text-base text-pink-700 font-inter font-bold italic animate-fade-in">
                "O amor é a nossa eternidade!" 💞
              </p>
            </div>
          </div>
        </ParallaxContainer>
      </div>
      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .animate-fade-in { animation: fadeIn 1.2s ease both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </footer>
  );
};

export default Footer;