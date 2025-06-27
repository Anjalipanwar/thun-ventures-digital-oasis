
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Smartphone, Globe, Clock } from "lucide-react";

const Index = () => {
  // For now, we'll use German as default (this would be managed by context in a real app)
  const language = "de";

  const capabilities = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: language === "de" ? "SEO-Management" : "SEO Management",
      description: language === "de" ? "Strategische Optimierung für nachhaltiges Wachstum" : "Strategic optimization for sustainable growth"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: language === "de" ? "Social Media Marketing" : "Social Media Marketing",
      description: language === "de" ? "Ansprechende Inhalte, die Zielgruppen konvertieren" : "Engaging content that converts audiences"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: language === "de" ? "Web-Design & Entwicklung" : "Web Design & Development",
      description: language === "de" ? "Moderne, konversionsfokussierte Websites" : "Modern, conversion-focused websites"
    }
  ];

  const clientTypes = [
    {
      icon: <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center"><span className="text-electric-blue font-bold">KMU</span></div>,
      name: language === "de" ? "KMU" : "SMEs"
    },
    {
      icon: <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center"><span className="text-electric-blue font-bold">E</span></div>,
      name: language === "de" ? "E-Commerce Shops" : "E-commerce Stores"
    },
    {
      icon: <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center"><span className="text-electric-blue font-bold">F</span></div>,
      name: language === "de" ? "Freiberufler" : "Independent Professionals"
    },
    {
      icon: <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center"><span className="text-electric-blue font-bold">L</span></div>,
      name: language === "de" ? "Lokale Unternehmen" : "Local Businesses"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
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
              <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-semibold">
                {language === "de" ? "KONTAKTIEREN SIE UNS" : "CONTACT US"}
              </Button>
            </div>
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden mx-auto">
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

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-lg font-medium text-electric-blue mb-4">
              ⚡ {language === "de" ? "Unsere Kompetenzen" : "Our Capabilities"} ⚡
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-electric-blue/10 transition-colors">
                  <div className="text-charcoal group-hover:text-electric-blue transition-colors">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {language === "de" ? "Mit wem wir arbeiten" : "Who We Work With"}
            </h2>
            <p className="text-gray-600 text-lg">
              {language === "de" 
                ? "Wir unterstützen verschiedene Arten von Unternehmen beim digitalen Wachstum"
                : "We help various types of businesses grow digitally"
              }
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {client.icon}
                </div>
                <h3 className="font-semibold text-navy">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Time Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-electric-blue/5 rounded-2xl p-12">
            <Clock className="h-16 w-16 text-electric-blue mx-auto mb-6" />
            <div className="text-5xl font-bold text-electric-blue mb-4">3 {language === "de" ? "Tage" : "Days"}</div>
            <div className="text-xl text-navy font-semibold">
              {language === "de" ? "Durchschnittliche Angebotserstellungszeit" : "Average Proposal Time"}
            </div>
            <p className="text-gray-600 mt-4">
              {language === "de" 
                ? "Wir erstellen Ihnen schnell und präzise ein maßgeschneidertes Angebot"
                : "We create tailored proposals quickly and precisely"
              }
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {language === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "de" 
                ? "Antworten auf die wichtigsten Fragen"
                : "Answers to the most important questions"
              }
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  {language === "de" 
                    ? "Wie schnell kann ich Ergebnisse sehen?"
                    : "How quickly can I see results?"
                  }
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "de" 
                    ? "Die meisten Kunden sehen erste Verbesserungen innerhalb von 2-4 Wochen, mit signifikanten Ergebnissen typischerweise innerhalb von 60-90 Tagen. Der Zeitrahmen hängt von Ihrer aktuellen digitalen Präsenz und dem gewählten Paket ab."
                    : "Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. Timeline depends on your current digital presence and chosen package."
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  {language === "de" 
                    ? "Was ist, wenn ich mit den Ergebnissen nicht zufrieden bin?"
                    : "What if I'm not satisfied with the results?"
                  }
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "de" 
                    ? "Wir bieten eine 30-tägige Zufriedenheitsgarantie. Wenn Sie mit unserer Arbeit nicht zufrieden sind, beheben wir entweder die Probleme oder erstatten Ihnen den vollen Betrag zurück."
                    : "We offer a 30-day satisfaction guarantee. If you're not happy with our work, we'll either fix the issues or provide a full refund."
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  {language === "de" 
                    ? "Arbeiten Sie mit Unternehmen außerhalb von Berlin?"
                    : "Do you work with businesses outside of Berlin?"
                  }
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "de" 
                    ? "Absolut! Obwohl wir in Berlin ansässig sind, arbeiten wir mit Kunden in ganz Deutschland und Europa. Alle Beratungen können remote durchgeführt werden."
                    : "Absolutely! While we're based in Berlin, we work with clients throughout Germany and Europe. All consultations can be conducted remotely."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  {language === "de" 
                    ? "Welche Arten von Unternehmen unterstützen Sie?"
                    : "What types of businesses do you support?"
                  }
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "de" 
                    ? "Wir spezialisieren uns auf kleine und mittlere Unternehmen, E-Commerce-Shops, Freiberufler und lokale Unternehmen. Unser Ansatz ist darauf ausgelegt, maßgeschneiderte Lösungen für jede Unternehmensgröße und -art zu bieten."
                    : "We specialize in small and medium enterprises, e-commerce stores, independent professionals, and local businesses. Our approach is designed to provide tailored solutions for every business size and type."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {language === "de" 
              ? "Wir sind eine Digital Marketing Agentur, die Unternehmen hilft"
              : "We are a digital marketing agency, helping companies"
            }
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            {language === "de" 
              ? "Bereit, Ihre digitale Präsenz zu transformieren und nachhaltiges Wachstum zu erreichen?"
              : "Ready to transform your digital presence and achieve sustainable growth?"
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
