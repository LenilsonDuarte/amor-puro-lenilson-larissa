import { useEffect, useRef } from 'react';
import { Camera, Heart } from 'lucide-react';

const Gallery = () => {
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
    <section id="galeria" ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Camera className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Nossa Galeria
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Momentos eternizados do nosso amor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <div 
                key={index} 
                className="reveal group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl romantic-glow bg-gradient-dreamy aspect-square">
                  {/* TODO: Replace with actual photos */}
                  {/* Foto {index} - Insert beautiful photo of Lenilson and Larissa here */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                    <div className="text-center">
                      <Heart className="w-12 h-12 mx-auto text-love/40 mb-4" />
                      <p className="text-muted-foreground font-inter">
                        {/* Foto {index} */}
                        Memória Especial {index}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-love/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white heartbeat" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <p className="text-lg text-muted-foreground font-inter italic">
              "Cada foto conta uma história, cada sorriso guarda um segredo, 
              cada olhar revela um amor infinito."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;