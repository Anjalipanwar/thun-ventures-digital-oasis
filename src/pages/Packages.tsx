
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Packages = () => {
  const { language } = useLanguage();

  const packages = [
    {
      name: language === "de" ? "Starter Paket" : "Starter Package",
      price: "€997",
      duration: language === "de" ? "/monat" : "/month",
      description: language === "de" ? "Perfekt für kleine Unternehmen, die gerade erst anfangen" : "Perfect for small businesses just getting started",
      features: [
        language === "de" ? "Professionelle Website" : "Professional Website",
        language === "de" ? "Basis SEO Optimierung" : "Basic SEO Optimization", 
        language === "de" ? "Social Media Setup" : "Social Media Setup",
        language === "de" ? "Monatliches Reporting" : "Monthly Reporting"
      ],
      popular: false
    },
    {
      name: language === "de" ? "Wachstum Paket" : "Growth Package",
      price: "€1,997",
      duration: language === "de" ? "/monat" : "/month",
      description: language === "de" ? "Für Unternehmen, die bereit sind zu skalieren" : "For businesses ready to scale",
      features: [
        language === "de" ? "Alles im Starter Paket" : "Everything in Starter Package",
        language === "de" ? "Performance Marketing" : "Performance Marketing",
        language === "de" ? "Content Marketing" : "Content Marketing",
        language === "de" ? "Erweiterte Analytik" : "Advanced Analytics",
        language === "de" ? "Wöchentliche Beratung" : "Weekly Consultation"
      ],
      popular: true
    },
    {
      name: language === "de" ? "Premium Paket" : "Premium Package", 
      price: language === "de" ? "Individuell" : "Custom",
      duration: "",
      description: language === "de" ? "Maßgeschneiderte Lösungen für etablierte Unternehmen" : "Tailored solutions for established businesses",
      features: [
        language === "de" ? "Alles im Wachstum Paket" : "Everything in Growth Package",
        language === "de" ? "Dedizierter Account Manager" : "Dedicated Account Manager",
        language === "de" ? "Erweiterte Automatisierung" : "Advanced Automation",
        language === "de" ? "Prioritäts-Support" : "Priority Support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mueller",
      company: "Local Bakery Owner",
      text: language === "de" ? "Thun Ventures hat unsere Online-Präsenz komplett transformiert. Unsere Verkäufe sind um 150% gestiegen!" : "Thun Ventures completely transformed our online presence. Our sales increased by 150%!",
      rating: 5
    },
    {
      name: "Michael Weber", 
      company: "Consulting Firm",
      text: language === "de" ? "Professioneller Service und messbare Ergebnisse. Genau das, was kleine Unternehmen brauchen." : "Professional service and measurable results. Exactly what small businesses need.",
      rating: 5
    },
    {
      name: "Lisa Schmidt",
      company: "E-commerce Store",
      text: language === "de" ? "Transparente Kommunikation und echte Partnerschaft. Sehr empfehlenswert!" : "Transparent communication and true partnership. Highly recommended!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: language === "de" ? "Wie schnell sehe ich Ergebnisse?" : "How quickly will I see results?",
      answer: language === "de" ? "Die meisten Kunden sehen erste Verbesserungen innerhalb von 30-60 Tagen. Signifikante Ergebnisse zeigen sich typischerweise nach 90 Tagen." : "Most clients see initial improvements within 30-60 days. Significant results typically show after 90 days."
    },
    {
      question: language === "de" ? "Gibt es langfristige Verträge?" : "Are there long-term contracts?",
      answer: language === "de" ? "Nein, wir arbeiten monatlich. Sie können jederzeit mit 30 Tagen Kündigungsfrist kündigen." : "No, we work month-to-month. You can cancel anytime with 30 days notice."
    },
    {
      question: language === "de" ? "Was ist in den monatlichen Berichten enthalten?" : "What's included in monthly reports?",
      answer: language === "de" ? "Detaillierte Analysen zu Website-Traffic, Conversions, Social Media Performance und ROI-Metriken." : "Detailed analytics on website traffic, conversions, social media performance, and ROI metrics."
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
            {language === "de" ? "Wählen Sie Ihr Wachstumspaket" : "Choose Your Growth Package"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {language === "de" 
              ? "Transparente Preise, messbare Ergebnisse. Finden Sie das perfekte Paket für Ihr Unternehmen."
              : "Transparent pricing, measurable results. Find the perfect package for your business."
            }
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${pkg.popular ? 'ring-2 ring-electric-blue shadow-xl scale-105' : 'shadow-sm hover:shadow-md'} transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-electric-blue text-white text-center py-2 text-sm font-semibold">
                    {language === "de" ? "Beliebteste Wahl" : "Most Popular"}
                  </div>
                )}
                <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-8'} pb-6`}>
                  <CardTitle className="text-2xl font-bold text-navy mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-electric-blue">{pkg.price}</span>
                    {pkg.duration && <span className="text-gray-600 ml-1">{pkg.duration}</span>}
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-electric-blue mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full py-3 ${pkg.popular ? 'bg-electric-blue hover:bg-electric-blue/90' : 'bg-navy hover:bg-navy/90'} text-white font-semibold transition-colors`}
                  >
                    <Link to="/contact">
                      {language === "de" ? "Paket Wählen" : "Choose Package"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {language === "de" ? "Was unsere Kunden sagen" : "What Our Clients Say"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "de" 
                ? "Echte Ergebnisse von echten Unternehmen"
                : "Real results from real businesses"
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {language === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-navy mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "de" 
              ? "Bereit zu starten?"
              : "Ready to Get Started?"
            }
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            {language === "de" 
              ? "Lassen Sie uns über Ihre digitalen Marketing-Ziele sprechen"
              : "Let's discuss your digital marketing goals"
            }
          </p>
          <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4">
            <Link to="/contact">
              {language === "de" ? "Kostenlose Beratung erhalten" : "Get Free Consultation"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;
