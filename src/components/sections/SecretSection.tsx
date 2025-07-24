import { useState, useEffect, useRef } from 'react';
import { Lock, Eye, EyeOff, Heart, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const SecretSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const correctPassword = 'ascoisa';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const resetSecret = () => {
    setIsUnlocked(false);
    setPassword('');
    setIsOpen(false);
  };

  return (
    <section id="segredos" ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-dreamy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <Lock className="w-12 h-12 mx-auto text-secret mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secret drop-shadow-glow mb-6">
              Área Secreta
            </h2>
            <p className="text-2xl text-white/80 italic font-handwritten tracking-wide">
              Só nós sabemos ein... 😏
            </p>
          </div>

          <div className="text-center reveal">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-secret hover:shadow-2xl ring-2 ring-love/50 hover:ring-love text-lg px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Lock className="w-5 h-5 mr-2 animate-bounce-slow" />
                  Entrar na Área Secreta
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-md backdrop-blur-xl bg-black/50 border border-love/20 shadow-xl rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center text-secret text-2xl font-playfair">
                    🔐 Área Restrita
                  </DialogTitle>
                </DialogHeader>

                {!isUnlocked ? (
                  <div className="space-y-6 rounded-xl bg-white/10 backdrop-blur-md p-6 border border-white/10 shadow-lg">
                    <p className="text-center text-muted-foreground">
                      Digite a senha secreta que só nós dois conhecemos...
                    </p>

                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Digite a senha..."
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={`pr-10 ${error ? 'border-red-500' : ''}`}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm text-center">
                          Quer uma dica? Complete a palavra: ascoi... 😉
                        </p>
                      )}

                      <Button type="submit" className="w-full bg-gradient-secret">
                        Desbloquear
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-8 text-center px-4 py-6 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-xl">
                    <Flame
                      className="w-10 h-10 mx-auto text-pink-400 animate-neon-pulse"
                      style={{
                        filter: 'drop-shadow(0 0 6px #ec4899) drop-shadow(0 0 12px #ec4899) drop-shadow(0 0 24px #ec4899)',
                      }}
                    />

                    <p className="text-white/90 mt-4">
                      Aqui é onde a gente se larga. Onde o meu corpo conhece o teu melhor que qualquer palavra. Onde tua respiração muda só de eu olhar.
                    </p>

                    <p className="italic text-pink-400 text-lg mt-3">
                      Gosto demais do nosso código “prascoisa”, ninguém fica sabendo, e enquanto isso, sobe o tesão, loucura, vício, corpo esquenta!
                    </p>

                    <p className="text-white/80 mt-4">
                      Eu sei o que te faz tremer. Tu sabe onde me desmonta. E é aqui que a gente deixa de fingir controle.
                    </p>

                    <p className="text-pink-200 font-semibold mt-4">
                      Aqui não tem pudor. Tem pele, tem língua, tem eu dentro ti.
                    </p>

                    <p className="text-sm italic text-white/70 mt-6">
                      Nosso tesão é bruto, quente e sem filtro. E é exatamente assim que tem que ser.
                    </p>
                    <Button
                      variant="ghost"
                      onClick={resetSecret}
                      className="mt-6 text-white hover:bg-white/10 transition"
                    >
                      Fechar
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretSection;
