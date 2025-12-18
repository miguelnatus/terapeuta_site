import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-moss-green text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-warm-orange flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h3 className="text-lg font-bold">Daniel Rosenthal</h3>
            </div>
            <p className="text-warm-beige-light text-sm leading-relaxed">
              Terapeuta especializado em relacionamentos, maturidade emocional e ansiedade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-warm-orange">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#para-quem" className="hover:text-warm-orange transition-colors">
                  Para Quem é a Terapia
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-warm-orange transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-warm-orange transition-colors">
                  Investimento
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-warm-orange transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-warm-orange">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5547988721507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-orange transition-colors"
                >
                  WhatsApp: (47) 98872-1507
                </a>
              </li>
              <li className="text-warm-beige-light">
                Atendimento: Online para todo o Brasil
              </li>
              <li className="text-warm-beige-light text-xs">
                Disponibilidade: Segunda a Sexta
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-moss-green-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-beige-light">
            <p>© 2025 Daniel Rosenthal. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-warm-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-warm-orange transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
