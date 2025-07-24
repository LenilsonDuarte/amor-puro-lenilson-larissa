import { useEffect, useRef } from 'react';

const ScrollIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (indicatorRef.current) {
        indicatorRef.current.style.transform = `scaleX(${scrollPercent / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return <div ref={indicatorRef} className="scroll-indicator w-full" />;
};

const ParallaxContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      
      containerRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${y * 2}deg) 
        rotateY(${x * 2}deg) 
        translateZ(0)
      `;
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={`parallax transition-transform duration-100 ${className}`}>
      {children}
    </div>
  );
};

const GlowOrb = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`} style={style} />
);

const PremiumEffects = () => {
  return (
    <>
      <ScrollIndicator />
      
      {/* Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <GlowOrb className="w-96 h-96 bg-love/30 -top-48 -left-48 animate-float-premium" />
        <GlowOrb className="w-64 h-64 bg-accent/20 top-1/4 -right-32 animate-float-premium" style={{ animationDelay: '2s' }} />
        <GlowOrb className="w-80 h-80 bg-primary/10 bottom-1/4 -left-40 animate-float-premium" style={{ animationDelay: '4s' }} />
        <GlowOrb className="w-72 h-72 bg-love/20 -bottom-36 -right-36 animate-float-premium" style={{ animationDelay: '6s' }} />
      </div>
    </>
  );
};

export { PremiumEffects, ParallaxContainer };
export default PremiumEffects;