import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language.toUpperCase();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const links = [
    { to: '/about', label: t('about') },
    { to: '/projects', label: t('projects') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F1F1F]/95 shadow-lg z-50">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white font-extrabold text-2xl tracking-wide">
          Enrico<span className="text-orange-400">Dev</span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden sm:flex gap-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `!text-white hover:!text-white transition-colors duration-300 font-medium pb-1 ${isActive ? 'border-b-2 border-orange-500' : ''
                }`
              }
              end
            >
              {label}
            </NavLink>
          ))}

          {/* LANG desktop alinhado à esquerda junto com os outros itens */}
          <div className="flex flex-col ml-4">
            <button
              className={`text-left btnlenguage-nav ${currentLang === 'PT' ? 'selected' : ''}`}
              onClick={() => changeLanguage('pt')}
            >
              PT
            </button>
            <button
              className={`text-left btnlenguage-nav ${currentLang === 'EN' ? 'selected' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="sm:hidden text-white p-2 rounded-lg active:scale-95 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      <div
        className={`sm:hidden bg-[#1F1F1F] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 pb-4 pt-2 space-y-4">

          {/* LINKS */}
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 !text-white hover:!text-orange-400 font-medium transition ${isActive ? 'border-l-4 border-orange-500 pl-2' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* PT / EN alinhados à esquerda exatamente como links */}
          <div className="w-full border-t border-gray-700 pt-2">
            <div className="flex flex-col gap-1 w-fit">
              <button
                className={`btnlenguage-nav ${currentLang === "PT" ? "selected" : ""}`}
                onClick={() => changeLanguage("pt")}
              >
                PT
              </button>
              <button
                className={`btnlenguage-nav ${currentLang === "EN" ? "selected" : ""}`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
