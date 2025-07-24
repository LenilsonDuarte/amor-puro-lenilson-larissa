import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface OpeningScreenProps {
  onComplete: () => void;
}

const OpeningScreen = ({ onComplete }: OpeningScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800); // Wait for fade out animation
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-dreamy flex items-center justify-center transition-opacity duration-800 opacity-0 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-dreamy flex items-center justify-center transition-opacity duration-800">
      <div className="text-center space-y-8">
        <Heart className="w-16 h-16 mx-auto text-love heartbeat" />
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-foreground typewriter">
            Lenilson ❤️ Larissa
          </h1>
          
          <p className="text-xl md:text-2xl font-inter text-muted-foreground fade-in">
            Uma história de amor verdadeiro
          </p>
        </div>
        
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default OpeningScreen;