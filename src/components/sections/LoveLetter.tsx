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
    <section id="cartinha" ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-dreamy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Mail className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Cartinha do Coração
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Palavras escritas com todo amor do mundo
            </p>
          </div>

          <div className="relative reveal">
            {!isOpen ? (
              <div 
                className="mx-auto w-80 h-60 cursor-pointer group"
                onClick={openEnvelope}
              >
                <div className="relative w-full h-full">
                  {/* Envelope */}
                  <div className="absolute inset-0 bg-gradient-golden rounded-lg shadow-golden group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="absolute inset-4 border-2 border-accent-foreground/20 rounded-lg"></div>
                    
                    {/* Envelope flap */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-accent/80 to-accent rounded-t-lg transform origin-bottom group-hover:-rotate-12 transition-transform duration-300">
                      <div className="absolute inset-4 border border-accent-foreground/20 rounded-t-lg"></div>
                    </div>
                    
                    {/* Heart seal */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <Heart className="w-8 h-8 text-love heartbeat" />
                    </div>
                    
                    {/* Letter peek */}
                    <div className="absolute bottom-4 left-4 right-4 h-20 bg-background rounded border border-border/20">
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground font-inter">
                          Para: Larissa ❤️
                        </div>
                        <div className="text-xs text-muted-foreground font-inter mt-1">
                          De: Lenilson
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-center text-accent-foreground/60 font-inter text-sm mt-8">
                      Clique para abrir
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Card className="romantic-glow envelope-open">
                <CardContent className="p-8">
                  <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                      <Heart className="w-8 h-8 mx-auto text-love mb-4 heartbeat" />
                      <h3 className="text-2xl font-playfair font-semibold text-foreground">
                        Para minha amada Larissa
                      </h3>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <div className="whitespace-pre-line text-foreground font-inter leading-relaxed">
                        {displayedText}
                        {isWriting && <span className="animate-pulse">|</span>}
                      </div>
                    </div>
                    
                    {!isWriting && displayedText && (
                      <div className="text-center mt-8">
                        <Button
                          onClick={resetLetter}
                          variant="secondary"
                          className="gap-2"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Releia de novo
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;