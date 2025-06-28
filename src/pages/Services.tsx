
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Search, BarChart, Instagram, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Web Design",
      description: "Modern, responsive websites that convert visitors into customers",
      features: [
        "Mobile-first responsive design",
        "SEO-optimized structure",
        "Fast loading speeds",
        "User experience focused",
        "Content management system",
        "Analytics integration"
      ],
      popular: false
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO & Content Strategy",
      description: "Boost your search rankings and attract qualified traffic",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Content planning & creation",
        "Technical SEO audit",
        "Local SEO optimization",
        "Monthly performance reports"
      ],
      popular: true
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Performance Marketing",
      description: "Data-driven advertising campaigns that deliver measurable ROI",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Campaign optimization",
        "A/B testing & analysis",
        "Conversion tracking",
        "ROI-focused strategies"
      ],
      popular: false
    },
    {
      icon: <Instagram className="h-12 w-12" />,
      title: "Social Media Management",
      description: "Build your brand and engage with your audience across all platforms",
      features: [
        "Content creation & scheduling",
        "Community management",
        "Social media strategy",
        "Influencer partnerships",
        "Brand voice development",
        "Performance analytics"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current digital presence and identify growth opportunities"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a customized digital marketing strategy aligned with your business goals"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the strategy with precision and attention to detail"
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuously monitor, analyze, and optimize for better results"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Digital Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From web design to performance marketing, we provide everything your business needs 
            to succeed in the digital landscape.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/packages">
              View Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-shadow ${service.popular ? 'border-2 border-blue-500' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Perfect for Growing Businesses
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Our services are specifically designed for small and medium-sized businesses 
                  and solo entrepreneurs who want to make a real impact online.
                </p>
                <p>
                  Whether you're just starting out or looking to scale your existing digital presence, 
                  we have the expertise and tools to help you succeed.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">SMB</div>
                  <div className="text-sm text-gray-600">Small & Medium Business</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">Solo</div>
                  <div className="text-sm text-gray-600">Entrepreneurs</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Business growth"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose from our carefully crafted packages or contact us for a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/packages">View Packages</Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 bg-navy text-white hover:bg-navy/90 border-0">
              <Link to="/contact">Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
