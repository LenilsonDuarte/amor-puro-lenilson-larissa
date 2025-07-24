import { useState, useEffect, useRef } from 'react';
import { Lock, Eye, EyeOff, Heart } from 'lucide-react';
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
            <Lock className="w-12 h-12 mx-auto text-secret mb-6" />
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Área Secreta
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Só para nossos olhos... 😏
            </p>
          </div>

          <div className="text-center reveal">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-secret hover:shadow-xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Entrar na Área Secreta
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-secret text-2xl font-playfair">
                    🔐 Área Restrita
                  </DialogTitle>
                </DialogHeader>

                {!isUnlocked ? (
                  <div className="space-y-6">
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
                          Ops! Senha incorreta. Tente novamente... 😉
                        </p>
                      )}

                      <Button type="submit" className="w-full bg-gradient-secret">
                        Desbloquear
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-gradient-secret rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-10 h-10 text-white heartbeat" />
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-secret mb-4">
                        Bem-vinda ao nosso cantinho especial! 😏
                      </h3>
                    </div>

                    <Card className="glass-card border-love/30 romantic-glow backdrop-blur-xl bg-black/60">
                      <CardContent className="p-6 text-center">
                        <p className="text-lg text-foreground mb-4">
                          Você tem acesso a algo que só nós dois sabemos... 😏
                        </p>

                        <div className="space-y-4 text-foreground/80">
                          <p className="italic">
                            "Ascoisa" - nossa palavra secreta e divertida para os momentos mais íntimos...
                          </p>

                          <p>
                            É incrível como criamos nossa própria linguagem do amor,
                            cheia de carinho, humor e cumplicidade.
                          </p>

                          <p className="font-semibold text-secret">
                            Esses momentos são só nossos, guardados no coração e na memória,
                            onde o amor se expressa de todas as formas possíveis. ❤️
                          </p>

                          <div className="mt-6 p-4 bg-love/10 rounded-lg">
                            <p className="text-sm italic">
                              "O amor verdadeiro se expressa em todos os momentos,
                              dos mais delicados aos mais intensos,
                              sempre com carinho, respeito e muita paixão."
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <Button
                        variant="outline"
                        onClick={resetSecret}
                        className="border-secret/30"
                      >
                        Fechar área secreta
                      </Button>
                    </div>
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