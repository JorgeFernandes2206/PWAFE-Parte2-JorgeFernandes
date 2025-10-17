import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold hover:text-blue-200 transition-colors duration-300"
            onClick={closeMenu}
          >
            ExploreMundo
          </Link>
          
          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-b-2 border-white pb-1 font-semibold text-lg" 
                    : "hover:text-blue-200 transition-colors duration-300 text-lg"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-b-2 border-white pb-1 font-semibold text-lg" 
                    : "hover:text-blue-200 transition-colors duration-300 text-lg"
                }
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contactos" 
                className={({ isActive }) => 
                  isActive 
                    ? "border-b-2 border-white pb-1 font-semibold text-lg" 
                    : "hover:text-blue-200 transition-colors duration-300 text-lg"
                }
              >
                Contactos
              </NavLink>
            </li>
          </ul>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Ícone X (fechar)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícone Hambúrguer
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pb-4 space-y-2">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "block py-3 px-4 bg-blue-700 rounded-lg font-semibold" 
                    : "block py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                }
                onClick={closeMenu}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => 
                  isActive 
                    ? "block py-3 px-4 bg-blue-700 rounded-lg font-semibold" 
                    : "block py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                }
                onClick={closeMenu}
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contactos" 
                className={({ isActive }) => 
                  isActive 
                    ? "block py-3 px-4 bg-blue-700 rounded-lg font-semibold" 
                    : "block py-3 px-4 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                }
                onClick={closeMenu}
              >
                Contactos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
