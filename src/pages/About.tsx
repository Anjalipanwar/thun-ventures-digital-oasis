
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Transparency",
      description: "Complete visibility into our processes, results, and recommendations. No hidden agendas, just honest partnership."
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Strategy-First Thinking", 
      description: "Every campaign begins with deep analysis and strategic planning. We don't just execute - we strategize for success."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "True Partnership",
      description: "We become an extension of your team, invested in your long-term success and growth journey."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-soft-aqua/20 text-electric-blue rounded-full text-sm font-medium">
                🚀 Built for Growth. Driven by Strategy.
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-navy">Welcome to</span>
                <br />
                <span className="text-electric-blue">Thun Ventures</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Welcome to Thun Ventures! Our mission is to help small and medium-sized businesses 
                  and solo entrepreneurs master the complexity of digital marketing and achieve 
                  sustainable growth – through smart strategies and collaborative partnerships.
                </p>
                <p>
                  Based in the heart of Berlin, Germany, we combine the city's innovative spirit 
                  with proven digital marketing methodologies to help businesses navigate today's 
                  complex digital landscape.
                </p>
              </div>
              <div className="flex items-center space-x-4 text-electric-blue font-medium">
                <MapPin className="h-5 w-5" />
                <span>Headquartered in Berlin, Germany</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                alt="Team collaboration in Berlin"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every partnership we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="neo-card text-center p-10">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue/10 to-soft-aqua/20 rounded-2xl flex items-center justify-center mx-auto text-electric-blue">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy">
                Meet the Team Behind Your Success
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our diverse team of digital marketing experts, designers, and strategists brings 
                  together years of experience helping businesses grow online.
                </p>
                <p>
                  From our Berlin headquarters, we work with clients across Europe and beyond, 
                  combining local insights with global digital marketing best practices.
                </p>
              </div>
              <div className="mt-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-electric-blue" />
                  <span className="font-medium">Berlin, Germany Headquarters</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop" 
                alt="Team working together in modern office"
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's discuss how we can help your business achieve sustainable digital growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
              <Link to="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
