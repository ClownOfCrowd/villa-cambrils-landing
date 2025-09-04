import React, { useState, useEffect } from 'react';

const Header = ({ translations, currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ca', name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="w-full px-0 py-3">
        <div className="flex items-center justify-between">
                          {/* Logo */}
                <div className="flex items-center">
                  <div className="h-12 w-auto flex items-center pl-0 -ml-4 sm:-ml-3">
                    <img 
                      src="https://i.ibb.co/1Gy6wzkq/LARISA-L-logo-final-01.png" 
                      alt="Larisa L Logo" 
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('photos')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              {translations.nav.photos}
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              {translations.nav.details}
            </button>
            <button
              onClick={() => scrollToSection('mortgage')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              {translations.nav.mortgage}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              {translations.nav.location}
            </button>
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'
              }`}>
                <span>{languages.find(lang => lang.code === currentLang)?.flag}</span>
                <span className={`hidden sm:inline text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}>
                  {languages.find(lang => lang.code === currentLang)?.name}
                </span>
                <svg className={`w-4 h-4 transition-colors ${
                  isScrolled ? 'text-gray-500' : 'text-white'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => onLanguageChange(language.code)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      currentLang === language.code ? 'bg-yellow-50 text-yellow-700' : 'text-gray-700'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white hover:bg-opacity-20'
              }`}
              aria-label="Toggle menu"
            >
              <svg className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('photos')}
                className="block w-full text-left py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {translations.nav.photos}
              </button>
              <button
                onClick={() => scrollToSection('details')}
                className="block w-full text-left py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {translations.nav.details}
              </button>
              <button
                onClick={() => scrollToSection('mortgage')}
                className="block w-full text-left py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {translations.nav.mortgage}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="block w-full text-left py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {translations.nav.location}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;