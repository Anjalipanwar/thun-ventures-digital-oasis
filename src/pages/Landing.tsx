import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Landing = () => {
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
      ],
      color: "from-electric-blue to-blue-600"
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
        "Social media content calendar (1 month)",
        "Performance analytics dashboard",
        "2 strategy consultations",
        "Priority support for 60 days"
      ],
      color: "from-navy to-electric-blue"
    }
  ];

  const testimonials = [
    {
      name: "Maria Schmidt",
      business: language === "de" ? "Lokaler Restaurantbesitzer" : "Local Restaurant Owner",
      rating: 5,
      text: language === "de" 
        ? "Thun Ventures hat unsere Online-Präsenz komplett transformiert. Wir gingen von 10 Kunden pro Woche auf 50+ dank ihrer SEO- und Social Media-Arbeit!"
        : "Thun Ventures transformed our online presence completely. We went from 10 customers per week to 50+ thanks to their SEO and social media work!"
    },
    {
      name: "Thomas Weber",
      business: language === "de" ? "E-Commerce Shop" : "E-commerce Store",
      rating: 5,
      text: language === "de" 
        ? "Das Premium Paket war jeden Euro wert. Unsere Website-Conversion-Rate stieg um 200% und unsere Google Ads sind endlich profitabel."
        : "The Premium Pack was worth every euro. Our website conversion rate increased by 200% and our Google Ads are finally profitable."
    },
    {
      name: "Sophie Müller",
      business: language === "de" ? "Beratungsunternehmen" : "Consulting Firm",
      rating: 5,
      text: language === "de" 
        ? "Professionell, transparent und ergebnisorientiert. Sie halfen uns dabei, ein starkes digitales Fundament aufzubauen, das weiterhin Leads generiert."
        : "Professional, transparent, and results-driven. They helped us establish a strong digital foundation that continues to drive leads."
    },
    {
      name: "Alex Chen",
      business: language === "de" ? "Tech Startup" : "Tech Startup",
      rating: 5,
      text: language === "de" 
        ? "Das Team von Thun Ventures verstand unsere Vision vom ersten Tag an. Ihr strategischer Ansatz half uns, unsere ersten 1000 Kunden zu erreichen."
        : "The team at Thun Ventures understood our vision from day one. Their strategic approach helped us reach our first 1000 customers."
    },
    {
      name: "Lisa Johnson",
      business: language === "de" ? "Fashion Boutique" : "Fashion Boutique",
      rating: 5,
      text: language === "de" 
        ? "Außergewöhnlicher Service! Unser Social Media Engagement stieg um 400% und der Online-Umsatz verdreifachte sich innerhalb von 3 Monaten."
        : "Outstanding service! Our social media engagement increased by 400% and online sales tripled within 3 months."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: language === "de" ? "Schnelle Umsetzung" : "Fast Implementation",
      description: language === "de" ? "Innerhalb von 48 Stunden nach Kauf starten" : "Get started within 48 hours of purchase"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: language === "de" ? "Bewährte Ergebnisse" : "Proven Results",
      description: language === "de" ? "Durchschnittlich 3x Wachstum für unsere Kunden" : "Average 3x growth for our clients"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: language === "de" ? "Zufriedenheitsgarantie" : "Satisfaction Guaranteed",
      description: language === "de" ? "30-Tage Geld-zurück-Garantie" : "30-day money-back guarantee"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 text-lg px-4 py-2">
            🚀 {language === "de" ? "Starten Sie Ihren digitalen Erfolg" : "Launch Your Digital Success"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {language === "de" ? "Wählen Sie Ihr" : "Choose Your"}
            <span className="bg-gradient-to-r from-electric-blue to-navy bg-clip-text text-transparent">
              {language === "de" ? " Wachstumspaket" : " Growth Package"}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === "de" 
              ? "Sorgfältig zusammengestellte Pakete, die darauf ausgelegt sind, Ihr Unternehmenswachstum zu beschleunigen. Keine versteckten Gebühren, keine langfristigen Verträge, nur Ergebnisse."
              : "Carefully crafted packages designed to accelerate your business growth. No hidden fees, no long-term contracts, just results."
            }
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <div className="text-electric-blue">{benefit.icon}</div>
                <div>
                  <div className="font-semibold">{benefit.title}</div>
                  <div className="text-sm text-gray-600">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "de" ? "Wählen Sie Ihr perfektes Paket" : "Choose Your Perfect Package"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "de" 
                ? "Alles was Sie für Online-Erfolg brauchen, in einem einfachen Paket"
                : "Everything you need to succeed online, in one simple package"
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all transform hover:-translate-y-1 ${pkg.popular ? 'border-2 border-electric-blue scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-electric-blue text-white text-lg px-6 py-2">
                    🔥 {language === "de" ? "Beliebteste" : "Most Popular"}
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-4`}>
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-lg">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    size="lg" 
                    className={`w-full text-lg bg-gradient-to-r ${pkg.color} hover:shadow-lg transform hover:scale-105 transition-all`}
                  >
                    <Link to="/contact">
                      {language === "de" ? "Jetzt starten" : "Get Started Now"} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              {language === "de" ? "Brauchen Sie etwas Individuelles?" : "Need something custom?"}
            </p>
            <Button asChild variant="outline" size="lg" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
              <Link to="/contact">
                {language === "de" ? "Individuelles Angebot anfordern" : "Request Custom Quote"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "de" ? "Was unsere Kunden sagen" : "What Our Clients Say"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "de" ? "Echte Ergebnisse von echten Unternehmen" : "Real results from real businesses"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {testimonials.slice(3, 5).map((testimonial, index) => (
              <Card key={index + 3} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {language === "de" ? "Wie schnell kann ich Ergebnisse sehen?" : "How quickly can I see results?"}
                </h3>
                <p className="text-gray-600">
                  {language === "de" 
                    ? "Die meisten Kunden sehen erste Verbesserungen innerhalb von 2-4 Wochen, mit signifikanten Ergebnissen typischerweise innerhalb von 60-90 Tagen. Der Zeitrahmen hängt von Ihrer aktuellen digitalen Präsenz und dem gewählten Paket ab."
                    : "Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. Timeline depends on your current digital presence and chosen package."
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {language === "de" ? "Was ist, wenn ich mit den Ergebnissen nicht zufrieden bin?" : "What if I'm not satisfied with the results?"}
                </h3>
                <p className="text-gray-600">
                  {language === "de" 
                    ? "Wir bieten eine 30-tägige Zufriedenheitsgarantie. Wenn Sie mit unserer Arbeit nicht zufrieden sind, beheben wir entweder die Probleme oder erstatten Ihnen den vollen Betrag zurück."
                    : "We offer a 30-day satisfaction guarantee. If you're not happy with our work, we'll either fix the issues or provide a full refund."
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {language === "de" ? "Arbeiten Sie mit Unternehmen außerhalb von Berlin?" : "Do you work with businesses outside of Berlin?"}
                </h3>
                <p className="text-gray-600">
                  {language === "de" 
                    ? "Absolut! Obwohl wir in Berlin ansässig sind, arbeiten wir mit Kunden in ganz Deutschland und Europa. Alle Beratungen können remote durchgeführt werden."
                    : "Absolutely! While we're based in Berlin, we work with clients throughout Germany and Europe. All consultations can be conducted remotely."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "de" ? "Bereit, Ihr Unternehmen zu transformieren?" : "Ready to Transform Your Business?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "de" 
              ? "Schließen Sie sich 200+ Unternehmen an, die ihr Wachstum mit Thun Ventures beschleunigt haben"
              : "Join 200+ businesses that have accelerated their growth with Thun Ventures"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                {language === "de" ? "Heute starten" : "Get Started Today"}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-electric-blue">
              <Link to="/contact">
                {language === "de" ? "Fragen stellen" : "Ask Questions"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
