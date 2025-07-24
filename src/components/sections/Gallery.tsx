import { useEffect, useRef } from 'react';
import { Camera, Heart } from 'lucide-react';
import img1 from '@/assets/1.jpeg';
import img2 from '@/assets/2.jpeg';
import img3 from '@/assets/3.jpeg';
import img4 from '@/assets/4.jpeg';
import img5 from '@/assets/5.jpeg';
import img6 from '@/assets/6.jpeg';

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

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section id="galeria" ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-dreamy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Camera className="w-12 h-12 mx-auto text-primary mb-6 drop-shadow-lg" />
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-8">
              Nossa Galeria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="reveal group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl glass-card romantic-glow bg-gradient-to-br from-black/70 via-love/10 to-black/80 aspect-square border border-love/10 shadow-lg group-hover:scale-105 transition-all duration-300">
                  <img src={img} alt={`Memória Especial ${index + 1}`} className="object-cover w-full h-full" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-love/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white heartbeat" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <p className="text-lg text-foreground font-inter italic drop-shadow">
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