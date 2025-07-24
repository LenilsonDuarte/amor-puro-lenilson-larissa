import { useEffect, useRef } from 'react';
import { Flame, Calendar, MessageCircle, BookOpen, Home, Users, Sparkles, Smile, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    {
      year: '2015',
      title: 'Primeiro Olhar',
      description: 'Dois corações jovens se cruzam pela primeira vez. Um encontro que ficou guardado na gaveta do destino.',
      icon: Sparkles,
      color: 'yellow-400'
    },
    {
      year: '2020',
      title: 'Reencontro',
      description: 'Conversas tímidas, sorrisos no telefone. O coração já sabia, mas a mente ainda escondia.',
      icon: MessageCircle,
      color: 'sky-400'
    },
    {
      year: '2022',
      title: 'Start!',
      description: 'A amizade já era casa. E mesmo sem namoro, falávamos de filhos, de futuro, e quem sabe uma pitada de nós...',
      icon: BookOpen,
      color: 'violet-500'
    },
    {
      year: '2023',
      title: 'Primeiro Beijo',
      description: 'Um encontro escondido. Um beijo que virou destino. Era amor antes de ser certeza.',
      icon: HeartHandshake,
      color: 'rose-500'
    },
    {
      year: '2024',
      title: 'Família',
      description: 'Tudo ficou mais sério, mais nosso. Você virou da minha. Eu virei da tua.',
      icon: Users,
      color: 'emerald-500'
    },
    {
      year: '2025',
      title: 'Nosso Caminho',
      description: 'Depois das curvas, achamos a direção. Agora é passo firme, construção, e sonho compartilhado.',
      icon: Home,
      color: 'pink-500'
    }
  ];

  return (
    <section id="linha-tempo" ref={sectionRef} className="relative  bg-gradient-dreamy">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16 reveal">
            <Calendar className="w-8 h-8 md:w-12 md:h-12 mx-auto text-primary mb-4 md:mb-6" />
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-8">
              Linha do Tempo
            </h2>
            <p className="text-base md:text-xl text-muted-foreground font-inter">
              Os momentos que construíram nossa história de amor
            </p>
          </div>

          <div className="relative">
            <div className={`absolute ${isMobile ? 'left-4' : 'left-1/2'} transform ${isMobile ? '' : 'md:-translate-x-1/2'} top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent`} style={{ minHeight: '100%' }}></div>

            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative reveal flex flex-col ${isMobile ? 'items-end' : 'md:flex-row items-center md:items-start'} ${!isMobile && (isEven ? 'md:flex-row' : 'md:flex-row-reverse')}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`absolute ${isMobile ? 'left-4' : 'left-1/2'} transform ${isMobile ? '' : 'md:-translate-x-1/2'} -translate-y-1/2 ${isMobile ? 'top-8' : 'md:top-1/2'} z-10`}>
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 border border-white/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    <div
                      className={`w-full md:w-5/12 mt-16 md:mt-0
                        ${isMobile ? 'ml-20 pr-2' : isEven ? 'md:ml-0 md:mr-24 md:pr-8 md:pl-0 md:text-right md:items-end' : 'md:mr-0 md:ml-24 md:pl-8 md:pr-0 md:text-left md:items-start'}`}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : isEven ? 'flex-end' : 'flex-start' }}
                    >
                      <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60">
                        <CardContent className={`p-4 md:p-6 ${!isMobile && (isEven ? 'text-right items-end' : 'text-left items-start')}`}
                          style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : isEven ? 'flex-end' : 'flex-start' }}
                        >
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                            <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-white/10 text-white/90">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-playfair font-semibold text-foreground mb-1 md:mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base">
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
        </div>
      </div>
    </section>
  );
};

export default Timeline;