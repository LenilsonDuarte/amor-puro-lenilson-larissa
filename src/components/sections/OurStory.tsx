import { useEffect, useRef, useState } from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
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
              <p className="text-2xl text-muted-foreground font-inter font-light tracking-wide drop-shadow">
                Uma conexão que transcende o tempo e a distância
              </p>
            </div>
          </ParallaxContainer>

          <div className="space-y-16">
            {[{
              icon: <Calendar className="w-8 h-8 text-primary mt-2 flex-shrink-0" />,
              title: 'O Primeiro Encontro (2015)',
              text: 'Oito anos atrás, o destino nos apresentou pela primeira vez. Dois corações jovens se cruzaram, sem saber que aquele momento seria o início de algo extraordinário que floresceria anos depois.'
            }, {
              icon: <MapPin className="w-8 h-8 text-secondary mt-2 flex-shrink-0" />,
              title: 'O Reencontro (2020)',
              text: 'Cinco anos depois, a vida nos trouxe de volta. Conversas tímidas, sorrisos reconhecidos, mas ainda não era o momento certo. O coração já sabia, mas a mente ainda guardava mistérios.'
            }, {
              icon: <Heart className="w-8 h-8 text-accent mt-2 flex-shrink-0" />,
              title: 'A Reaproximação (Final de 2022)',
              text: 'Quando o universo decidiu que era a hora certa, nós nos reaproximamos. Como duas almas que sempre estiveram destinadas a se encontrar, descobrimos uma conexão única e inexplicável.'
            }, {
              icon: <Heart className="w-8 h-8 text-love mt-2 flex-shrink-0 heartbeat-premium" />,
              title: 'O Primeiro Beijo na Subway',
              text: 'Em frente ao seu condomínio, na Subway, aconteceu o momento mais mágico de nossas vidas. Ainda nem namorávamos, mas já éramos um só. O primeiro beijo selou o que nossos corações já sabiam: éramos feitos um para o outro.\n\"Ainda nem namorávamos e já falávamos sobre nomes de filhos: Antônio, Júlia, Eliza e Joaquim.\"'
            }].map((item, idx) => (
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
              <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60 hover-lift reveal-premium shadow-lg" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-16 text-center">
                  <h3 className="text-4xl font-sf font-bold text-foreground mb-6 tracking-tight drop-shadow">
                    Almas Gêmeas
                  </h3>
                  <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto drop-shadow">
                    Somos incrivelmente parecidos e conectados em tudo: gostos, ideias,
                    jeitos e objetivos. Como se fôssemos duas metades de uma mesma alma,
                    encontramos um no outro não apenas um amor, mas um lar.
                  </p>
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