import { useEffect, useState } from 'react';
import { Heart, Play } from 'lucide-react';
import { ParallaxContainer } from './PremiumEffects';
import { useIsMobile } from '@/hooks/use-mobile';

interface OpeningScreenProps {
  onComplete: () => void;
}

const OpeningScreen = ({ onComplete }: OpeningScreenProps) => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [started, setStarted] = useState(false);
  const [playBtnFading, setPlayBtnFading] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const isMobile = useIsMobile();

  // Inicia a animação e a música ao clicar no botão de play
  const handleStart = () => {
    setPlayBtnFading(true);
    // Toca a música localmente
    const audio = document.querySelector('audio');
    if (audio) {
      audio.muted = false;
      audio.play().catch(() => { });
    }
    // Após fade-out do botão, inicia as letras com delay de 1s
    setTimeout(() => {
      setStarted(true);
      setTimeout(() => setShowLetters(true), 1000);
    }, 700); // tempo do fade-out
  };

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 300);
      }, 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete, started]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-50 glass flex items-center justify-center transition-all duration-800 ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} bg-gradient-to-br from-black/90 via-love/10 to-black/80 shadow-2xl glow-premium`}>
      <ParallaxContainer className="text-center space-y-12 w-full px-2">
        {!started && (
          <button
            onClick={handleStart}
            className={`mx-auto flex flex-col items-center justify-center gap-4 bg-love/90 hover:bg-love/80 transition-all duration-300 rounded-full p-8 shadow-2xl focus:outline-none border-4 border-white/30 animate-soft-blink ${playBtnFading ? 'animate-fade-out-btn' : 'animate-fade-in-btn'}`}
            style={{ boxShadow: '0 8px 32px 0 rgba(255,0,64,0.18)' }}
            disabled={playBtnFading}
          >
            <span className="relative flex items-center justify-center">
              <Play className="w-16 h-16 text-white drop-shadow-lg" />
            </span>
            <span
              style={{
                fontFamily: "'Homemade Apple', cursive",
                fontSize: '1.5rem',
                color: 'white',
                marginTop: '0.5rem',
                display: 'block'
              }}
            >
              24.07
            </span>
          </button>
        )}
        {started && showLetters && (
          <>
            <div className="space-y-8 w-full flex flex-col items-center justify-center">
              {isMobile ? (
                <div className="flex flex-col items-center justify-center w-full">
                  <span className="text-5xl font-sf font-bold text-foreground drop-shadow mb-2" style={{ fontSize: '2.2rem' }}>Lenilson</span>
                  <span className="text-5xl md:text-9xl font-sf font-bold text-love drop-shadow mb-2" style={{ fontSize: '2.5rem' }}>❤️</span>
                  <span className="text-5xl font-sf font-bold text-foreground drop-shadow" style={{ fontSize: '2.2rem' }}>Larissa</span>
                </div>
              ) : (
                <h1 className="text-7xl md:text-9xl font-sf font-bold text-foreground typewriter-premium tracking-tight drop-shadow">
                  Lenilson ❤️ Larissa
                </h1>
              )}
              <p className="text-xl md:text-3xl font-inter text-muted-foreground font-light tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards] drop-shadow max-w-xs md:max-w-full mx-auto">
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
          </>
        )}
      </ParallaxContainer>
      <style>{`
        .animate-spin-slow { animation: spin 3.5s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        .animate-soft-blink { animation: softBlink 2.5s ease-in-out infinite; }
        @keyframes softBlink { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.25); } }

        .animate-fade-in-btn {
          animation: fadeInBtn 0.7s ease-out 1s both; /* ⬅ duração 0.7s + atraso de 1s */
        }

        .animate-fade-out-btn {
          animation: fadeOutBtn 1s ease-in-out both; /* ⬅ duração de saída 1s */
        }

        @keyframes fadeInBtn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeOutBtn {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        @media (max-width: 767px) {
          .typewriter-premium { font-size: 2.2rem !important; }
        }
      `}</style>
    </div>
  );
};

export default OpeningScreen;

declare global {
  interface Window {
    __forcePlayMusic?: () => void;
  }
}