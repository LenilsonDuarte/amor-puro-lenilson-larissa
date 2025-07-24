import { Heart, Infinity, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 bg-gradient-to-t from-pink-200 via-pink-50 to-white text-center">
      {/* Corações decorativos */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <Heart className="absolute left-10 top-10 w-10 h-10 text-love" />
        <Heart className="absolute right-10 bottom-10 w-14 h-14 text-love" />
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex flex-col justify-center items-center gap-3 text-lg font-bold text-love">
          <div className="flex items-center gap-3">
            <span>Lenilson</span>
            <Infinity className="w-5 h-5" />
            <span>Larissa</span>
          </div>
          <span>24.07.2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
