
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap, Star, Building, ShoppingCart, User, Target, BarChart3, Smartphone, Globe } from "lucide-react";

const Index = () => {
  const capabilities = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "SEO Management",
      description: "Strategic optimization for sustainable growth"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Engaging content that converts audiences"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Design & Development",
      description: "Modern, conversion-focused websites"
    }
  ];

  const workingProcess = [
    {
      number: "01",
      title: "Researching",
      description: "Deep dive into your business goals and target audience"
    },
    {
      number: "02", 
      title: "Planning",
      description: "Strategic roadmap tailored to your unique needs"
    },
    {
      number: "03",
      title: "Building",
      description: "Execute with precision and continuous optimization"
    }
  ];

  const clientTypes = [
    {
      icon: <Building className="h-8 w-8" />,
      name: "SMEs"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      name: "E-commerce Stores"
    },
    {
      icon: <User className="h-8 w-8" />,
      name: "Independent Professionals"
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: "Local Businesses"
    }
  ];

  const stats = [
    { number: "200+", label: "Clients Served" },
    { number: "3x", label: "Average Growth" },
    { number: "3 days", label: "Avg. Proposal Time" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const brandLogos = [
    "Google", "Adobe", "Mailchimp", "Canva", "Upwork", "Woocommerce"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                An Experienced
                <br />
                <span className="text-electric-blue">Digital Marketing</span>
                <br />
                Agency
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                We are a digital marketing agency helping companies grow 
                better than experts and solve your digital marketing problems.
              </p>
              <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-semibold">
                CONTACT US
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
            <h2 className="text-lg font-medium text-electric-blue mb-4">⚡ Our Capabilities ⚡</h2>
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

      {/* Working Process Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
                Working process
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our streamlined approach ensures every project delivers exceptional results 
                through strategic planning and flawless execution.
              </p>
            </div>
            <div className="space-y-12">
              {workingProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-electric-blue font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
                Our work <span className="text-electric-blue">⚡</span>
                <br />
                speaks for itself
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                  <span>All projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span>Branding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span>SEO Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span>Social Media Marketing</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-navy rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                    alt="Project showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 bg-gray-100 rounded-lg"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-gray-100 rounded-lg"></div>
                <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" 
                    alt="Project showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                Some of the brands
                <br />
                we have worked with
              </h2>
              <p className="text-gray-600">
                Here are just a few of our amazing working clients we 
                have worked with over the years.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {brandLogos.map((brand, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-electric-blue">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We are a digital marketing
            <br />
            agency, helping companies
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Ready to transform your digital presence and achieve sustainable growth?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-4">
              <Link to="/packages">View Packages</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
