import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="text-center text-white px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-extrabold mb-4 animate-bounce">404</h1>
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-20 h-1 bg-white rounded"></div>
            <div className="w-20 h-1 bg-purple-300 rounded"></div>
            <div className="w-20 h-1 bg-white rounded"></div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Página Não Encontrada</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Ups! Parece que se perdeu na sua viagem. A página que procura não existe ou foi movida para outro destino.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Voltar à Home
            </span>
          </Link>
          
          <Link 
            to="/contactos" 
            className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacte-nos
            </span>
          </Link>
        </div>
        
        <div className="mt-16 opacity-60">
          <svg 
            className="w-64 h-64 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
