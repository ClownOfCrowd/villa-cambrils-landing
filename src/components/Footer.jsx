import React from 'react';

const Footer = ({ translations }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-16 w-auto flex items-center pl-0 -ml-6 sm:-ml-8 md:-ml-10">
                <img 
                  src="https://i.ibb.co/1Gy6wzkq/LARISA-L-logo-final-01.png" 
                  alt="Larisa L Logo" 
                  className="h-32 sm:h-36 md:h-40 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {translations.footer.villa_description}
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>{translations.footer.reference}</strong></p>
              <p><strong>{translations.footer.price}</strong></p>
              <p><strong>{translations.footer.zone}</strong></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{translations.footer.quick_links}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                >
                  {translations.nav.photos}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                >
                  {translations.nav.details}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('mortgage')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                >
                  {translations.nav.mortgage}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                >
                  {translations.nav.location}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{translations.nav.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+34 677 743 005</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@inmolarisa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Costa Daurada, Cambrils, 43850 (Tarragona)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {translations.footer.copyright.replace('2024', currentYear.toString())}
            </p>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                {translations.footer.privacy}
              </button>
              <button className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                {translations.footer.terms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;