
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
            {language === "de" ? "Wählen Sie Ihr gewünschtes Paket" : "Choose Your Desired Package"}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
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
                  <CardTitle className="text-3xl mb-2 text-navy">{pkg.name}</CardTitle>
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
                    className={`w-full text-lg bg-gradient-to-r ${pkg.color} hover:shadow-lg transform hover:scale-105 transition-all text-white`}
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
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
            >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
              {language === "de" ? "Was unsere Kunden sagen" : "What Our Clients Say"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "de" ? "Echte Ergebnisse von echten Unternehmen" : "Real results from real businesses"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
