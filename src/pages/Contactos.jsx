import { useState } from 'react';

function Contactos() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: ''
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando o utilizador começa a escrever
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório';
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = 'O nome deve ter pelo menos 3 caracteres';
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }

    // Validar assunto
    if (!formData.assunto.trim()) {
      newErrors.assunto = 'O assunto é obrigatório';
    } else if (formData.assunto.trim().length < 10) {
      newErrors.assunto = 'O assunto deve ter pelo menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Formulário válido
      console.log('Dados do formulário:', formData);
      setSubmitSuccess(true);
      
      // formulário vazio outra vez
      setFormData({
        nome: '',
        email: '',
        assunto: ''
      });
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } else {
      setErrors(newErrors);
      setSubmitSuccess(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">Contactos</h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-light">
            Tem alguma questão? Estamos aqui para ajudar!
          </p>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Fale Connosco
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Estamos Prontos para Ajudar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Formulário */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie-nos uma Mensagem</h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-semibold">Mensagem enviada com sucesso!</p>
                  <p className="text-sm">Entraremos em contacto em breve.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Nome */}
                <div className="mb-6">
                  <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.nome 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="O seu nome completo"
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="seuemail@exemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Assunto */}
                <div className="mb-6">
                  <label htmlFor="assunto" className="block text-gray-700 font-semibold mb-2">
                    Assunto <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                      errors.assunto 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="Descreva a sua questão ou sugestão..."
                  />
                  {errors.assunto && (
                    <p className="text-red-500 text-sm mt-1">{errors.assunto}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contacto */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@exploremundo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Telefone</h3>
                      <p className="text-gray-600">+351 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Morada</h3>
                      <p className="text-gray-600">Rua de Santa Catarina, 1577<br />4000-458 Porto, Portugal</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-3">Horário de Atendimento</h3>
                <p className="mb-2">Segunda a Sexta: 9h00 - 18h00</p>
                <p className="mb-2">Sábado: 9h00 - 13h00</p>
                <p>Domingo: Encerrado</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactos;
