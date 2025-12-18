import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-beige shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-moss-green to-warm-orange flex items-center justify-center">
            <span className="text-white font-bold text-lg">DR</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-moss-green">Daniel Rosenthal</h1>
            <p className="text-xs text-text-light">Terapeuta</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('para-quem')}
            className="text-text-dark hover:text-moss-green transition-colors font-medium"
          >
            Para Quem
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-text-dark hover:text-moss-green transition-colors font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('abordagem')}
            className="text-text-dark hover:text-moss-green transition-colors font-medium"
          >
            Abordagem
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-text-dark hover:text-moss-green transition-colors font-medium"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('investimento')}
            className="text-text-dark hover:text-moss-green transition-colors font-medium"
          >
            Investimento
          </button>
          <a
            href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20agendar%20uma%20sessão"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-warm-beige rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-warm-beige bg-warm-beige-light">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('para-quem')}
              className="text-left text-text-dark hover:text-moss-green transition-colors font-medium py-2"
            >
              Para Quem
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-left text-text-dark hover:text-moss-green transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('abordagem')}
              className="text-left text-text-dark hover:text-moss-green transition-colors font-medium py-2"
            >
              Abordagem
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left text-text-dark hover:text-moss-green transition-colors font-medium py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('investimento')}
              className="text-left text-text-dark hover:text-moss-green transition-colors font-medium py-2"
            >
              Investimento
            </button>
            <a
              href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20agendar%20uma%20sessão"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent block text-center"
            >
              Agendar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
