import { useState } from 'react';
import VideoBackground from '@/components/VideoBackground';
import MusicPlayer from '@/components/MusicPlayer';
import OpeningScreen from '@/components/OpeningScreen';
import Navigation from '@/components/Navigation';
import PremiumEffects from '@/components/PremiumEffects';
import OurStory from '@/components/sections/OurStory';
import Timeline from '@/components/sections/Timeline';
import Gallery from '@/components/sections/Gallery';
import LoveLetter from '@/components/sections/LoveLetter';
import Promises from '@/components/sections/Promises';
import SecretSection from '@/components/sections/SecretSection';
import FinalSurprise from '@/components/sections/FinalSurprise';
import Footer from '@/components/Footer';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleOpeningComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Premium Effects & Background */}
      <VideoBackground />
      <PremiumEffects />
      
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Opening Screen */}
      {!showContent && <OpeningScreen onComplete={handleOpeningComplete} />}
      
      {/* Main Content */}
      {showContent && (
        <>
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10">
            <OurStory />
            <Timeline />
            <Gallery />
            <LoveLetter />
            <Promises />
            <SecretSection />
            <FinalSurprise />
          </main>
          
          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
