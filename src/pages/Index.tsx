
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Smartphone, Globe, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: language === "de" ? "SEO & Content-Strategie" : "SEO & Content Strategy",
      description: language === "de" ? "Strategische Optimierung für nachhaltiges Wachstum und bessere Sichtbarkeit" : "Strategic optimization for sustainable growth and better visibility"
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: language === "de" ? "Social Media Management" : "Social Media Management",
      description: language === "de" ? "Ansprechende Inhalte, die Zielgruppen konvertieren und Communities aufbauen" : "Engaging content that converts audiences and builds communities"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: language === "de" ? "Web-Design & Entwicklung" : "Web Design & Development",
      description: language === "de" ? "Moderne, konversionsfokussierte Websites mit benutzerfreundlichem Design" : "Modern, conversion-focused websites with user-friendly design"
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: language === "de" ? "Performance Marketing (Ads)" : "Performance Marketing (Ads)",
      description: language === "de" ? "Datengetriebene Werbekampagnen für maximale ROI und messbare Ergebnisse" : "Data-driven advertising campaigns for maximum ROI and measurable results"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {language === "de" ? "Eine erfahrene" : "An Experienced"}
                <br />
                <span className="text-electric-blue">
                  {language === "de" ? "Digital Marketing" : "Digital Marketing"}
                </span>
                <br />
                {language === "de" ? "Agentur" : "Agency"}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                {language === "de" 
                  ? "Wir sind eine Digital Marketing Agentur, die Unternehmen dabei hilft, besser zu wachsen als Experten und Ihre Digital Marketing Probleme zu lösen."
                  : "We are a digital marketing agency helping companies grow better than experts and solve your digital marketing problems."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Link to="/contact">
                    {language === "de" ? "Termin vereinbaren" : "Schedule a Call"}
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    {language === "de" ? "WhatsApp Chat" : "WhatsApp Chat"}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden mx-auto shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=faces" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-electric-blue rounded-lg transform rotate-12"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-soft-aqua rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {language === "de" ? "Unsere Kompetenzen" : "Our Capabilities"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "de" 
                ? "Umfassende digitale Lösungen, die Ihr Unternehmen zum Erfolg führen"
                : "Comprehensive digital solutions that drive your business to success"
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-electric-blue/10 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-charcoal group-hover:text-electric-blue transition-colors duration-300">
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

      {/* Proposal Time Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Clock className="h-20 w-20 text-electric-blue mx-auto mb-8" />
            <div className="text-6xl font-bold text-electric-blue mb-4">3 {language === "de" ? "Tage" : "Days"}</div>
            <div className="text-2xl text-navy font-semibold mb-4">
              {language === "de" ? "Durchschnittliche Angebotserstellungszeit" : "Average Proposal Time"}
            </div>
            <p className="text-gray-600 text-lg">
              {language === "de" 
                ? "Wir erstellen Ihnen schnell und präzise ein maßgeschneidertes Angebot"
                : "We create tailored proposals quickly and precisely"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {language === "de" ? "Besuchen Sie uns in Berlin" : "Visit us in Berlin"}
            </h2>
            <p className="text-xl text-gray-600">
              Wilmersdorfer Str. 130, 10627 Berlin, Germany
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.123456789!2d13.123456!3d52.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWilmersdorfer%20Str.%20130%2C%2010627%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === "de" ? "Thun Ventures Standort" : "Thun Ventures Location"}
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {language === "de" 
              ? "Bereit, Ihr digitales Wachstum zu starten?"
              : "Ready to Start Your Digital Growth?"
            }
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            {language === "de" 
              ? "Lassen Sie uns gemeinsam Ihre digitale Präsenz transformieren und nachhaltiges Wachstum erreichen."
              : "Let's work together to transform your digital presence and achieve sustainable growth."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4">
              <Link to="/packages">
                {language === "de" ? "Pakete ansehen" : "View Packages"}
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
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
