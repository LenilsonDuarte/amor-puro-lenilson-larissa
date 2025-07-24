import { useEffect, useRef } from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nossa-historia" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Heart className="w-12 h-12 mx-auto text-love mb-6 heartbeat" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Uma conexão que transcende o tempo e a distância
            </p>
          </div>

          <div className="space-y-12">
            <Card className="romantic-glow border-primary/20 reveal">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Calendar className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      O Primeiro Encontro (2015)
                    </h3>
                    <p className="text-muted-foreground">
                      Oito anos atrás, o destino nos apresentou pela primeira vez. 
                      Dois corações jovens se cruzaram, sem saber que aquele momento 
                      seria o início de algo extraordinário que floresceria anos depois.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="romantic-glow border-secondary/20 reveal">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      O Reencontro (2020)
                    </h3>
                    <p className="text-muted-foreground">
                      Cinco anos depois, a vida nos trouxe de volta. Conversas tímidas, 
                      sorrisos reconhecidos, mas ainda não era o momento certo. 
                      O coração já sabia, mas a mente ainda guardava mistérios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="romantic-glow border-accent/20 reveal">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      A Reaproximação (Final de 2022)
                    </h3>
                    <p className="text-muted-foreground">
                      Quando o universo decidiu que era a hora certa, nós nos reaproximamos. 
                      Como duas almas que sempre estiveram destinadas a se encontrar, 
                      descobrimos uma conexão única e inexplicável.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="romantic-glow border-love/20 reveal">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="w-6 h-6 text-love mt-1 heartbeat" />
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      O Primeiro Beijo na Subway
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Em frente ao seu condomínio, na Subway, aconteceu o momento mais 
                      mágico de nossas vidas. Ainda nem namorávamos, mas já éramos um só. 
                      O primeiro beijo selou o que nossos corações já sabiam: 
                      éramos feitos um para o outro.
                    </p>
                    <p className="text-foreground font-semibold italic">
                      "Ainda nem namorávamos e já falávamos sobre nomes de filhos: 
                      Antônio, Júlia, Eliza e Joaquim."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-romantic border-primary/30 reveal">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                  Almas Gêmeas
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Somos incrivelmente parecidos e conectados em tudo: gostos, ideias, 
                  jeitos e objetivos. Como se fôssemos duas metades de uma mesma alma, 
                  encontramos um no outro não apenas um amor, mas um lar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;