import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FinalSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const createFirework = () => {
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#feca57', '#ff9ff3', '#54a0ff'];
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const fireworksContainer = document.querySelector('.fireworks');
    if (fireworksContainer) {
      fireworksContainer.appendChild(firework);
      setTimeout(() => firework.remove(), 2000);
    }
  };

  const triggerSurprise = () => {
    setIsRevealed(true);
    setShowFireworks(true);

    // Create multiple fireworks
    const fireworkInterval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createFirework(), i * 100);
      }
    }, 300);

    // Stop fireworks after 3 seconds
    setTimeout(() => {
      clearInterval(fireworkInterval);
      setShowFireworks(false);
    }, 3000);

    // Show messages with delays
    setTimeout(() => setShowMessage(true), 1000);
    setTimeout(() => setShowFinalMessage(true), 3000);
  };

  return (
    <section id="surpresa" ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-dreamy">
      {showFireworks && <div className="fireworks"></div>}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {!isRevealed ? (
            <div>
              <div className="text-center reveal mb-10 flex flex-col items-center justify-center">
                <AlertTriangle className="w-12 h-12 mx-auto text-secret mb-6 animate-bounce" />
                <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-6">
                  Atenção!
                </h2>
                <p className="text-2xl text-white/80 italic font-handwritten tracking-wide">
                  Há algo muito especial aqui... mas você foi avisada! 😳
                </p>
              </div>
              {/* resto do conteúdo do bloco não revelado */}
              <div className="flex justify-center mt-8">
                <Button
                  onClick={triggerSurprise}
                  size="lg"
                  className="bg-gradient-secret hover:shadow-2xl ring-2 ring-love/50 hover:ring-love text-lg px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 mx-auto w-full max-w-xs md:max-w-md text-center flex items-center justify-center text-white"
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Não clique aqui 😳
                </Button>
              </div>

              <style>{`
                .animate-soft-blink {
                  animation: softBlink 2s ease-in-out infinite;
                }
                @keyframes softBlink {
                  0%, 100% { opacity: 1; filter: brightness(1); }
                  50% { opacity: 0.8; filter: brightness(1.3); }
                }
              `}</style>
            </div>
          ) : (
            <div className="space-y-12">
              {showMessage && (
                <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60 fade-in">
                  <CardContent className="p-12 text-center">
                    <Sparkles className="w-16 h-16 mx-auto text-love mb-8 animate-spin" />
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-8 leading-tight">
                      Eu não sei o que o futuro reserva...
                    </h2>
                    <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed">
                      Mas se for contigo, eu topo viver qualquer coisa.
                    </p>
                    <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed mt-4">
                      Quero passar a vida inteira com você, Larissa.
                    </p>
                  </CardContent>
                </Card>
              )}

              {showFinalMessage && (
                <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60 fade-in">
                  <CardContent className="p-12 text-center">
                    <div className="flex justify-center gap-2 mb-8">
                      {[...Array(7)].map((_, i) => (
                        <Heart
                          key={i}
                          className="w-8 h-8 text-love heartbeat"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-love mb-8">
                      Te amo infinito
                    </h2>

                    <div className="space-y-6 text-foreground/80">
                      <p className="text-lg italic">
                        Os 7 corações vermelhos têm um significado especial:
                      </p>
                      <p className="text-xl font-semibold">
                        7 é o número perfeito, e só Deus é perfeito.
                      </p>
                      <p className="text-lg">
                        Então essa frase significa implicitamente:
                      </p>
                      <p className="text-2xl font-playfair font-bold text-love">
                        "Que Deus abençoe nosso amor."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </section >
  );
};

export default FinalSurprise;