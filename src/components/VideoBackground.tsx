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
          transform: `
            scale(1.1) 
            translateX(${mousePosition.x * 10}px) 
            translateY(${mousePosition.y * 10}px)
          `,
        }}
      />
      
      {/* TODO: Replace above div with video element when video is provided */}
      {/* 
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-1000"
        style={{
          transform: `
            scale(1.1) 
            translateX(${mousePosition.x * 5}px) 
            translateY(${mousePosition.y * 5}px)
          `,
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/path-to-romantic-video.mp4" type="video/mp4" />
      </video>
      */}
      
      {/* Premium Overlay */}
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
          <div className="absolute inset-0 backdrop-blur-[0.5px]" />
        </>
      )}
    </div>
  );
};

export default VideoBackground;