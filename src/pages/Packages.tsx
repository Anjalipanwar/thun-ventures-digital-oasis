
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap, Trophy, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Packages = () => {
  const { language } = useLanguage();

  const packages = [
    {
      name: language === "de" ? "Starter Paket" : "Starter Pack",
      price: "€399",
      description: language === "de" 
        ? "Perfekt für Unternehmen, die mit Digital Marketing beginnen"
        : "Perfect for businesses getting started with digital marketing",
      popular: false,
      features: language === "de" ? [
        "Professionelle Website-Analyse",
        "Basis SEO-Optimierung",
        "Google My Business Einrichtung",
        "Social Media Profil-Optimierung",
        "1-Stunde Strategieberatung",
        "E-Mail-Support für 30 Tage"
      ] : [
        "Professional website audit",
        "Basic SEO optimization",
        "Google My Business setup",
        "Social media profile optimization",
        "1-hour strategy consultation",
        "Email support for 30 days"
      ]
    },
    {
      name: language === "de" ? "Premium Paket" : "Premium Pack",
      price: "€699", 
      description: language === "de" 
        ? "Umfassende Lösung für ernsthaftes Wachstum"
        : "Comprehensive solution for serious growth",
      popular: true,
      features: language === "de" ? [
        "Alles aus dem Starter Paket",
        "Komplette Website-Neugestaltung",
        "Erweiterte SEO-Strategie & Umsetzung",
        "Google Ads Kampagnen-Setup",
        "Social Media Content-Kalender (1 Monat)",
        "Performance Analytics Dashboard",
        "2 Strategieberatungen",
        "Priority Support für 60 Tage"
      ] : [
        "Everything in Starter Pack",
        "Complete website redesign",
        "Advanced SEO strategy & implementation",
        "Google Ads campaign setup",
        "Social Media content calendar (1 month)",
        "Performance analytics dashboard",
        "2 strategy consultations",
        "Priority support for 60 days"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: language === "de" ? "Schnelle Umsetzung" : "Fast Implementation",
      description: language === "de" ? "Start innerhalb von 48 Stunden" : "Get started within 48 hours"
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: language === "de" ? "Bewährte Ergebnisse" : "Proven Results",
      description: language === "de" ? "Durchschnittlich 3x Wachstum" : "Average 3x growth for clients"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: language === "de" ? "Zufriedenheitsgarantie" : "Satisfaction Guaranteed",
      description: language === "de" ? "30-Tage Geld-zurück" : "30-day money-back guarantee"
    }
  ];

  const testimonials = [
    {
      name: "Maria Schmidt",
      business: language === "de" ? "Restaurantbesitzerin" : "Restaurant Owner",
      rating: 5,
      text: language === "de" 
        ? "Thun Ventures hat unsere Online-Präsenz komplett transformiert. Wir gingen von 10 auf 50+ Kunden pro Woche!"
        : "Thun Ventures transformed our online presence completely. We went from 10 to 50+ customers per week!"
    },
    {
      name: "Thomas Weber",
      business: language === "de" ? "E-Commerce Shop" : "E-commerce Store",
      rating: 5,
      text: language === "de" 
        ? "Das Premium Paket war jeden Euro wert. Unsere Conversion-Rate stieg um 200%."
        : "The Premium Pack was worth every euro. Our conversion rate increased by 200%."
    },
    {
      name: "Sophie Müller",
      business: language === "de" ? "Beratungsunternehmen" : "Consulting Firm",
      rating: 5,
      text: language === "de" 
        ? "Professionell und transparent. Sie halfen uns dabei, ein starkes digitales Fundament aufzubauen."
        : "Professional and transparent. They helped us establish a strong digital foundation."
    }
  ];

  const faqItems = [
    {
      question: language === "de" 
        ? "Wie schnell kann ich Ergebnisse sehen?"
        : "How quickly can I see results?",
      answer: language === "de" 
        ? "Die meisten Kunden sehen erste Verbesserungen innerhalb von 2-4 Wochen, mit signifikanten Ergebnissen innerhalb von 60-90 Tagen."
        : "Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days."
    },
    {
      question: language === "de" 
        ? "Was ist, wenn ich nicht zufrieden bin?"
        : "What if I'm not satisfied with the results?",
      answer: language === "de" 
        ? "Wir bieten eine 30-tägige Zufriedenheitsgarantie. Wenn Sie nicht zufrieden sind, beheben wir die Probleme oder erstatten den vollen Betrag zurück."
        : "We offer a 30-day satisfaction guarantee. If you're not happy with our work, we'll either fix the issues or provide a full refund."
    },
    {
      question: language === "de" 
        ? "Arbeiten Sie mit Unternehmen außerhalb von Berlin?"
        : "Do you work with businesses outside of Berlin?",
      answer: language === "de" 
        ? "Absolut! Wir arbeiten mit Kunden in ganz Deutschland und Europa. Alle Beratungen können remote durchgeführt werden."
        : "Absolutely! We work with clients throughout Germany and Europe. All consultations can be conducted remotely."
    },
    {
      question: language === "de" 
        ? "Welche Arten von Unternehmen unterstützen Sie?"
        : "What types of businesses do you support?",
      answer: language === "de" 
        ? "Wir spezialisieren uns auf kleine und mittlere Unternehmen, E-Commerce-Shops und lokale Unternehmen aller Branchen."
        : "We specialize in small and medium enterprises, e-commerce stores, and local businesses across all industries."
    },
    {
      question: language === "de" 
        ? "Wie läuft die Zusammenarbeit ab?"
        : "How does the collaboration process work?",
      answer: language === "de" 
        ? "Nach Ihrer Anfrage führen wir ein kostenloses Beratungsgespräch durch. Dann erstellen wir ein maßgeschneidertes Angebot und beginnen mit der Umsetzung."
        : "After your inquiry, we conduct a free consultation call. We then create a tailored proposal and begin implementation with regular updates."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-electric-blue/10 text-electric-blue border-electric-blue/20 text-base px-4 py-2">
            🚀 {language === "de" ? "Wachstumspakete" : "Growth Packages"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy leading-tight">
            {language === "de" ? "Wählen Sie Ihr" : "Choose Your"}
            <br />
            <span className="text-electric-blue">
              {language === "de" ? "Digital Marketing Paket" : "Digital Marketing Package"}
            </span>
          </h1>
          <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === "de" 
              ? "Sorgfältig zusammengestellte Pakete für nachhaltiges Unternehmenswachstum. Transparente Preise, messbare Ergebnisse."
              : "Carefully crafted packages for sustainable business growth. Transparent pricing, measurable results."
            }
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-center">
                <div className="text-electric-blue">{benefit.icon}</div>
                <div>
                  <div className="font-semibold text-navy">{benefit.title}</div>
                  <div className="text-sm text-charcoal/70">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 ${pkg.popular ? 'border-2 border-electric-blue shadow-lg scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electric-blue text-white px-4 py-1">
                    {language === "de" ? "Beliebt" : "Popular"}
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2 text-navy">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-electric-blue mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-charcoal/70">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-charcoal text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-electric-blue hover:bg-electric-blue/90' : 'bg-navy hover:bg-navy/90'} text-white`}
                  >
                    <Link to="/contact">
                      {language === "de" ? "Jetzt buchen" : "Book Now"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-charcoal/70 mb-4">
              {language === "de" ? "Brauchen Sie etwas Individuelles?" : "Need something custom?"}
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
            >
              <Link to="/contact">
                {language === "de" ? "Kostenlose Beratung" : "Schedule a Call"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy">
              {language === "de" ? "Was unsere Kunden sagen" : "What Our Clients Say"}
            </h2>
            <p className="text-charcoal/70">
              {language === "de" ? "Echte Ergebnisse von echten Unternehmen" : "Real results from real businesses"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow bg-white border-gray-100">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal mb-4 text-sm italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-navy text-sm">{testimonial.name}</div>
                    <div className="text-xs text-charcoal/60">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy">
              {language === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
            </h2>
            <p className="text-charcoal/70">
              {language === "de" 
                ? "Antworten auf die wichtigsten Fragen"
                : "Answers to the most important questions"
              }
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover:shadow-sm transition-shadow border-gray-100">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold text-navy mb-3">
                    {item.question}
                  </h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "de" ? "Bereit zu starten?" : "Ready to Get Started?"}
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            {language === "de" 
              ? "Lassen Sie uns gemeinsam Ihr digitales Wachstum beschleunigen."
              : "Let's work together to accelerate your digital growth."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3">
              <Link to="/contact">
                {language === "de" ? "Kostenlose Beratung" : "Get Free Consultation"}
              </Link>
            </Button>
            <Button 
              asChild 
              className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white px-8 py-3"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                {language === "de" ? "WhatsApp Chat" : "WhatsApp Chat"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
