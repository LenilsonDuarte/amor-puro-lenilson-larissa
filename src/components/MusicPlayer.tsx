import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-start music after 2 seconds
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Handle autoplay restrictions
          console.log('Autoplay was prevented');
        });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-8 right-8 z-50 flex gap-3">
      {/* TODO: Add actual "Um Amor Puro - Djavan" audio file */}
      <audio
        ref={audioRef}
        loop
        // src="/path-to-um-amor-puro-djavan.mp3"
      />
      
      <Button
        variant="secondary"
        size="sm"
        onClick={togglePlay}
        className="glass-card hover-lift magnetic-btn group"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 transition-transform group-hover:scale-110" />
        ) : (
          <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
        )}
      </Button>
      
      <Button
        variant="secondary"
        size="sm"
        onClick={toggleMute}
        className="glass-card hover-lift magnetic-btn group"
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 transition-transform group-hover:scale-110" />
        ) : (
          <Volume2 className="h-4 w-4 transition-transform group-hover:scale-110" />
        )}
      </Button>
    </div>
  );
};

export default MusicPlayer;