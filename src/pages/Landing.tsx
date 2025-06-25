
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const packages = [
    {
      name: "Starter Pack",
      price: "€399",
      description: "Perfect for businesses getting started with digital marketing",
      popular: false,
      features: [
        "Professional website audit",
        "Basic SEO optimization",
        "Google My Business setup",
        "Social media profile optimization",
        "1-hour strategy consultation",
        "Email support for 30 days"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Premium Pack",
      price: "€699", 
      description: "Comprehensive solution for serious growth",
      popular: true,
      features: [
        "Everything in Starter Pack",
        "Complete website redesign",
        "Advanced SEO strategy & implementation",
        "Google Ads campaign setup",
        "Social media content calendar (1 month)",
        "Performance analytics dashboard",
        "2 strategy consultations",
        "Priority support for 60 days"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Maria Schmidt",
      business: "Local Restaurant Owner",
      rating: 5,
      text: "Thun Ventures transformed our online presence completely. We went from 10 customers per week to 50+ thanks to their SEO and social media work!"
    },
    {
      name: "Thomas Weber",
      business: "E-commerce Store",
      rating: 5,
      text: "The Premium Pack was worth every euro. Our website conversion rate increased by 200% and our Google Ads are finally profitable."
    },
    {
      name: "Sophie Müller",
      business: "Consulting Firm",
      rating: 5,
      text: "Professional, transparent, and results-driven. They helped us establish a strong digital foundation that continues to drive leads."
    },
    {
      name: "Alex Chen",
      business: "Tech Startup",
      rating: 5,
      text: "The team at Thun Ventures understood our vision from day one. Their strategic approach helped us reach our first 1000 customers."
    },
    {
      name: "Lisa Johnson",
      business: "Fashion Boutique",
      rating: 5,
      text: "Outstanding service! Our social media engagement increased by 400% and online sales tripled within 3 months."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Implementation",
      description: "Get started within 48 hours of purchase"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Proven Results",
      description: "Average 3x growth for our clients"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Satisfaction Guaranteed",
      description: "30-day money-back guarantee"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 text-lg px-4 py-2">
            🚀 Launch Your Digital Success
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Growth Package
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Carefully crafted packages designed to accelerate your business growth. 
            No hidden fees, no long-term contracts, just results.
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <div className="text-blue-600">{benefit.icon}</div>
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
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed online, in one simple package
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all transform hover:-translate-y-1 ${pkg.popular ? 'border-2 border-purple-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-lg px-6 py-2">
                    🔥 Most Popular
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
                      Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need something custom?</p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
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
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How quickly can I see results?</h3>
                <p className="text-gray-600">Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. Timeline depends on your current digital presence and chosen package.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What if I'm not satisfied with the results?</h3>
                <p className="text-gray-600">We offer a 30-day satisfaction guarantee. If you're not happy with our work, we'll either fix the issues or provide a full refund.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Do you work with businesses outside of Berlin?</h3>
                <p className="text-gray-600">Absolutely! While we're based in Berlin, we work with clients throughout Germany and Europe. All consultations can be conducted remotely.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 200+ businesses that have accelerated their growth with Thun Ventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
