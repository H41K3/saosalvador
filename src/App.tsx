import { useState } from "react";
import {
  ShoppingBag,
  ArrowRight,
  Sparkles,
  MapPin,
  Leaf,
  Droplet,
  Send,
  Package,
  Check,
  Menu,
  X,
} from "lucide-react";

function App() {
  // Estados para armazenar os campos do formulário
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [motivo, setMotivo] = useState("");

  // Estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para processar o formulário e preparar o e-mail
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailDestino = "comercialssalvador@gmail.com";
    const assunto = encodeURIComponent(`Trabalhe Conosco - ${nome}`);

    // Monta o corpo do e-mail com quebras de linha formatadas
    const corpoEmail = encodeURIComponent(
      `Nome completo: ${nome}\n` +
        `Idade: ${idade} anos\n` +
        `O que faz / Profissão: ${profissao}\n\n` +
        `Por que gostaria de trabalhar na São Salvador:\n${motivo}`,
    );

    // Dispara o link mailto nativo
    window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${corpoEmail}`;
  };

  return (
    <div className="relative min-h-screen bg-[#030A05] text-white overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Efeitos de Luz Futuristas */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#10B981]/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none z-0" />

      {/* Grid de Fundo Sutil */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Navbar High-Tech */}
      <header className="fixed top-0 z-50 w-full px-6 py-3 lg:px-12 flex justify-between items-center border-b border-white/5 bg-[#030A05]/70 backdrop-blur-md">
        {/* Logo Clickable (Recarrega e vai pro topo) */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
              window.location.href = window.location.pathname;
            }, 300);
          }}
          className="flex items-center gap-4 hover:opacity-80 transition-opacity bg-transparent border-none p-0 cursor-pointer"
        >
          <img
            src="/logo.jpg"
            alt="Palmito São Salvador"
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)] object-cover"
          />
          <span className="font-bold text-xl tracking-widest uppercase text-white/90">
            São Salvador
          </span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
          <a
            href="#produtos"
            className="hover:text-[#D4AF37] transition-colors no-underline"
          >
            Produtos
          </a>
          <a
            href="#origem"
            className="hover:text-[#D4AF37] transition-colors no-underline"
          >
            Origem
          </a>
          <a
            href="#contato"
            className="hover:text-[#D4AF37] transition-colors no-underline"
          >
            Contato
          </a>
          <a
            href="#trabalhe-conosco"
            className="hover:text-[#D4AF37] transition-colors no-underline"
          >
            Trabalhe Conosco
          </a>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden p-2 bg-transparent border-none cursor-pointer text-white hover:text-[#D4AF37] transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Janela do Menu Mobile (Flutuante) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030A05]/95 backdrop-blur-xl animate-fade-in md:hidden">
          <button
            className="absolute top-6 right-6 p-2 bg-transparent border-none cursor-pointer text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="flex flex-col gap-10 text-center text-lg font-bold tracking-widest text-white uppercase">
            <a
              href="#produtos"
              className="hover:text-[#D4AF37] transition-colors no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#origem"
              className="hover:text-[#D4AF37] transition-colors no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Origem
            </a>
            <a
              href="#contato"
              className="hover:text-[#D4AF37] transition-colors no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
            <a
              href="#trabalhe-conosco"
              className="hover:text-[#D4AF37] transition-colors no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trabalhe Conosco
            </a>
          </nav>
        </div>
      )}

      {/* Container Principal */}
      <main className="relative z-10 flex flex-col gap-12 pb-32">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
              100% Natural • Origem Garantida
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-8 max-w-5xl">
            O Puro Sabor da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#D4AF37] to-[#FDE047] drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              Nossa Floresta.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 font-light tracking-wide leading-relaxed">
            Esqueça produtos processados. Entregamos a verdadeira essência do
            palmito de açaí com um corte inteiro premium, textura amanteigada e
            respeito à Amazônia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
            <a
              href="#produtos"
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 border-none cursor-pointer no-underline"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <ShoppingBag className="w-5 h-5" />
              <span className="tracking-wide">Ver Produtos</span>
            </a>

            <a
              href="#origem"
              className="group w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white/80 font-medium flex items-center justify-center gap-3 hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer no-underline"
            >
              <span className="tracking-wide">Explorar a Origem</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Produtos */}
        <section
          id="produtos"
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 w-full"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#D4AF37] mb-4">
              Nossa Linha Premium
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
              Escolha o formato ideal para a sua necessidade. Ambos com a mesma
              qualidade amanteigada e o rigoroso padrão do corte inteiro de
              açaízeiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {/* Produto 1: Pote Grande */}
            <div className="relative group bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-[2rem] p-8 backdrop-blur-sm transition-all hover:bg-white/10 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-full h-40 bg-gradient-to-b from-black/40 to-transparent rounded-2xl mb-8 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                <Package className="w-16 h-16 text-[#D4AF37]/80 drop-shadow-xl" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                Pote Família
              </h3>
              <p className="text-[#10B981] font-medium text-sm mb-6 uppercase tracking-widest">
                Corte Inteiro
              </p>

              <p className="text-white/60 mb-8 font-light text-sm leading-relaxed flex-grow">
                A versão generosa e imponente. Ideal para refeições em família,
                saladas caprichadas e chefs que precisam de volume sem abrir mão
                do miolo perfeito.
              </p>

              <ul className="flex flex-col gap-3 mb-10 text-sm text-white/80 font-medium">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#10B981]/20">
                    <Check className="w-3 h-3 text-[#10B981]" />
                  </div>
                  Peso Líquido: 540g | Drenado: 300g
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#D4AF37]/20">
                    <Package className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  Caixa fechada: 15 unidades
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#10B981]/20">
                    <Check className="w-3 h-3 text-[#10B981]" />
                  </div>
                  100% Natural e Sem Glúten
                </li>
              </ul>

              <a
                href="#contato"
                className="w-full py-4 rounded-xl bg-white/10 text-white font-semibold text-center hover:bg-[#D4AF37] hover:text-black transition-colors no-underline"
              >
                Consultar Valor
              </a>
            </div>

            {/* Produto 2: Pote Menor */}
            <div className="relative group bg-white/5 border border-white/10 hover:border-[#10B981]/50 rounded-[2rem] p-8 backdrop-blur-sm transition-all hover:bg-white/10 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-full h-40 bg-gradient-to-b from-black/40 to-transparent rounded-2xl mb-8 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                <Package className="w-12 h-12 text-[#10B981]/80 drop-shadow-xl" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                Pote Clássico
              </h3>
              <p className="text-[#10B981] font-medium text-sm mb-6 uppercase tracking-widest">
                Corte Inteiro
              </p>

              <p className="text-white/60 mb-8 font-light text-sm leading-relaxed flex-grow">
                O tamanho perfeito para o dia a dia. Excelente para consumo
                rápido, garantindo que o palmito esteja sempre fresco para o seu
                prato.
              </p>

              <ul className="flex flex-col gap-3 mb-10 text-sm text-white/80 font-medium">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#10B981]/20">
                    <Check className="w-3 h-3 text-[#10B981]" />
                  </div>
                  Peso Líquido: 352g | Drenado: 180g
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#D4AF37]/20">
                    <Package className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  Caixa fechada: 24 unidades
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#10B981]/20">
                    <Check className="w-3 h-3 text-[#10B981]" />
                  </div>
                  100% Natural e Sem Glúten
                </li>
              </ul>

              <a
                href="#contato"
                className="w-full py-4 rounded-xl bg-white/10 text-white font-semibold text-center hover:bg-[#10B981] hover:text-black transition-colors no-underline"
              >
                Consultar Valor
              </a>
            </div>

            {/* Banner Atacado/Caixas Personalizadas */}
            <div className="col-span-1 md:col-span-2 mt-4 bg-gradient-to-r from-[#10B981]/10 to-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/30 transition-colors">
              <div className="flex-1 text-left">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Package className="w-6 h-6 text-[#D4AF37]" />
                  Caixas Mistas & Pedidos Personalizados
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Deseja abastecer seu negócio ou dividir com amigos? Além das
                  caixas fechadas padrão, nós montamos{" "}
                  <strong>caixas mistas personalizadas</strong> sob medida para
                  você (Exemplo: 5 unidades do Família + 12 unidades do
                  Clássico).
                </p>
              </div>
              <a
                href="#contato"
                className="shrink-0 w-full md:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/10 hover:bg-white text-center hover:text-black transition-colors shadow-lg no-underline"
              >
                Montar Meu Pedido
              </a>
            </div>
          </div>
        </section>

        {/* Seção Origem com Informações do Rótulo */}
        <section
          id="origem"
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 w-full"
        >
          <div className="relative w-full bg-[#051009]/80 border border-[#10B981]/20 rounded-[2rem] p-8 md:p-14 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  Nossas{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDE047]">
                    Raízes
                  </span>
                </h2>
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  A{" "}
                  <strong className="text-white font-semibold">
                    Palmito São Salvador
                  </strong>{" "}
                  nasceu do compromisso com a verdadeira essência da Amazônia.
                  Nossa indústria brasileira prioriza o extrativismo consciente
                  e sustentável, trazendo a pureza da floresta para a mesa de
                  sua família.
                </p>
                <div className="p-5 rounded-xl bg-[#10B981]/5 border border-[#10B981]/10 relative">
                  <p className="text-white/60 leading-relaxed text-base italic relative z-10">
                    "Pelas mãos da família Lacerda, nossa história começa nas
                    margens do Rio Vieirinha, na zona rural de Afuá-PA, onde
                    manejamos o açaízeiro de forma inteligente e sustentável. De
                    lá, nosso palmito viaja até Macapá-AP para ser distribuído,
                    garantindo o sabor original, maciez e uma qualidade premium
                    em cada pote."
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-[#10B981]/20 text-[#10B981]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide mb-1">
                      De Afuá-PA para o Mundo
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Extraído com autorização do IBAMA, na região amazônica do
                      Pará e envasado em Macapá-AP. Uma logística limpa e focada
                      em manter a máxima frescura do alimento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide mb-1">
                      Corte Inteiro
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Trabalhamos com o miolo perfeito do açaízeiro, com puro
                      corte inteiro. Textura firme por fora e que derrete na
                      boca por dentro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide mb-1">
                      100% Natural e Sem Glúten
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Nossa receita leva apenas o essencial para conservação:
                      palmito de açaí, água, sal e ácido cítrico. Saudável,
                      saboroso, suculento e naturalmente sem glúten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section
          id="contato"
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 w-full"
        >
          <div className="relative w-full bg-gradient-to-b from-[#051009]/80 to-[#030A05] border border-white/5 rounded-[2rem] p-8 md:p-14 shadow-2xl backdrop-blur-xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#D4AF37] mb-4">
              Fale Conosco
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg font-light">
              Pronto para ter o verdadeiro sabor da Amazônia na sua mesa? Faça
              seu pedido ou tire suas dúvidas pelos nossos canais oficiais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <a
                href="https://wa.me/5596991463232"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-[#10B981]/50 hover:bg-white/10 transition-all group cursor-pointer text-inherit no-underline"
              >
                <div className="p-4 rounded-full bg-black/30 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <img
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-widest">
                    WhatsApp
                  </p>
                  <p className="font-medium text-white tracking-wide text-[15px] sm:text-lg">
                    +55 (96) 99146-3232
                  </p>
                </div>
              </a>

              <a
                href="tel:+5596991463232"
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-[#10B981]/50 hover:bg-white/10 transition-all group cursor-pointer text-inherit no-underline"
              >
                <div className="p-4 rounded-full bg-black/30 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <img
                    src="/phone.svg"
                    alt="Telefone"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-widest">
                    Ligação Direta
                  </p>
                  <p className="font-medium text-white tracking-wide text-[15px] sm:text-lg">
                    (96) 99146-3232
                  </p>
                </div>
              </a>

              <a
                href="mailto:comercialssalvador@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/30 hover:bg-white/10 transition-all group cursor-pointer text-inherit no-underline"
              >
                <div className="p-4 rounded-full bg-black/30 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <img
                    src="/gmail.svg"
                    alt="Gmail"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-widest">
                    E-mail
                  </p>
                  <p className="font-medium text-white tracking-wide text-sm sm:text-lg break-all">
                    comercialssalvador@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/palmitosaosalvador"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all group cursor-pointer text-inherit no-underline"
              >
                <div className="p-4 rounded-full bg-black/30 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-widest">
                    Instagram
                  </p>
                  <p className="font-medium text-white tracking-wide text-[15px] sm:text-lg">
                    @palmitosaosalvador
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Trabalhe Conosco */}
        <section
          id="trabalhe-conosco"
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20 w-full"
        >
          <div className="relative w-full bg-[#051009]/80 border border-[#10B981]/20 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#D4AF37] mb-3">
              Trabalhe Conosco
            </h2>
            <p className="text-white/60 text-center mb-10 max-w-xl mx-auto text-sm font-light">
              Quer fazer parte do nosso time? Preencha os campos abaixo para
              enviar sua apresentação diretamente ao nosso setor comercial.
            </p>

            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Campo Nome */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/10 transition-all text-sm"
                  />
                </div>

                {/* Campo Idade */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                    Idade
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={3}
                    required
                    value={idade}
                    onChange={(e) =>
                      setIdade(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Ex: 25"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Campo Profissão */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  O que você faz / Profissão atual
                </label>
                <input
                  type="text"
                  required
                  value={profissao}
                  onChange={(e) => setProfissao(e.target.value)}
                  placeholder="Ex: Operador de Produção, Vendedor, Logística..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/10 transition-all text-sm"
                />
              </div>

              {/* Campo Motivação */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  Por que você seria um bom reforço para a equipe?
                </label>
                <textarea
                  required
                  rows={4}
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  placeholder="Conte um pouco sobre suas habilidades e por que deseja trabalhar com a São Salvador..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/10 transition-all text-sm resize-none leading-relaxed"
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                className="group relative w-full sm:w-auto self-center mt-4 px-10 py-4 bg-gradient-to-r from-[#10B981] to-[#10B981]/80 text-black font-bold rounded-xl overflow-hidden flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 border-none cursor-pointer"
              >
                <Send className="w-4 h-4 text-black" />
                <span className="tracking-wide text-black">
                  Enviar Apresentação
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* RODAPÉ FIXO CENTRALIZADO E MENOR */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#030A05]/95 backdrop-blur-md border-t border-[#10B981]/10 py-1.5 px-4 flex flex-col md:flex-row justify-center items-center gap-0.5 md:gap-4 pointer-events-none text-center">
        <p className="text-[9px] md:text-[11px] text-white/30 tracking-wider uppercase font-medium text-center w-full md:w-auto">
          1ª Tv. das Oliveiras, 31 - Pedrinhas, Macapá - AP, 68903-119
        </p>
        <span className="hidden md:inline text-white/20 text-[9px]">•</span>
        <p className="text-[9px] md:text-[11px] text-white/30 tracking-wider uppercase font-medium text-center w-full md:w-auto">
          CNPJ: 65.814.185/0001-13
        </p>
      </footer>
    </div>
  );
}

export default App;
