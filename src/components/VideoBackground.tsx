import { useEffect, useRef } from 'react';
import backgroundImage from '@/assets/romantic-background.jpg';

interface VideoBackgroundProps {
  className?: string;
  overlay?: boolean;
}

const VideoBackground = ({ className = "", overlay = true }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // For now, we'll use the static image as background
    // TODO: Replace with actual video when user provides video file
  }, []);

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      {/* Static romantic background image for now */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* TODO: Replace above div with video element when video is provided */}
      {/* 
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/path-to-romantic-video.mp4" type="video/mp4" />
      </video>
      */}
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/40" />
      )}
    </div>
  );
};

export default VideoBackground;