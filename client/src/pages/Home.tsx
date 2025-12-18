import { ArrowRight, Leaf, Heart, Brain, MessageCircle, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-beige-light">
      <Header />

      {/* SEÇÃO 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-background.jpg)',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 max-w-2xl">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-moss-green mb-6 leading-tight">
              Cuidar de você também é cuidar do seu relacionamento.
            </h1>
            <p className="text-lg md:text-xl text-text-dark mb-8 leading-relaxed font-light">
              Um espaço terapêutico seguro para mulheres que desejam compreender seus sentimentos, fortalecer sua autonomia emocional e restaurar vínculos afetivos com mais maturidade, diálogo e esperança.
            </p>
            <p className="text-base md:text-lg text-text-light mb-10 leading-relaxed">
              Atendimento individual ou em casal, com escuta qualificada, respeito e clareza.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20agendar%20uma%20sessão"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Agendar Sessão <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20conversar%20sobre%20a%20terapia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Falar no WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PARA QUEM É A TERAPIA */}
      <section id="para-quem" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 bg-warm-beige-light px-4 py-2 rounded-full">
                <Leaf size={18} className="text-moss-green" />
                <span className="text-moss-green font-semibold text-sm">Para Quem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-4">
                Este espaço é para mulheres que...
              </h2>
            </div>

            <div className="space-y-4 mb-10">
              {[
                'Sentem que o relacionamento esfriou ou se tornou distante',
                'Vivem conflitos recorrentes, má comunicação ou silêncios dolorosos',
                'Estão cansadas de carregar tudo sozinhas',
                'Desejam restaurar a relação sem se anular',
                'Querem amadurecer emocionalmente, com mais clareza e segurança',
                'Amam, mas não sabem mais como se conectar',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start card-wellness">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-orange flex items-center justify-center mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-text-dark text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-moss-green/10 to-warm-orange/10 rounded-2xl p-8 border border-moss-green/20">
              <p className="text-center text-lg text-text-dark leading-relaxed">
                <span className="font-semibold text-moss-green">Você não precisa ter todas as respostas agora.</span>
                <br />
                <span className="text-text-light">A terapia começa exatamente no ponto onde você está.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 3: SOBRE O TERAPEUTA */}
      <section id="sobre" className="py-16 md:py-24 bg-warm-beige-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="/images/daniel-rosenthal-terapeuta.jpg"
                alt="Daniel Rosenthal - Terapeuta"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full">
                <Heart size={18} className="text-warm-orange" />
                <span className="text-moss-green font-semibold text-sm">Sobre</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-6">
                Daniel Rosenthal
              </h2>
              <p className="text-lg text-text-dark mb-4 leading-relaxed">
                Terapeuta especializado em relacionamentos, com formação em Ciência da Família pela CIM. Atuo no cuidado emocional de indivíduos e casais, com foco em relacionamentos, maturidade emocional e responsabilidade afetiva.
              </p>
              <p className="text-lg text-text-dark mb-4 leading-relaxed">
                Meu trabalho é voltado para ajudar mulheres e casais a compreenderem seus padrões emocionais, reorganizarem a comunicação e criarem relações mais conscientes, respeitosas e possíveis.
              </p>
              <p className="text-lg text-text-dark mb-6 leading-relaxed">
                Acredito que relacionamentos podem ser restaurados quando existe espaço para escuta, clareza emocional e compromisso com o amadurecimento — individual e relacional. Minha postura clínica é acolhedora, ética e direta, oferecendo segurança emocional para que mudanças reais aconteçam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 4: ABORDAGEM TERAPÊUTICA */}
      <section id="abordagem" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 bg-warm-beige-light px-4 py-2 rounded-full">
                <Brain size={18} className="text-moss-green" />
                <span className="text-moss-green font-semibold text-sm">Abordagem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-4">
                Minha Abordagem Terapêutica
              </h2>
              <p className="text-lg text-text-light mb-8">
                A terapia é um espaço de cuidado, mas também de responsabilidade.
              </p>
            </div>

            <p className="text-lg text-text-dark mb-8 leading-relaxed">
              Uno fundamentos da psicologia clínica e da terapia comportamental para trabalhar questões emocionais de forma prática, profunda e aplicável à vida real.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Escuta empática e sem julgamentos' },
                { icon: Brain, title: 'Compreensão dos padrões emocionais e relacionais' },
                { icon: Leaf, title: 'Organização de pensamentos, sentimentos e decisões' },
                { icon: ArrowRight, title: 'Desenvolvimento de maturidade emocional' },
              ].map((item, idx) => (
                <div key={idx} className="card-wellness flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-warm-orange/20">
                      <item.icon size={24} className="text-warm-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-moss-green mb-2">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                'Comunicação mais clara e respeitosa',
                'Mudanças sustentáveis, sem atalhos emocionais',
              ].map((item, idx) => (
                <div key={idx} className="card-wellness flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-warm-orange/20">
                      <Check size={24} className="text-warm-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-moss-green">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 5: SERVIÇOS */}
      <section id="servicos" className="py-16 md:py-24 bg-warm-beige-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-4">
              Serviços
            </h2>
            <p className="text-lg text-text-light">
              Atendimento adaptado às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Terapia Individual */}
            <div className="card-wellness">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-moss-green/20 flex items-center justify-center">
                  <Leaf size={24} className="text-moss-green" />
                </div>
                <h3 className="text-2xl font-bold text-moss-green">Terapia Individual</h3>
              </div>
              <p className="text-text-dark mb-4 leading-relaxed">
                Indicada para mulheres que desejam trabalhar ansiedade, insegurança, autocobrança, conflitos internos e desafios nos relacionamentos.
              </p>
              <p className="text-text-light leading-relaxed">
                Um espaço para você se fortalecer emocionalmente, compreender seus limites e fazer escolhas mais conscientes.
              </p>
            </div>

            {/* Terapia de Casal */}
            <div className="card-wellness">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-warm-orange/20 flex items-center justify-center">
                  <Heart size={24} className="text-warm-orange" />
                </div>
                <h3 className="text-2xl font-bold text-moss-green">Terapia de Casal</h3>
              </div>
              <p className="text-text-dark mb-4 leading-relaxed">
                Indicada para casais que desejam melhorar a comunicação, restaurar a confiança e reorganizar a relação.
              </p>
              <p className="text-text-light leading-relaxed">
                O foco não é "culpa", mas entendimento, responsabilidade e reconstrução do vínculo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 6: DIFERENCIAIS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-12 text-center">
              Diferenciais do Atendimento
            </h2>

            <div className="space-y-4 mb-12">
              {[
                'Plano terapêutico inicial definido desde as primeiras sessões',
                'Atendimento com valores, humano e profissional',
                'Espaço seguro para diálogo e amadurecimento emocional',
                'Possibilidade de atendimento individual ou em casal',
                'Acolhimento sem promessas irreais ou soluções prontas',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start card-wellness">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-moss-green flex items-center justify-center mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-text-dark text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20agendar%20minha%20sessão"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Quero Agendar Minha Sessão <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 7: BENEFÍCIOS */}
      <section className="py-16 md:py-24 bg-warm-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-4 text-center">
              Benefícios da Terapia
            </h2>
            <p className="text-center text-lg text-text-light mb-12">
              Ao longo do processo terapêutico, você pode desenvolver:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                'Mais clareza emocional',
                'Comunicação mais madura',
                'Redução da ansiedade e da sobrecarga emocional',
                'Relações mais equilibradas e conscientes',
                'Segurança para se posicionar sem culpa',
                'Autonomia emocional dentro do relacionamento',
              ].map((item, idx) => (
                <div key={idx} className="card-wellness flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-orange flex items-center justify-center mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-text-dark text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-moss-green/10 to-warm-orange/10 rounded-2xl p-8 border border-moss-green/20 text-center">
              <p className="text-lg text-text-dark leading-relaxed">
                <span className="font-semibold text-moss-green">Relacionamentos saudáveis começam em pessoas emocionalmente cuidadas.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 8: INVESTIMENTO */}
      <section id="investimento" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-moss-green mb-12 text-center">
              Investimento
            </h2>

            <div className="space-y-8 mb-12">
              {/* Terapia Individual */}
              <div className="card-wellness">
                <h3 className="text-2xl font-bold text-moss-green mb-4">Terapia Individual</h3>
                <div className="mb-4">
                  <p className="text-lg text-text-dark mb-2">
                    <span className="font-semibold">Sessão (40–50 minutos):</span> R$ 150,00
                  </p>
                </div>
                <p className="text-text-light leading-relaxed">
                  De forma discreta e responsável, também disponibilizamos algumas vagas com valor social, destinadas a pessoas que realmente necessitam. Acesso mediante disponibilidade.
                </p>
              </div>

              {/* Terapia de Casal */}
              <div className="card-wellness">
                <h3 className="text-2xl font-bold text-moss-green mb-4">Terapia de Casal</h3>
                <p className="text-lg text-text-dark mb-4">
                  <span className="font-semibold">Sessão (60–75 minutos):</span> Consultar disponibilidade e valores
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20consultar%20disponibilidade%20e%20valores"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
              >
                Consultar Disponibilidade <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SEÇÃO 9: CONTATO */}
      <section id="contato" className="py-16 md:py-24 bg-moss-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos conversar com calma?
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-warm-beige-light">
              Se você sente que é o momento de cuidar de você e do seu relacionamento, estou disponível para te ouvir.
            </p>

            <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <p className="text-xl font-semibold mb-4">
                Chame no WhatsApp:
              </p>
              <a
                href="https://wa.me/5547988721507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-warm-orange hover:text-warm-orange-light transition-colors"
              >
                (47) 98872-1507
              </a>
              <p className="text-warm-beige-light mt-6 text-lg">
                Atendimento: Online para todo o Brasil
              </p>
            </div>

            <a
              href="https://wa.me/5547988721507?text=Olá%20Daniel,%20gostaria%20de%20conversar%20sobre%20a%20terapia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-warm-orange hover:bg-warm-orange-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Falar Agora no WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
