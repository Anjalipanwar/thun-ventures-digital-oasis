
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star, Building, ShoppingCart, User } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Growth",
      description: "Our strategies have helped 200+ businesses achieve 3x digital growth"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Berlin-Based Team",
      description: "Local expertise with international digital marketing standards"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Results",
      description: "See measurable improvements in your digital presence within 30 days"
    }
  ];

  const clientTypes = [
    {
      icon: <Building className="h-12 w-12" />,
      name: "SMEs",
      description: "Small & Medium Enterprises"
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      name: "E-commerce Stores",
      description: "Online retailers & marketplaces"
    },
    {
      icon: <User className="h-12 w-12" />,
      name: "Independent Professionals",
      description: "Consultants & freelancers"
    },
    {
      icon: <Users className="h-12 w-12" />,
      name: "Local Businesses",
      description: "Community-focused enterprises"
    }
  ];

  const stats = [
    { number: "200+", label: "Clients Served" },
    { number: "3x", label: "Average Growth" },
    { number: "3 days", label: "Avg. Proposal Time" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-soft-aqua/20 text-electric-blue rounded-full text-sm font-medium">
                ✨ Ready to Grow Smarter?
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-navy">Transform Your</span>
                <br />
                <span className="text-electric-blue">Digital Future</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We help small businesses and solo founders navigate the digital landscape with strategic, 
                collaborative solutions that actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="neo-button text-lg">
                  <Link to="/packages">
                    View Packages <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild className="neo-button-outline text-lg">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop" 
                alt="Digital transformation success"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg neo-card">
                <div className="flex items-center space-x-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">5.0 Rating</div>
                    <div className="text-sm text-gray-500">200+ Happy Clients</div>
                  </div>
                </div>
              </div>
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
              Why Choose Thun Ventures?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine Berlin's innovative spirit with proven digital marketing strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="neo-card text-center p-8">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue/10 to-soft-aqua/20 rounded-2xl flex items-center justify-center mx-auto text-electric-blue">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
              Who We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with ambitious businesses ready to transform their digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="neo-card text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-navy/10 to-electric-blue/10 rounded-2xl flex items-center justify-center mx-auto text-navy mb-6">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{client.name}</h3>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy">
                Complete Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From web design to performance marketing, we provide everything your business needs to thrive online.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic digital roadmap & consultation",
                  "Transparent reporting & real-time analytics",
                  "Dedicated account manager for your success",
                  "24/7 support & ongoing optimization",
                  "No long-term contracts, flexible partnerships"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-electric-blue flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="neo-button mt-8">
                <Link to="/services">
                  Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop" 
                alt="Digital solutions dashboard"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-navy-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join 200+ businesses that have accelerated their growth with strategic digital solutions
          </p>
          <p className="text-lg mb-12 text-soft-aqua font-medium">
            Our average time to proposal? Just 3 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-gray-100 text-lg px-8 py-4">
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
