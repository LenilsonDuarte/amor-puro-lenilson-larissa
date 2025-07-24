import { useEffect, useRef } from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxContainer } from '../PremiumEffects';

const OurStory = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal-premium');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nossa-historia" ref={sectionRef} className="relative py-32 md:py-48">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <ParallaxContainer>
            <div className="text-center mb-24 reveal-premium">
              <Heart className="w-16 h-16 mx-auto text-love mb-8 heartbeat-premium" />
              <h2 className="text-5xl md:text-7xl font-sf font-bold text-foreground mb-8 tracking-tight">
                Nossa História
              </h2>
              <p className="text-2xl text-muted-foreground font-inter font-light tracking-wide">
                Uma conexão que transcende o tempo e a distância
              </p>
            </div>
          </ParallaxContainer>

          <div className="space-y-16">
            <Card className="glass-card hover-lift glow-premium border-primary/10 reveal-premium">
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <Calendar className="w-8 h-8 text-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-sf font-semibold text-foreground mb-4 tracking-tight">
                      O Primeiro Encontro (2015)
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Oito anos atrás, o destino nos apresentou pela primeira vez. 
                      Dois corações jovens se cruzaram, sem saber que aquele momento 
                      seria o início de algo extraordinário que floresceria anos depois.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-premium border-secondary/10 reveal-premium" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <MapPin className="w-8 h-8 text-secondary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-sf font-semibold text-foreground mb-4 tracking-tight">
                      O Reencontro (2020)
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Cinco anos depois, a vida nos trouxe de volta. Conversas tímidas, 
                      sorrisos reconhecidos, mas ainda não era o momento certo. 
                      O coração já sabia, mas a mente ainda guardava mistérios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-premium border-accent/10 reveal-premium" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <Heart className="w-8 h-8 text-accent mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-sf font-semibold text-foreground mb-4 tracking-tight">
                      A Reaproximação (Final de 2022)
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Quando o universo decidiu que era a hora certa, nós nos reaproximamos. 
                      Como duas almas que sempre estiveram destinadas a se encontrar, 
                      descobrimos uma conexão única e inexplicável.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift glow-premium border-love/20 reveal-premium" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <Heart className="w-8 h-8 text-love mt-2 flex-shrink-0 heartbeat-premium" />
                  <div>
                    <h3 className="text-3xl font-sf font-semibold text-foreground mb-4 tracking-tight">
                      O Primeiro Beijo na Subway
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Em frente ao seu condomínio, na Subway, aconteceu o momento mais 
                      mágico de nossas vidas. Ainda nem namorávamos, mas já éramos um só. 
                      O primeiro beijo selou o que nossos corações já sabiam: 
                      éramos feitos um para o outro.
                    </p>
                    <p className="text-foreground font-semibold text-xl italic leading-relaxed">
                      "Ainda nem namorávamos e já falávamos sobre nomes de filhos: 
                      Antônio, Júlia, Eliza e Joaquim."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ParallaxContainer>
              <Card className="glass border-love/30 bg-gradient-hero/5 hover-lift reveal-premium" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-16 text-center">
                  <h3 className="text-4xl font-sf font-bold text-foreground mb-6 tracking-tight">
                    Almas Gêmeas
                  </h3>
                  <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
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