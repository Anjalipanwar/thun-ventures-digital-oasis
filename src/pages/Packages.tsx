
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Packages = () => {
  const packages = [
    {
      name: "Starter Pack",
      price: "€399",
      popular: false,
      description: "Perfect for small businesses and startups looking to establish their digital presence",
      features: [
        "Professional website design",
        "Basic SEO optimization",
        "Google My Business setup",
        "Social media account setup",
        "1 month of content creation",
        "Analytics setup & training"
      ]
    },
    {
      name: "Premium Pack",
      price: "€699",
      popular: true,
      description: "Comprehensive solution for businesses ready to scale their digital marketing",
      features: [
        "Everything in Starter Pack",
        "Advanced SEO strategy",
        "Google Ads setup & management",
        "Social media management (3 months)",
        "Email marketing automation",
        "Conversion optimization",
        "Monthly performance reports",
        "Priority support"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Thun Ventures transformed our online presence. Sales increased by 150% in just 3 months!"
    },
    {
      name: "Michael Weber",
      rating: 5,
      text: "Professional, reliable, and results-driven. Exactly what we needed for our Berlin startup."
    },
    {
      name: "Lisa Chen",
      rating: 5,
      text: "Their transparent approach and clear communication made everything smooth and effective."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial improvements within 30 days, with significant results typically visible within 60-90 days. The timeline depends on your industry, competition, and chosen package."
    },
    {
      question: "Do you work with businesses outside of Berlin?",
      answer: "Yes! While we're based in Berlin, we work with clients across Germany and Europe. All our services can be delivered remotely with regular video consultations."
    },
    {
      question: "What's included in the monthly reports?",
      answer: "Our reports include website traffic analytics, conversion rates, social media performance, ad spend efficiency, and actionable recommendations for continued growth."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! You can upgrade from Starter to Premium at any time. We'll adjust the billing and implement additional features seamlessly."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, both packages include training sessions to help your team understand and maintain your new digital marketing setup."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Choose Your Growth Package
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Transparent pricing. No hidden costs. Everything you need to succeed online.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-electric-blue shadow-xl scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electric-blue text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-navy mb-2">{pkg.name}</CardTitle>
                  <div className="text-5xl font-bold text-electric-blue mb-4">{pkg.price}</div>
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 space-y-3">
                    <Button asChild className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-3">
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Book Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white py-3">
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Chat
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-semibold text-navy">{testimonial.name}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our packages</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-navy hover:text-electric-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join hundreds of successful businesses that trust Thun Ventures with their digital growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
