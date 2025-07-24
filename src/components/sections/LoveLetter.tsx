import { useState, useEffect, useRef } from 'react';
import { Mail, Heart, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  // TODO: Replace with actual personal letter from Lenilson to Larissa
  const letterText = `Hoje, no nosso dia, eu respiro fundo e tento, mesmo que em vão, colocar em palavras tudo aquilo que transborda em mim desde que você entrou na minha vida. Mas não é simples. Como explicar o que é amar alguém tão profundamente a ponto de desejar que o tempo se curve, que o mundo se ajeite e que o universo inteiro conspire só para te ver sorrir pra mim?

Você não é só a mulher com quem eu namoro. Você é o meu sonho acordado, a calma no caos, o destino mais bonito que a vida poderia me dar. Quando olho para você, vejo muitos pequenos correndo pela casa, nosso Antônio, Júlia, Eliza e Joaquim, a gente, rindo de tudo, viajando, crescendo, vencendo o mundo juntos, vivendo com o melhor que o mundo tem pra nos dar.

A gente não tem só um relacionamento, a gente tem uma história. Um amor que não cabe em palavras. Amor que pulsa em cada detalhe, em cada olhar que se cruza, em cada abraço que dá sentido a tudo. E é por isso que hoje, eu quis mais do que dizer que te amo. Eu quis deixar registrado que eu te amo infinito ❤️❤️❤️❤️❤️❤️❤️! Com todas as batidas do meu coração e com cada célula do meu corpo!

Hoje e sempre, sou teu, com tudo o que há de mim!`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isWriting) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= letterText.length) {
          setDisplayedText(letterText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsWriting(false);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isWriting, letterText]);

  const openEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsWriting(true);
    }, 800);
  };

  const resetLetter = () => {
    setIsOpen(false);
    setIsWriting(false);
    setDisplayedText('');
  };

  return (
    <section id="cartinha" ref={sectionRef} className="relative flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Mail className="w-12 h-12 mx-auto text-love mb-6 animate-bounce" />
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-8">
              Correio chegou!
            </h2>
          </div>

          <div className="relative reveal flex flex-col items-center justify-center min-h-[400px]">
            {/* Envelope fechado */}
            {!isOpen && (
              <div
                className="mx-auto w-80 h-56 cursor-pointer group relative"
                onClick={openEnvelope}
                style={{ perspective: '1200px' }}
              >
                {/* Envelope base */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-300 border-4 border-yellow-300 group-hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 8px 32px 0 rgba(255, 200, 80, 0.25), 0 1.5px 0 0 #fff inset' }} />
                {/* Flap */}
                <div className="absolute left-0 right-0 top-0 h-24 rounded-t-3xl bg-gradient-to-b from-yellow-300 via-yellow-100 to-yellow-200 border-b-2 border-yellow-400 shadow-md group-hover:-rotate-6 transition-transform duration-300 origin-bottom z-10 flex items-center justify-center" style={{ boxShadow: '0 4px 16px 0 rgba(255, 200, 80, 0.15)' }}>
                  <Heart className="w-8 h-8 text-love heartbeat animate-pulse" />
                </div>
                {/* Selo */}
                <div className="absolute left-1/2 top-20 transform -translate-x-1/2 z-20">
                  <Heart className="w-10 h-10 text-love heartbeat animate-bounce" />
                </div>
                {/* Peek da carta */}
                <div className="absolute bottom-4 left-6 right-6 h-16 bg-white/80 rounded-lg border border-yellow-200 flex flex-col items-center justify-center shadow-md">
                  <span className="text-xs text-love font-pacifico">Para: Larissa ❤️</span>
                  <span className="text-xs text-yellow-700 font-pacifico mt-1">De: Lenilson</span>
                </div>
                {/* Corações animados */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2 animate-float-premium">
                  <Heart className="w-5 h-5 text-love animate-pulse" />
                  <Heart className="w-4 h-4 text-love/60 animate-bounce" />
                </div>
                <div className="absolute -bottom-8 right-1/2 translate-x-1/2 flex gap-2 animate-float-premium">
                  <Heart className="w-4 h-4 text-love/80 animate-bounce" />
                  <Heart className="w-5 h-5 text-love animate-pulse" />
                </div>
                {/* Clique para abrir */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <p className="text-center text-yellow-700 font-pacifico text-base mb-4 animate-fade-in">Clique para abrir</p>
                </div>
              </div>
            )}
            {/* Envelope aberto e carta deslizando */}
            {isOpen && (
              <div className="relative flex flex-col items-center justify-center min-h-[400px]">
                {/* Envelope base aberto */}
                <div className="absolute w-80 h-56 rounded-3xl bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-300 border-4 border-yellow-300 shadow-2xl z-0" style={{ top: '60px', left: 0, right: 0, margin: 'auto', filter: 'blur(1px)', opacity: 0.7 }} />
                {/* Carta deslizando */}
                <div className="relative z-10 animate-slide-up">
                  <div className="mx-auto w-80 min-h-[320px] rounded-2xl bg-white/95 border border-yellow-200 shadow-2xl p-8 flex flex-col items-center justify-center" style={{ fontFamily: 'Pacifico, cursive', color: '#a86b3c', boxShadow: '0 8px 32px 0 rgba(255, 200, 80, 0.18)' }}>
                    <Heart className="w-8 h-8 mx-auto text-love mb-4 heartbeat animate-pulse" />
                    <div className="prose prose-lg max-w-none text-center">
                      <div className="whitespace-pre-line leading-relaxed animate-letter-write" style={{ minHeight: 180 }}>
                        {displayedText}
                        {isWriting && <span className="animate-pulse">|</span>}
                      </div>
                    </div>
                    {!isWriting && displayedText && (
                      <div className="text-center mt-8">
                        <Button
                          onClick={resetLetter}
                          variant="secondary"
                          className="gap-2 bg-yellow-200 text-yellow-900 font-pacifico hover:bg-yellow-300 hover:text-love shadow-md"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Releia de novo
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                {/* Corações animados */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2 animate-float-premium">
                  <Heart className="w-5 h-5 text-love animate-pulse" />
                  <Heart className="w-4 h-4 text-love/60 animate-bounce" />
                </div>
                <div className="absolute -bottom-8 right-1/2 translate-x-1/2 flex gap-2 animate-float-premium">
                  <Heart className="w-4 h-4 text-love/80 animate-bounce" />
                  <Heart className="w-5 h-5 text-love animate-pulse" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Animações extras */}
      <style>{`
        @keyframes slide-up { from { transform: translateY(120px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(.4,2,.3,1) both; }
        @keyframes letter-write { from { opacity: 0; } to { opacity: 1; } }
        .animate-letter-write { animation: letter-write 2.5s steps(40, end) both; }
        .font-pacifico { font-family: 'Pacifico', cursive; }
      `}</style>
    </section>
  );
};

export default LoveLetter;