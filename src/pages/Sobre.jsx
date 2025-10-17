import Card from '../components/Card';

function Sobre() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            Sobre Nós
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
            A transformar sonhos em destinos desde 2020
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                    Nossa Jornada
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  A Nossa História
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <span className="font-semibold text-blue-600">ExploreMundo</span> nasceu em 2020 com uma missão simples: 
                  tornar as viagens acessíveis e inspiradoras para todos. Começámos como um pequeno blog de viagens 
                  e crescemos para nos tornarmos uma plataforma completa de descoberta e planeamento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Acreditamos que viajar não é apenas sobre destinos, mas sobre as <span className="font-semibold text-purple-600">experiências</span>, 
                  as pessoas que conhecemos e as memórias que criamos. Por isso, dedicamo-nos a 
                  fornecer informações autênticas e inspiração para cada tipo de viajante.
                </p>
                <div className="flex gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600 mt-1">Destinos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600">50K+</div>
                    <div className="text-gray-600 mt-1">Viajantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">100+</div>
                    <div className="text-gray-600 mt-1">Países</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" 
                  alt="Viajantes explorando o mundo" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Os Nossos Valores */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              O Que Nos Move
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Os Nossos Valores
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Autenticidade</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Fornecemos informações reais baseadas em experiências genuínas de viagem e feedback real dos nossos utilizadores.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-purple-600">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Inclusão</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Acreditamos que todos merecem explorar o mundo, independentemente do orçamento ou estilo de viagem.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-600">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Sustentabilidade</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Promovemos viagens responsáveis que respeitam as comunidades locais e preservam o meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Conheça Quem Faz Acontecer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              A Nossa Equipa
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Apaixonados por viagens e dedicados a tornar a sua experiência inesquecível
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                  alt="Ana Silva" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Ana Silva</h3>
                  <p className="text-sm text-gray-200">Fundadora & CEO</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="João Costa" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">João Costa</h3>
                  <p className="text-sm text-gray-200">Director de Conteúdo</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                  alt="Maria Santos" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Maria Santos</h3>
                  <p className="text-sm text-gray-200">Especialista em Destinos</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                  alt="Pedro Oliveira" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Pedro Oliveira</h3>
                  <p className="text-sm text-gray-200">Gestor de Comunidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Começar a Sua Aventura?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
            Junte-se a milhares de viajantes que já transformaram os seus sonhos em realidade
          </p>
          <a 
            href="/contactos" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Entre em Contacto
          </a>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
