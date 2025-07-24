import { useEffect, useRef } from 'react';
import { Home, Baby, Bike, Smile, Music } from 'lucide-react';
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
      title: 'Manutenção da paz',
      description: 'Prometo criar uma usina de paciência dentro de mim',
      color: 'primary'
    },
    {
      icon: Home,
      title: 'Quero envelhecer contigo e formar nossa família',
      description: 'Construir um lar cheio de amor e cumplicidade (e que esse lar seja muito longe do Brasil!)',
      color: 'secondary'
    },
    {
      icon: Baby,
      title: 'Nossos filhos: Antônio, Júlia, Eliza e Joaquim',
      description: 'Que venha logo as quatro pequenas extensões do nosso amor!',
      color: 'love'
    },
    {
      icon: Bike,
      title: 'Comprar uma moto esportiva',
      description: 'Uma pra mim e outra pra ti, e se tu não gostar já sabe...',
      color: 'secondary'
    },
    {
      icon: Smile,
      title: 'Prometo rir das tuas piadas, das tuas caras, e da tua risada',
      description: 'Sempre fui fascinado pela tua voz e pela tua risada! (me cutucar não é uma piada, então não vou rir)',
      color: 'love'
    },
    {
      icon: Music,
      title: 'Shows e mais shows!',
      description: 'Também prometo que vamos a todos os shows que pudermos!',
      color: 'accent'
    }
  ];

  return (
    <section id="promessas" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-8">
              Promessas & Planos
            </h2>
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
        </div>
      </div>
    </section>
  );
};

export default Promises;