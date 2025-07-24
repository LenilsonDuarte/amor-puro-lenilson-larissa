import { useEffect, useRef } from 'react';
import { Heart, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Timeline = () => {
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

  const timelineEvents = [
    {
      year: '2015',
      title: 'Primeiro Contato',
      description: 'O destino nos apresentou pela primeira vez',
      icon: Sparkles,
      color: 'primary'
    },
    {
      year: '2020',
      title: 'Reencontro',
      description: 'Conversas e sorrisos que aqueceram o coração',
      icon: Heart,
      color: 'secondary'
    },
    {
      year: 'Dez/2022',
      title: 'Reaproximação',
      description: 'O universo conspirou para nos unir novamente',
      icon: Calendar,
      color: 'accent'
    },
    {
      year: 'Início 2023',
      title: 'Primeiros Encontros',
      description: 'Descobrindo a magia de estar juntos',
      icon: MapPin,
      color: 'love'
    },
    {
      year: '2023',
      title: 'Beijo na Subway',
      description: 'O momento que mudou tudo para sempre',
      icon: Heart,
      color: 'love'
    },
    {
      year: '24/07/2023',
      title: 'Início Oficial do Namoro',
      description: 'O dia que oficializamos nosso amor eterno',
      icon: Heart,
      color: 'love'
    },
    {
      year: '2023',
      title: 'Viagem para Parintins',
      description: 'Conhecendo a família e o Boi Garantido',
      icon: Users,
      color: 'accent'
    }
  ];

  return (
    <section id="linha-tempo" ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-dreamy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Calendar className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Linha do Tempo
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Os momentos que construíram nossa história de amor
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;

                return (
                  <div 
                    key={index} 
                    className={`relative reveal flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className={`w-16 h-16 rounded-full bg-${event.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="romantic-glow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-${event.color}/20 text-${event.color}`}>
                              {event.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special highlight for official dating start */}
          <div className="mt-16 text-center reveal">
            <Card className="bg-gradient-romantic border-love/30 romantic-glow">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 mx-auto text-love mb-6 heartbeat" />
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                  24 de Julho de 2023
                </h3>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  O dia em que nossa história de amor ganhou seu primeiro capítulo oficial. 
                  Hoje celebramos dois anos de um amor que cresce a cada dia.
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="text-4xl font-playfair font-bold text-love">
                    2 Anos de Amor Infinito
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;