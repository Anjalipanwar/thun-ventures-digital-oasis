
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Smartphone, Globe, TrendingUp, Calendar, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: language === "de" ? "SEO & Content-Strategie" : "SEO & Content Strategy",
      description: language === "de" ? "Strategische Optimierung für nachhaltiges Wachstum und bessere Sichtbarkeit" : "Strategic optimization for sustainable growth and better visibility"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: language === "de" ? "Social Media Management" : "Social Media Management",
      description: language === "de" ? "Ansprechende Inhalte, die Zielgruppen konvertieren und Communities aufbauen" : "Engaging content that converts audiences and builds communities"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: language === "de" ? "Web-Design & Entwicklung" : "Web Design & Development",
      description: language === "de" ? "Moderne, konversionsfokussierte Websites mit benutzerfreundlichem Design" : "Modern, conversion-focused websites with user-friendly design"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: language === "de" ? "Performance Marketing (Ads)" : "Performance Marketing (Ads)",
      description: language === "de" ? "Datengetriebene Werbekampagnen für maximale ROI und messbare Ergebnisse" : "Data-driven advertising campaigns for maximum ROI and measurable results"
    }
  ];

  const whyThunVentures = [
    {
      title: language === "de" ? "Spezialisiert auf kleine Unternehmen & Selbstständige" : "Specialized in small businesses & entrepreneurs",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: language === "de" ? "Transparente Preise ohne versteckte Kosten" : "Transparent pricing without hidden costs",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: language === "de" ? "Persönliche Betreuung durch erfahrene Experten" : "Personal support from experienced experts",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: language === "de" ? "Messbare Ergebnisse in 30–90 Tagen" : "Measurable results in 30–90 days",
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - Clean and Modern */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-tight max-w-4xl mx-auto">
              {language === "de" ? "Eine erfahrene" : "An Experienced"}
              <br />
              <span className="text-electric-blue">
                {language === "de" ? "Digital Marketing" : "Digital Marketing"}
              </span>
              <br />
              {language === "de" ? "Agentur" : "Agency"}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {language === "de" 
                ? "Wir sind eine Digital Marketing Agentur, die Unternehmen dabei hilft, besser zu wachsen als Experten und Ihre Digital Marketing Probleme zu lösen."
                : "We are a digital marketing agency helping companies grow better than experts and solve your digital marketing problems."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                asChild 
                className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-semibold"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {language === "de" ? "Termin vereinbaren" : "Schedule a Call"}
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white px-8 py-4 text-lg font-semibold"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {language === "de" ? "WhatsApp Chat" : "WhatsApp Chat"}
                </a>
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="w-full max-w-2xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop&crop=faces" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              {language === "de" ? "Unsere Kompetenzen" : "Our Capabilities"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "de" 
                ? "Umfassende digitale Lösungen, die Ihr Unternehmen zum Erfolg führen"
                : "Comprehensive digital solutions that drive your business to success"
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-electric-blue">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Thun Ventures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              {language === "de" ? "Warum Thun Ventures?" : "Why Thun Ventures?"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "de" 
                ? "Wir verstehen die Herausforderungen von Selbstständigen und kleinen Unternehmen."
                : "We understand the challenges of entrepreneurs and small businesses."
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyThunVentures.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="text-electric-blue flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-lg font-medium text-navy">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === "de" 
              ? "Bereit, Ihr digitales Wachstum zu starten?"
              : "Ready to Start Your Digital Growth?"
            }
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {language === "de" 
              ? "Lassen Sie uns gemeinsam Ihre digitale Präsenz transformieren und nachhaltiges Wachstum erreichen."
              : "Let's work together to transform your digital presence and achieve sustainable growth."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4">
              <Link to="/packages" className="flex items-center gap-2">
                {language === "de" ? "Pakete ansehen" : "View Packages"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 font-semibold">
              <Link to="/contact">
                {language === "de" ? "Kostenlose Beratung erhalten" : "Get Free Consultation"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
