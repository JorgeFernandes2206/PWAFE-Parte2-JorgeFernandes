import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in leading-tight">
            Explore o Mundo Connosco
          </h1>
          <p className="text-xl md:text-3xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Descubra destinos incríveis, culturas fascinantes e experiências inesquecíveis.
          </p>
          <button 
            onClick={() => navigate('/sobre')}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Saiba Mais Sobre Nós
          </button>
        </div>
      </section>

      {/* Destinos em Destaque */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Explore Destinos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Destinos em Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os lugares mais incríveis do mundo estão à espera de si
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop" 
                  alt="Paris" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Paris, França</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A cidade da luz espera por si. Descubra a Torre Eiffel, o Louvre e a magia parisiense.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop" 
                  alt="Tóquio" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Tóquio, Japão</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onde a tradição encontra a modernidade. Explore templos antigos e arranha-céus futuristas.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop" 
                  alt="Nova York" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Nova York, EUA</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A cidade que nunca dorme. Experiencie a energia vibrante da Big Apple.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Porquê Escolher-nos */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Vantagens
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Porquê Escolher-nos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Melhor Preço</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Garantimos os melhores preços e ofertas exclusivas para os nossos clientes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-purple-600">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">100% Seguro</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                As suas informações e pagamentos estão sempre protegidos e seguros.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-600">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Suporte 24/7</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                A nossa equipa está sempre disponível para ajudar em qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para a Aventura?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
            Entre em contacto connosco e comece a planear a sua próxima viagem inesquecível.
          </p>
          <button 
            onClick={() => navigate('/contactos')}
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contacte-nos Agora
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
