import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { ParallaxContainer } from './PremiumEffects';

interface OpeningScreenProps {
  onComplete: () => void;
}

const OpeningScreen = ({ onComplete }: OpeningScreenProps) => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 300);
      }, 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-50 glass flex items-center justify-center transition-all duration-800 ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} bg-gradient-to-br from-black/90 via-love/10 to-black/80 shadow-2xl glow-premium`}>
      <ParallaxContainer className="text-center space-y-12">
        {/* <Heart className="w-20 h-20 mx-auto text-love heartbeat-premium float-premium drop-shadow-2xl" /> */}

        <div className="space-y-8">
          <h1 className="text-7xl md:text-9xl font-sf font-bold text-foreground typewriter-premium tracking-tight drop-shadow">
            Lenilson ❤️ Larissa
          </h1>

          <p className="text-2xl md:text-3xl font-inter text-muted-foreground font-light tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards] drop-shadow">
            Uma história de amor verdadeiro
          </p>
        </div>

        <div className="flex justify-center space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-love rounded-full animate-pulse shadow-lg"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </ParallaxContainer>
    </div>
  );
};

export default OpeningScreen;