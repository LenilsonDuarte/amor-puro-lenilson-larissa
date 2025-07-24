import { useEffect, useRef } from 'react';
import { Heart, Home, Baby, Car, Bike, Smile, Music, Infinity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Promises = () => {
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

  const promises = [
    {
      icon: Smile,
      title: 'Prometo cuidar do teu sorriso todos os dias',
      description: 'Seu sorriso é minha razão de existir, vou protegê-lo sempre',
      color: 'primary'
    },
    {
      icon: Home,
      title: 'Quero envelhecer contigo e formar nossa família',
      description: 'Construir um lar cheio de amor e cumplicidade',
      color: 'secondary'
    },
    {
      icon: Baby,
      title: 'Nossos filhos: Antônio, Júlia, Eliza e Joaquim',
      description: 'Vier quatro pequenas extensões do nosso amor',
      color: 'love'
    },
    {
      icon: Heart,
      title: 'Quero morar contigo, sair do Brasil e enriquecer ao teu lado',
      description: 'Construir nossos sonhos juntos, onde quer que seja',
      color: 'accent'
    },
    {
      icon: Car,
      title: 'Prometo realizar teu sonho de ter uma Range Rover Velar',
      description: 'Vou trabalhar para tornar todos os seus sonhos realidade',
      color: 'primary'
    },
    {
      icon: Bike,
      title: 'E realizar o meu de ter uma moto esportiva linda',
      description: 'Dividindo sonhos e conquistas, sempre juntos',
      color: 'secondary'
    },
    {
      icon: Smile,
      title: 'Prometo rir das tuas piadas, das tuas caras, e da tua risada',
      description: 'Que me destrói por dentro de tanto amor',
      color: 'love'
    },
    {
      icon: Music,
      title: 'Sou viciado na tua voz, teu sorriso e tua risada',
      description: 'Isso me hipnotiza e me faz te amar ainda mais',
      color: 'accent'
    }
  ];

  return (
    <section id="promessas" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Infinity className="w-12 h-12 mx-auto text-love mb-6" />
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-8">
              Promessas & Planos
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Compromissos do coração para toda eternidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promises.map((promise, index) => {
              const Icon = promise.icon;

              return (
                <Card
                  key={index}
                  className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60 reveal hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-${promise.color}/20 flex-shrink-0`}>
                        <Icon className={`w-6 h-6 text-${promise.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 leading-tight">
                          {promise.title}
                        </h3>
                        <p className="text-muted-foreground font-inter leading-relaxed">
                          {promise.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center reveal">
            <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 mx-auto text-love mb-6 heartbeat" />
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                  Todas essas promessas são seladas com amor infinito
                </h3>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Cada palavra é uma extensão do meu coração,
                  cada promessa é um pedaço da minha alma entregue a você.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promises;