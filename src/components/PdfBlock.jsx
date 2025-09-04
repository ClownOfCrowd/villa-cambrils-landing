import React, { useState } from 'react';

const PdfBlock = ({ translations }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Local PDF file - no Google Drive auth needed
  const pdfUrl = "/documents/villa-documentation.pdf";

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'villa-cambrils-technical-sheet.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-['Playfair_Display'] tracking-wide text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            {translations.pdf.title}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.pdf.description}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* PDF Preview */}
          <div className="aspect-[3/4] md:aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 gap-2 h-full p-4">
                {Array.from({ length: 32 }, (_, i) => (
                  <div key={i} className="bg-blue-300 rounded opacity-50"></div>
                ))}
              </div>
            </div>
            
            {/* PDF Icon and Info */}
            <div className="text-center z-10">
              <div className="w-24 h-24 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-gray-800 mb-2">{translations.pdf.villa_title}</h3>
              <p className="text-gray-600 mb-4">{translations.pdf.tech_sheet}</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  ~2MB
                </span>
              </div>
              
              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isLoading || !pdfUrl}
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 flex items-center space-x-3 mx-auto shadow-lg"
                aria-label={translations.pdf.download}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Descargando...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{translations.pdf.download_complete}</span>
                  </>
                )}
              </button>
            </div>
          </div>


        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{translations.pdf.detailed_docs}</h3>
            <p className="text-sm text-gray-600">{translations.pdf.detailed_info}</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{translations.pdf.tech_specs}</h3>
            <p className="text-sm text-gray-600">{translations.pdf.tech_specs_desc}</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{translations.pdf.legal_status}</h3>
            <p className="text-sm text-gray-600">{translations.pdf.legal_status_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfBlock;