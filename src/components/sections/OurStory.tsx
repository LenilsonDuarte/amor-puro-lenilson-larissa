import { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, MapPin, Sparkles, RefreshCcw, Link2, Infinity, BookOpen, Home, MessageCircle, Moon, Users, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxContainer } from '../PremiumEffects';
import { useIsMobile } from '@/hooks/use-mobile';

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showFirstCard, setShowFirstCard] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

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

    const elements = sectionRef.current?.querySelectorAll('.reveal-premium');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nossa-historia" ref={sectionRef} className="relative py-32 md:py-48 bg-gradient-dreamy">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <ParallaxContainer>
            <div className="text-center mb-24 reveal-premium">
              <Heart className="w-16 h-16 mx-auto text-love mb-8 heartbeat-premium drop-shadow-lg" />
              <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-8 tracking-tight">
                Nossa História
              </h2>
              <p className="text-2xl text-foreground font-inter font-light tracking-wide drop-shadow">
                Uma conexão que transcende o tempo e a distância
              </p>
            </div>
          </ParallaxContainer>

          <div className="space-y-16">
            {[{
              icon: <Sparkles className="w-8 h-8 text-yellow-500 mt-2 flex-shrink-0" />,
              title: 'Conhecendo... (2015)',
              text: 'Oito anos atrás, o destino nos apresentou pela primeira vez. Dois corações jovens se cruzaram, sem saber que aquele momento seria o início de algo extraordinário que floresceria anos depois.'
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-blue-500 mt-2 flex-shrink-0" />,
              title: 'A grande aproximação (2020)',
              text: 'Cinco anos depois, a vida nos trouxe de volta. Conversas tímidas, sorrisos pro telefone, mas ainda não era o momento certo... O coração já sabia, mas a mente ainda guardava seus segredos.'
            },
            {
              icon: <BookOpen className="w-8 h-8 text-purple-600 mt-2 flex-shrink-0" />,
              title: 'Start! (2022)',
              text: 'O ano em que as coisas começaram a ficar mais claras, aquela amizade rasa começou a trocar segredos e a compartilhar histórias.\n"Aqui ainda nem namorávamos e já falávamos sobre nomes de filhos."'
            },
            {
              icon: <Flame className="w-8 h-8 text-rose-600 mt-2 flex-shrink-0 heartbeat-premium" />,
              title: 'O Primeiro Beijo (2023)',
              text: 'Um encontro mal planejado, ainda meio escondido, meio proibido, e mesmo assim, fez do nosso primeiro beijo um momento mágico.'
            },
            {
              icon: <Users className="w-8 h-8 text-green-600 mt-2 flex-shrink-0 heartbeat-premium" />,
              title: 'Grande família (2024)',
              text: 'O ano em que mais conhecemos e interagimos com a família, eu com a tua, você com a minha, e nosso relacionamento passou a ser mais sério e sólido.'
            },
            {
              icon: <Home className="w-8 h-8 text-pink-600 mt-2 flex-shrink-0 heartbeat-premium" />,
              title: 'Mudanças... (2025)',
              text: 'Depois de altos e baixos vividos em 2024, acredito que finalmente encontramos o caminho certo. Sinto que a partir de agora nós começamos uma corrida para o nosso futuro, a construção de tudo, a busca incessante do nosso canto.'
            }

            ].map((item, idx) => (
              <Card
                key={item.title}
                className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60 hover-lift reveal-premium shadow-lg cursor-pointer transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <CardContent className={`p-12 transition-all duration-500 ${openIndex === idx ? 'max-h-[500px]' : 'max-h-[80px] overflow-hidden'} flex items-center justify-center ${isMobile ? 'text-base' : 'text-lg'}`}
                  style={{ minHeight: openIndex === idx ? 180 : 80, height: openIndex === idx ? 'auto' : 80 }}
                >
                  <div className={`flex gap-6 w-full ${openIndex === idx ? 'items-start' : 'items-center justify-center'}`}>
                    {item.icon}
                    <div className={`${openIndex === idx ? '' : 'flex items-center'}`} style={{ width: '100%' }}>
                      <h3 className={`text-2xl ${isMobile ? 'md:text-3xl' : 'md:text-3xl'} font-sf font-semibold text-foreground mb-0 tracking-tight w-full`}>
                        {item.title}
                      </h3>
                      {openIndex === idx && (
                        <p className={`text-muted-foreground leading-relaxed whitespace-pre-line mt-4 ${isMobile ? 'text-base' : 'text-lg'}`}>
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <ParallaxContainer>
              <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60">
                <CardContent className="p-8">
                  <Flame className="w-16 h-16 mx-auto text-love mb-6 heartbeat" />
                  <div className="text-center">
                    <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                      Almas Gêmeas
                    </h3>
                    <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto drop-shadow">
                      Teu olhar me incinera,
                      Teu abraço me restaura.
                      E quando acendemos, o mundo some!
                      Nosso toque tem idioma próprio.
                      Faz do silêncio uma resposta.
                      Você sente tudo antes de eu pensar.
                      Isso que é amor, é abrigo!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ParallaxContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;