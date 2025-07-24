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
  const letterText = `Minha querida Larissa,

Quando penso em como chegamos até aqui, meu coração se enche de gratidão e amor. Você é muito mais do que eu jamais sonhei encontrar.

Desde nosso primeiro encontro em 2015, passando pelo reencontro em 2020, até nossa reaproximação em 2022, sinto que o universo conspirou para nos unir no momento perfeito.

Lembro do nosso primeiro beijo na Subway, em frente ao seu condomínio. Naquele momento, ainda nem namorávamos, mas já falávamos sobre Antônio, Júlia, Eliza e Joaquim. Já sabíamos que éramos feitos um para o outro.

Somos incrivelmente parecidos e conectados em tudo: nossos gostos, ideias, jeitos e objetivos. É como se fôssemos duas metades de uma mesma alma.

Prometo cuidar do seu sorriso todos os dias, realizar seus sonhos e construir nossa família ao seu lado. Quero envelhecer com você e viver todas as aventuras que a vida nos reserva.

Você é meu lar, minha paz, minha felicidade infinita.

Com todo meu amor,
Lenilson ❤️`;

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
    <section id="cartinha" ref={sectionRef} className="relative py-20 md:py-32 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Mail className="w-12 h-12 mx-auto text-love mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
              Cartinha do Coração
            </h2>
            <p className="text-xl text-muted-foreground font-inter animate-fade-in">
              Palavras escritas com todo amor do mundo
            </p>
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
                    <h3 className="text-2xl font-pacifico text-yellow-700 mb-4">Para minha amada Larissa</h3>
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