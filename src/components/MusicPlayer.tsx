import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isMobile = useIsMobile();

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      audio.currentTime = 0 // ⬅️ Altere aqui se quiser iniciar em outro segundo
    }

    const timer = setTimeout(() => {
      audio.addEventListener('loadedmetadata', handleLoadedMetadata)

      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          console.log('Autoplay bloqueado pelo navegador.')
        })
    }, 2000)

    return () => {
      clearTimeout(timer)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className={`fixed top-4 ${isMobile ? 'right-2' : 'right-4'} z-50`}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://archive.org/download/nina-simone-the-great-nina-simone/The%20Great%20Nina%20Simone/03%20I%20Loves%20You%20Porgy.mp3"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="m-0 p-2 rounded-full bg-love/90 hover:bg-love/80 text-white shadow-lg focus:outline-none border-none"
        style={{ boxShadow: '0 8px 32px 0 rgba(255,0,64,0.18)' }}
      >
        {isMuted ? (
          <VolumeX className="w-7 h-7" />
        ) : (
          <Volume2 className="w-7 h-7" />
        )}
      </Button>
    </div>
  )
}

export default MusicPlayer
