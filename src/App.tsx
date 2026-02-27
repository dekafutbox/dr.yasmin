import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  ShieldAlert, 
  Stethoscope, 
  Accessibility, 
  Baby, 
  HeartCrack, 
  Calculator, 
  FileWarning,
  Star,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Áreas de Atuação', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  const services = [
    { icon: Scale, name: 'Aposentadorias', description: 'Atuação completa na concessão, revisão e regularização de aposentadorias.' },
    { icon: ShieldAlert, name: 'Auxílio-Acidente', description: 'Assessoria para trabalhadores que ficaram com sequelas após acidente, buscando a concessão ou revisão do benefício.' },
    { icon: Stethoscope, name: 'Auxílio-Doença', description: 'Auxílio jurídico para obtenção ou restabelecimento do benefício por incapacidade temporária.' },
    { icon: Accessibility, name: 'BPC/LOAS - Deficiente', description: 'Atendimento especializado para pessoas com deficiência que necessitam do Benefício de Prestação Continuada.' },
    { icon: Baby, name: 'Salário-Maternidade', description: 'Suporte para trabalhadoras urbanas, rurais ou autônomas na solicitação e garantia do salário-maternidade.' },
    { icon: HeartCrack, name: 'Pensão por Morte', description: 'Amparo completo para os dependentes do segurado falecido, agilizando o recebimento da pensão.' },
    { icon: Calculator, name: 'Planejamento da Aposentadoria', description: 'Estudo estratégico e projeção de cenários para definir a data exata e a melhor estratégia contributiva para o seu futuro.' },
    { icon: FileWarning, name: 'Descontos Indevidos', description: 'Ação jurídica para identificar, contestar e reaver valores descontados indevidamente diretamente do seu benefício.' },
  ];

  const testimonials = [
    {
      text: "Fui muito bem atendida... A equipe do escritório é super atenciosa, prestativa e passou muita segurança...",
      author: "Yanny Moura"
    },
    {
      text: "Equipe maravilhosa, são super atenciosos e qualificados.",
      author: "Caio de Almeida M."
    },
    {
      text: "Escritório com excelentes profissionais. Tive meu benefício concedido.",
      author: "Ávilla Anorato"
    },
    {
      text: "Profissionais comprometidas e muito educadas... Atendimento de excelência.",
      author: "Jacy Rodrigues"
    },
    {
      text: "Escritório especialista em concessão de benefícios e com uma equipe super qualificada e atenciosa. Fui muito bem atendido pela Dra. Valéria que foi muito solicita e prestativa, me repassando todas as orientações necessárias.",
      author: "Klesio Wesley"
    },
    {
      text: "Escritório confiável e altamente profissional! Dra. Ana Valéria é de uma competência e carisma absurdos. Estou bem satisfeita com os serviços prestados.",
      author: "Carla Juliana Borges"
    },
    {
      text: "Ótimo atendimento ! Dra. Thaís me atendeu super bem, uma ótima profissional, conseguiu meu benefício super rápido ! Recomendo demais !",
      author: "Alef Souza"
    },
    {
      text: "Profissionais qualificados, equipe profissional e atenciosa. Recomendo!",
      author: "Ronnald Oliveira Santos"
    },
    {
      text: "Um escritório que possibilita qualidade e segurança no atendimento, com uma equipe qualificada e que sabe direcionar corretamente cada caso que surge. Um local que acessora em cada etapa do processo coerentemente de acordo com a demanda.",
      author: "Maria Clara Soares"
    }
  ];

  return (
    <div className="min-h-screen bg-light text-gray-800 font-sans selection:bg-gold selection:text-navy">
      
      {/* HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2 group">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/mybio-app-a4c4e.firebasestorage.app/o/Screenshot%202026-02-26%20194547.png?alt=media&token=4b3c3773-9771-4922-8627-f61d0800063a" 
              alt="Yasmin Nery Advogada" 
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-sm tracking-wide transition-colors hover:text-gold ${
                      isScrolled ? 'text-gray-200' : 'text-navy font-medium'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#https://wa.me/5586988575404"
              className="bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-6 py-3 rounded-sm transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] uppercase tracking-wider"
            >
              FALE CONOSCO
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col py-4 px-6 gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-200 hover:text-gold text-lg block py-2 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a 
                    href="#https://wa.me/5586988575404"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-gold text-navy font-semibold text-center block px-6 py-4 rounded-sm uppercase tracking-wider"
                  >
                    FALE CONOSCO
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-20 md:pb-0 overflow-hidden bg-light">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 skew-x-12 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-2 md:order-1 pt-12 pb-12 md:pt-0 md:pb-0"
          >
            
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy leading-[1.1] mb-6">
              Dra. Yasmin Nery  <span className="italic text-gold-dark">Advogada</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
              <strong className="font-semibold text-navy">Dra. Yasmin Nery.</strong> Previdenciarista, especialista em Auxílio-Acidente, atendimento em todo o Brasil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5586988575404"
                className="group relative inline-flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 rounded-sm overflow-hidden transition-all hover:bg-navy/90 shadow-xl hover:shadow-2xl"
              >
                <div className="absolute inset-0 w-0 bg-gold transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span className="relative font-semibold uppercase tracking-wider text-sm group-hover:text-navy transition-colors duration-300">FALE CONOSCO</span>
                <ChevronRight className="relative w-4 h-4 group-hover:translate-x-1 transition-all duration-300 group-hover:text-navy" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative h-[60vh] md:h-[80vh] w-full"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gray-200 rounded-t-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/mybio-app-a4c4e.firebasestorage.app/o/SaveClip.App_642232067_18165055117407073_6984355003009956082_n-Photoroom.png?alt=media&token=ef3faf2c-265d-444d-bf8a-f1bac3f3350a" 
                alt="Dra. Yasmin Nery" 
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-12 -left-6 md:-left-12 bg-white/95 backdrop-blur-md p-6 rounded-sm shadow-2xl border-l-4 border-gold max-w-[200px] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl font-serif text-navy mb-1 font-bold">100%</div>
              <div className="text-xs font-bold text-navy/60 uppercase tracking-widest">Foco em Resultados</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicos" className="py-24 md:py-32 bg-navy relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffd700 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-semibold text-gold uppercase tracking-[0.3em] mb-4">Especialidades</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Soluções Jurídicas <span className="italic text-gold">Especializadas</span></h3>
            <div className="w-24 h-px bg-gold/50 mx-auto mt-8"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="group bg-navy border border-gold/20 hover:border-gold p-8 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-gold/20"></div>
                  <Icon className="w-10 h-10 text-gold mb-6 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-white font-serif text-xl mb-3 group-hover:text-gold transition-colors">{service.name}</h4>
                  <p className="text-gray-300 font-light mt-3 line-clamp-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-8 h-px bg-gold/30 group-hover:w-16 group-hover:bg-gold transition-all duration-300 mt-6"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[3/4] md:aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden relative shadow-2xl">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/mybio-app-a4c4e.firebasestorage.app/o/dry2121asmin.png?alt=media&token=d9be6b85-15cb-4a35-b3e8-6d23490eccfd" 
                  alt="Dra. Yasmin Nery no escritório" 
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-white/20 m-4 rounded-sm z-10"></div>
                <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold/30 -z-10"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-navy/5 -z-10"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-sm font-semibold text-gold-dark uppercase tracking-[0.3em] mb-4">Perfil</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">Autoridade e Inovação no <span className="italic">Direito</span></h3>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  <strong className="font-medium text-navy">Yasmin Nery</strong> Advogada Previdenciarista, especialista em Auxílio-Acidente, com atuação estratégica e atendimento em todo o Brasil.
                </p>
                <p>
                  Com sólida experiência na defesa dos direitos previdenciários, dedica sua atuação a garantir que trabalhadores recebam corretamente os benefícios que a lei assegura. Seu trabalho é marcado por análise técnica, atendimento humanizado e foco total em resultados.
                </p>
                <p>
                  Além da atuação jurídica, também ensina advogados a vender e escalar no online, ajudando profissionais do Direito a posicionarem seus escritórios de forma estratégica no digital e ampliarem seus resultados com ética e autoridade.
                </p>
                <p>
                  Seja para conquistar um benefício previdenciário ou para estruturar uma advocacia forte no ambiente online, a Dra. Yasmin Nery oferece acompanhamento seguro, personalizado e comprometido com a excelência, atendendo clientes em todo o Brasil.
                </p>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="cursos" className="py-24 md:py-32 bg-navy relative border-t border-gold/20">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-gold uppercase tracking-[0.3em] mb-4">Infoprodutos</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gold mb-8">Expanda sua Advocacia com a Dra. Yasmin Nery</h3>
            <div className="w-24 h-px bg-gold/50 mx-auto mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Course 1 */}
            <motion.a 
              href="#"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group block bg-navy border border-gold/30 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:border-gold"
            >
              <div className="aspect-video relative overflow-hidden bg-navy border-b border-gold/20">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/mybio-app-a4c4e.firebasestorage.app/o/a1uxilio%20acidente.png?alt=media&token=01efc21f-e429-4acd-939d-02e80fb02016" 
                  alt="Capa do Curso Auxílio Acidente no Digital" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors">Auxílio Acidente no Digital</h4>
                <p className="text-gray-400 font-light mb-8 line-clamp-2">
                  Domine a prática previdenciária e escale seus resultados com estratégias validadas no ambiente digital.
                </p>
                <div className="inline-flex items-center justify-center w-full bg-transparent border border-gold text-gold px-6 py-3 rounded-sm font-semibold uppercase tracking-widest group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  Inscrever-se
                </div>
              </div>
            </motion.a>

            {/* Course 2 */}
            <motion.a 
              href="#"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group block bg-navy border border-gold/30 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:border-gold"
            >
              <div className="aspect-video relative overflow-hidden bg-navy border-b border-gold/20">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/mybio-app-a4c4e.firebasestorage.app/o/comercial360.png?alt=media&token=68069c0c-cb4b-4af8-850d-19116ce8f7b5" 
                  alt="Capa do Curso Comercial 360" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors">Comercial 360</h4>
                <p className="text-gray-400 font-light mb-8 line-clamp-2">
                  Estruture o setor comercial do seu escritório e transforme contatos em contratos de alto valor.
                </p>
                <div className="inline-flex items-center justify-center w-full bg-transparent border border-gold text-gold px-6 py-3 rounded-sm font-semibold uppercase tracking-widest group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  Inscrever-se
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-24 md:py-32 bg-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-lg font-medium text-navy mb-2">5,0 (32 avaliações no Google)</p>
            <h3 className="text-3xl md:text-4xl font-serif text-navy">O que dizem nossos <span className="italic text-gold-dark">clientes</span></h3>
          </motion.div>

          <div className="relative overflow-hidden w-full -mx-6 md:-mx-12 px-6 md:px-12">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-light to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-light to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-6">
              {/* Row 1 */}
              <div className="flex w-max animate-scroll pause-on-hover gap-6">
                {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map((testimonial, index) => (
                  <div 
                    key={`r1-${index}`}
                    className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative w-[85vw] md:w-[350px] lg:w-[400px] flex flex-col shrink-0"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <div className="text-6xl font-serif text-gold/20 absolute top-4 right-4 leading-none">"</div>
                    <p className="text-gray-600 italic relative z-10 mb-6 text-sm leading-relaxed whitespace-normal break-words">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-navy font-serif font-bold text-xs">
                        {testimonial.author.charAt(0)}
                      </div>
                      <p className="font-semibold text-navy text-sm">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex w-max animate-scroll-reverse pause-on-hover gap-6">
                {[...testimonials.slice(5, 9), ...testimonials.slice(5, 9)].map((testimonial, index) => (
                  <div 
                    key={`r2-${index}`}
                    className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative w-[85vw] md:w-[350px] lg:w-[400px] flex flex-col shrink-0"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <div className="text-6xl font-serif text-gold/20 absolute top-4 right-4 leading-none">"</div>
                    <p className="text-gray-600 italic relative z-10 mb-6 text-sm leading-relaxed whitespace-normal break-words">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-navy font-serif font-bold text-xs">
                        {testimonial.author.charAt(0)}
                      </div>
                      <p className="font-semibold text-navy text-sm">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* LOCATION SECTION */}
      <section id="localizacao" className="py-24 bg-navy relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-gold uppercase tracking-[0.3em] mb-4">Onde Estamos</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Nosso <span className="italic text-gold">Escritório</span></h3>
            <div className="w-24 h-px bg-gold/50 mx-auto mt-8"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-navy border border-gold/30 rounded-sm p-2 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden relative">
                {/* Overlay to reduce map brightness and match the luxury dark theme */}
                <div className="absolute inset-0 bg-navy/10 pointer-events-none z-10 mix-blend-multiply"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.961011310188!2d-42.7562626!3d-5.1098418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e390000000001%3A0x0!2zUsKwIEFudMO0bmlvIE5ldmVzIGRlIE1lbG8sIDQ4ODUgLSBQYXJxdWUgSWRlYWwsIFRlcmVzaW5hIC0gUEksIDY0MDc3LTgyMA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'contrast(1.1) opacity(0.9)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório Yasmin Nery"
                  className="relative z-0"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-navy/50">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-white font-serif text-xl mb-1">Visite-nos</p>
                <p className="text-gray-400 font-light tracking-wide">
                  R. Antônio Neves de Melo, 4885 - Parque Ideal, Teresina - PI, 64077-820
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-navy pt-20 pb-10 border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/mybio-app-a4c4e.firebasestorage.app/o/Screenshot%202026-02-26%20194547.png?alt=media&token=4b3c3773-9771-4922-8627-f61d0800063a" 
                  alt="Yasmin Nery Advogada" 
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                Dra. Yasmin Nery previdenciarista de alto padrão. Atendimento digital exclusivo para todo o Brasil.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/yasminnery.adv/" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-3 md:col-start-6">
              <h4 className="text-white font-serif text-lg mb-6">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="text-white font-serif text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>R. Antônio Neves de Melo, 4885<br/>Parque Ideal, Teresina - PI<br/>64077-820</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span>086 98857-5404</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span>contato@yasminnery.adv.br</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Yasmin Nery Advogada. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              OAB/PI XX.XXX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
