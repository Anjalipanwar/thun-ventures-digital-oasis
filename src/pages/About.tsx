
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Transparency",
      description: "Complete visibility into our processes, results, and recommendations. No hidden agendas, just honest partnership."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategy-First Thinking",
      description: "Every campaign begins with deep analysis and strategic planning. We don't just execute - we strategize for success."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "True Partnership",
      description: "We become an extension of your team, invested in your long-term success and growth journey."
    }
  ];

  const stats = [
    { number: "200+", label: "Clients Served" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3x", label: "Average Growth" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Welcome to
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Thun Ventures
                </span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Our mission is to help small and medium-sized businesses and sole proprietors master the complexity of digital marketing and achieve sustainable growth – through smart strategies and collaborative partnerships.
                </p>
                <p>
                  Based in the heart of Berlin, we combine the city's innovative spirit with proven digital marketing methodologies to help businesses navigate today's complex digital landscape.
                </p>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Headquartered in Berlin, Germany</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Top Rated Agency</div>
                    <div className="text-sm text-gray-500">Berlin 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every partnership we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet the Team Behind Your Success
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Our diverse team of digital marketing experts, designers, and strategists brings together years of experience helping businesses grow online.
                </p>
                <p>
                  From our Berlin headquarters, we work with clients across Europe and beyond, combining local insights with global digital marketing best practices.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>Founded in 2019</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>15+ Team Members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Berlin, Germany HQ</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop" 
                alt="Team working together"
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business achieve sustainable digital growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
