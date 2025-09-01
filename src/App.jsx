import React, { useState, useEffect } from 'react';
import { useTranslation } from './utils/i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Mortgage from './components/Mortgage';
import PdfBlock from './components/PdfBlock';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import ChatBot from './components/ChatBot';

// Agent contact information - replace with real contact data
const agentContact = {
  phone: "34123456789", // Replace with real phone
  telegram: "villaagent", // Replace with real telegram handle  
  email: "agent@villa-cambrils.com" // Replace with real email
};

function App() {
  const [currentLang, setCurrentLang] = useState('es');
  const [showChatbot, setShowChatbot] = useState(false);
  const translations = useTranslation(currentLang);

  // Update document language and meta tags when language changes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.title = translations.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translations.lead);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', translations.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', translations.lead);
    }
  }, [currentLang, translations]);

  const handleScheduleVisit = () => {
    const whatsappUrl = `https://wa.me/${agentContact.phone}?text=${encodeURIComponent(
      `Hola, me interesa la propiedad ref 168010 en Jardins Vilafortuny, Cambrils. Me gustaría programar una visita.`
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChatbotClick = () => {
    // For now, show an alert. In production, this would open the chatbot interface
    alert('Chatbot functionality will be available soon. Please use WhatsApp or Telegram for immediate assistance.');
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
  };

  // Load language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && ['es', 'ca', 'en', 'ru'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  return (
    <div className="App">
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Residence",
          "name": translations.title,
          "description": translations.lead,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jardins Vilafortuny",
            "addressLocality": "Cambrils",
            "addressRegion": "Tarragona",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.0677",
            "longitude": "1.0578"
          },
          "offers": {
            "@type": "Offer",
            "price": "1499990",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          "numberOfRooms": 6,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 805,
            "unitCode": "MTK"
          },
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Private Pool"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Garden"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Garage"
            }
          ]
        })}
      </script>

      <Header 
        translations={translations}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      
      <main>
        <Hero 
          translations={translations}
          onScheduleVisit={handleScheduleVisit}
        />
        
        <Gallery translations={translations} />
        
        <Features translations={translations} />
        
        <Mortgage translations={translations} />
        
        <PdfBlock translations={translations} />
        
        <MapSection translations={translations} />
      </main>
      
      <Footer translations={translations} />
      
      <FloatingCTAs 
        translations={translations}
        agentContact={agentContact}
        onChatbotClick={handleChatbotClick}
      />
      
      <ChatBot 
        language={language}
        translations={translations}
      />
    </div>
  );
}

export default App;