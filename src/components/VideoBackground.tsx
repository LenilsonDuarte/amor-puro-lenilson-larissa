import { useEffect, useRef, useState } from 'react';
import backgroundImage from '@/assets/romantic-background.jpg';

interface VideoBackgroundProps {
  className?: string;
  overlay?: boolean;
}

const VideoBackground = ({ className = "", overlay = true }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out scale-110"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // Removido: filter: 'brightness(0.45) contrast(1.1) saturate(1.1)',
          transform: `
            scale(1.1) 
            translateX(${mousePosition.x * 10}px) 
            translateY(${mousePosition.y * 10}px)
          `,
        }}
      />
      {/* Removidos todos os overlays, gradientes, granulação e blur do fundo */}
      {/* Nada além do fundo visível */}
      {overlay && (<></>)}
    </div>
  );
};

export default VideoBackground;