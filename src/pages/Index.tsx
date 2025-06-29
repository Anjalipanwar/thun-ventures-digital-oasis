import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Smartphone, Globe, TrendingUp, Calendar, MessageCircle, CheckCircle, ArrowRight, Users, Award, Target, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  const capabilities = [{
    icon: <Search className="h-8 w-8" />,
    title: language === "de" ? "SEO & Content-Strategie" : "SEO & Content Strategy",
    description: language === "de" ? "Strategische Optimierung für nachhaltiges Wachstum und bessere Sichtbarkeit" : "Strategic optimization for sustainable growth and better visibility"
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: language === "de" ? "Social Media Management" : "Social Media Management",
    description: language === "de" ? "Ansprechende Inhalte, die Zielgruppen konvertieren und Communities aufbauen" : "Engaging content that converts audiences and builds communities"
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: language === "de" ? "Web-Design & Entwicklung" : "Web Design & Development",
    description: language === "de" ? "Moderne, konversionsfokussierte Websites mit benutzerfreundlichem Design" : "Modern, conversion-focused websites with user-friendly design"
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: language === "de" ? "Performance Marketing (Ads)" : "Performance Marketing (Ads)",
    description: language === "de" ? "Datengetriebene Werbekampagnen für maximale ROI und messbare Ergebnisse" : "Data-driven advertising campaigns for maximum ROI and measurable results"
  }];

  const stats = [{
    icon: <Users className="h-6 w-6" />,
    number: "50+",
    label: language === "de" ? "Zufriedene Kunden" : "Happy Clients"
  }, {
    icon: <Award className="h-6 w-6" />,
    number: "95%",
    label: language === "de" ? "Erfolgsrate" : "Success Rate"
  }, {
    icon: <Target className="h-6 w-6" />,
    number: "3x",
    label: language === "de" ? "ROI Durchschnitt" : "Average ROI"
  }];

  const whyChooseUs = [{
    title: language === "de" ? "Spezialisiert auf kleine Unternehmen" : "Specialized in small businesses",
    description: language === "de" ? "Maßgeschneiderte Lösungen für Selbstständige und KMU" : "Tailored solutions for entrepreneurs and SMEs"
  }, {
    title: language === "de" ? "Transparente Preise" : "Transparent pricing",
    description: language === "de" ? "Keine versteckten Kosten, faire Pakete" : "No hidden costs, fair packages"
  }, {
    title: language === "de" ? "Messbare Ergebnisse" : "Measurable results",
    description: language === "de" ? "Sichtbare Verbesserungen in 30-90 Tagen" : "Visible improvements in 30-90 days"
  }];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 mx-auto px-0 py-0 my-0 rounded text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 text-electric-blue rounded-full text-sm font-medium">
                🚀 {language === "de" ? "Digitales Wachstum beginnt hier" : "Digital Growth Starts Here"}
              </div>
              <h1 className="text-4xl leading-tight md:text-6xl mx-0 font-bold text-violet-50 text-center">
                <span className="text-navy">
                  {language === "de" ? "Ihre" : "Your"}
                </span>
                <br />
                <span className="text-electric-blue">
                  {language === "de" ? "Digital Marketing" : "Digital Marketing"}
                </span>
                <br />
                <span className="text-navy">
                  {language === "de" ? "Experten" : "Experts"}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {language === "de" ? "Wir helfen kleinen Unternehmen und Selbstständigen dabei, online erfolgreich zu wachsen – mit bewährten Strategien und messbaren Ergebnissen." : "We help small businesses and entrepreneurs grow successfully online – with proven strategies and measurable results."}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg font-semibold">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {language === "de" ? "Termin vereinbaren" : "Schedule a Call"}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 text-lg font-semibold">
                  <Link to="/contact">
                    {language === "de" ? "Kostenlose Beratung" : "Get Free Consultation"}
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-navy">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    
                    
                    
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop" 
                alt="Digital Marketing Team" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {language === "de" ? "Unsere Dienstleistungen" : "Our Services"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "de" ? "Umfassende digitale Lösungen, die Ihr Unternehmen zum Erfolg führen" : "Comprehensive digital solutions that drive your business to success"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/10 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-electric-blue">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                {language === "de" ? "Warum Thun Ventures?" : "Why Thun Ventures?"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {language === "de" ? "Wir verstehen die einzigartigen Herausforderungen von kleinen Unternehmen und bieten maßgeschneiderte Lösungen." : "We understand the unique challenges of small businesses and provide tailored solutions."}
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop" alt="Professional team meeting" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-electric-blue/20 to-navy"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {language === "de" ? "Bereit für digitales Wachstum?" : "Ready for Digital Growth?"}
          </h2>
          <p className="text-xl mb-12 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {language === "de" ? "Lassen Sie uns gemeinsam Ihre digitale Präsenz transformieren und nachhaltiges Wachstum erreichen." : "Let's work together to transform your digital presence and achieve sustainable growth."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-3">
              <Link to="/packages" className="flex items-center gap-2">
                {language === "de" ? "Pakete ansehen" : "View Packages"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-3">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                {language === "de" ? "WhatsApp Chat" : "WhatsApp Chat"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
