
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Landing = () => {
  const { language } = useLanguage();

  const packages = [
    {
      name: language === "de" ? "Starter Paket" : "Starter Package",
      price: "€997",
      period: language === "de" ? "/Monat" : "/month",
      description: language === "de" ? "Perfekt für kleine Unternehmen, die online wachsen möchten" : "Perfect for small businesses looking to grow online",
      features: [
        language === "de" ? "Website-Optimierung" : "Website optimization",
        language === "de" ? "Basis SEO Setup" : "Basic SEO setup",
        language === "de" ? "Social Media Management (2 Plattformen)" : "Social Media management (2 platforms)",
        language === "de" ? "Monatliche Performance-Berichte" : "Monthly performance reports",
        language === "de" ? "E-Mail Support" : "Email support"
      ],
      popular: false,
      cta: language === "de" ? "Starter wählen" : "Choose Starter"
    },
    {
      name: language === "de" ? "Growth Paket" : "Growth Package",
      price: "€1,997",
      period: language === "de" ? "/Monat" : "/month",
      description: language === "de" ? "Für Unternehmen, die ihr digitales Marketing skalieren möchten" : "For businesses ready to scale their digital marketing",
      features: [
        language === "de" ? "Alles aus Starter Paket" : "Everything in Starter",
        language === "de" ? "Performance Marketing (Google & Facebook Ads)" : "Performance marketing (Google & Facebook Ads)",
        language === "de" ? "Content-Strategie & Erstellung" : "Content strategy & creation",
        language === "de" ? "Erweiterte SEO & Analytics" : "Advanced SEO & analytics",
        language === "de" ? "Wöchentliche Strategie-Calls" : "Weekly strategy calls",
        language === "de" ? "Prioritätssupport" : "Priority support"
      ],
      popular: true,
      cta: language === "de" ? "Growth wählen" : "Choose Growth"
    },
    {
      name: language === "de" ? "Enterprise Paket" : "Enterprise Package",
      price: language === "de" ? "Ab €3,997" : "From €3,997",
      period: language === "de" ? "/Monat" : "/month",
      description: language === "de" ? "Vollständige digitale Marketing-Lösung für etablierte Unternehmen" : "Complete digital marketing solution for established businesses",
      features: [
        language === "de" ? "Alles aus Growth Paket" : "Everything in Growth",
        language === "de" ? "Dediziertes Account Management" : "Dedicated account management",
        language === "de" ? "Multi-Channel Marketing Automation" : "Multi-channel marketing automation",
        language === "de" ? "Erweiterte Conversion-Optimierung" : "Advanced conversion optimization",
        language === "de" ? "Individuelle Strategie & Beratung" : "Custom strategy & consulting",
        language === "de" ? "24/7 Support" : "24/7 support"
      ],
      popular: false,
      cta: language === "de" ? "Enterprise wählen" : "Choose Enterprise"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "EcoStyle Boutique",
      text: language === "de" 
        ? "Thun Ventures hat unseren Online-Umsatz um 300% gesteigert. Ihre strategische Herangehensweise und transparente Kommunikation sind außergewöhnlich."
        : "Thun Ventures increased our online revenue by 300%. Their strategic approach and transparent communication is exceptional.",
      rating: 5
    },
    {
      name: "Marcus Weber",
      company: "TechFlow Solutions",
      text: language === "de"
        ? "Endlich eine Agentur, die versteht, was kleine Unternehmen brauchen. ROI war vom ersten Monat an sichtbar."
        : "Finally an agency that understands what small businesses need. ROI was visible from the first month.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Wellness Studio Luna",
      text: language === "de"
        ? "Die persönliche Betreuung und messbaren Ergebnisse übertreffen alle Erwartungen. Absolute Empfehlung!"
        : "The personal support and measurable results exceed all expectations. Absolute recommendation!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: language === "de" ? "Wie schnell sehe ich erste Ergebnisse?" : "How quickly will I see initial results?",
      answer: language === "de" 
        ? "Die meisten unserer Kunden sehen erste messbare Verbesserungen innerhalb von 30-60 Tagen. Langfristige, nachhaltige Ergebnisse entwickeln sich typischerweise über 3-6 Monate."
        : "Most of our clients see initial measurable improvements within 30-60 days. Long-term, sustainable results typically develop over 3-6 months."
    },
    {
      question: language === "de" ? "Gibt es langfristige Verträge?" : "Are there long-term contracts?",
      answer: language === "de"
        ? "Nein, wir arbeiten ohne langfristige Bindung. Sie können jederzeit mit einer 30-tägigen Kündigungsfrist beenden. Wir sind überzeugt, dass unsere Ergebnisse für sich sprechen."
        : "No, we work without long-term commitments. You can cancel anytime with 30 days notice. We're confident our results speak for themselves."
    },
    {
      question: language === "de" ? "Was unterscheidet euch von anderen Agenturen?" : "What sets you apart from other agencies?",
      answer: language === "de"
        ? "Unsere Spezialisierung auf kleine und mittlere Unternehmen, vollständige Transparenz bei Prozessen und Ergebnissen, sowie unser strategischer Ansatz. Wir sind Partner, nicht nur Dienstleister."
        : "Our specialization in small and medium businesses, complete transparency in processes and results, and our strategic approach. We're partners, not just service providers."
    },
    {
      question: language === "de" ? "Welche Branchen betreut ihr?" : "Which industries do you serve?",
      answer: language === "de"
        ? "Wir arbeiten branchenübergreifend, haben aber besondere Expertise in E-Commerce, B2B-Services, Gesundheitswesen, Beratung und lokalen Dienstleistungen."
        : "We work across industries but have particular expertise in e-commerce, B2B services, healthcare, consulting, and local services."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy to-electric-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8">
              🚀 {language === "de" ? "Digitales Wachstum. Messbare Ergebnisse." : "Digital Growth. Measurable Results."}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              {language === "de" ? "Wählen Sie Ihr" : "Choose Your"}
              <br />
              <span className="text-soft-aqua">
                {language === "de" ? "Wachstumspaket" : "Growth Package"}
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-12">
              {language === "de" 
                ? "Transparente Preise. Keine versteckten Kosten. Messbare Ergebnisse in 30-90 Tagen."
                : "Transparent pricing. No hidden costs. Measurable results in 30-90 days."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                className="bg-white text-navy hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {language === "de" ? "Kostenlose Beratung" : "Free Consultation"}
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4 font-semibold"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {language === "de" ? "WhatsApp Chat" : "WhatsApp Chat"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative neo-card ${pkg.popular ? 'ring-2 ring-electric-blue shadow-xl scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electric-blue text-white px-4 py-1">
                    {language === "de" ? "Beliebt" : "Most Popular"}
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-navy mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-electric-blue">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-electric-blue" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full ${pkg.popular ? 'bg-electric-blue hover:bg-electric-blue/90' : 'bg-navy hover:bg-navy/90'} text-white`}
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      {pkg.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {language === "de" ? "Was unsere Kunden sagen" : "What Our Clients Say"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "de" 
                ? "Echte Ergebnisse von echten Unternehmen"
                : "Real results from real businesses"
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="neo-card text-center p-8">
                <CardContent className="space-y-6">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-electric-blue font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {language === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "de" 
                ? "Antworten auf die wichtigsten Fragen"
                : "Answers to the most important questions"
              }
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {language === "de" 
              ? "Bereit zu wachsen?"
              : "Ready to Grow?"
            }
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            {language === "de" 
              ? "Starten Sie noch heute Ihre digitale Transformation mit messbaren Ergebnissen."
              : "Start your digital transformation today with measurable results."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4">
              <Link to="/contact">
                {language === "de" ? "Kostenlose Beratung starten" : "Start Free Consultation"}
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                {language === "de" ? "Termin vereinbaren" : "Schedule Call"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
