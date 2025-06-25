
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We typically respond within 1 business day.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      details: "Berlin, Germany",
      subtitle: "Serving clients across Europe"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@thunventures.com",
      subtitle: "We respond within 4 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+49 30 1234 5678",
      subtitle: "Mon-Fri 9:00-18:00 CET"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9:00-18:00",
      subtitle: "CET (Central European Time)"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-soft-aqua/20 text-electric-blue rounded-full text-sm font-medium mb-6">
            💬 Let's Talk About Your Goals
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-navy">Get a Free</span>
            <br />
            <span className="text-electric-blue">Consultation</span>
            <br />
            <span className="text-navy">on Your Project</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss how we can help your business grow strategically.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="neo-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-navy">Send us a Message</CardTitle>
                  <p className="text-gray-600 text-lg">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-navy font-medium">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="border-gray-200 focus:border-electric-blue"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-navy font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="border-gray-200 focus:border-electric-blue"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-navy font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name (optional)"
                        className="border-gray-200 focus:border-electric-blue"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-navy font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, goals, and how we can help..."
                        className="border-gray-200 focus:border-electric-blue"
                      />
                    </div>
                    
                    <Button type="submit" className="neo-button w-full text-lg py-4">
                      Send Message
                    </Button>
                    
                    <p className="text-center text-gray-500 text-sm">
                      We typically respond within 1 business day.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-navy">Get in Touch</h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-electric-blue/10 to-soft-aqua/20 rounded-xl flex items-center justify-center text-electric-blue flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-navy">{info.title}</h3>
                        <p className="text-navy font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="neo-card bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-navy">Prefer Other Ways?</h3>
                  <div className="space-y-4">
                    <Button className="neo-button-outline w-full justify-start" asChild>
                      <a href="https://wa.me/4930123456789" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-3 h-5 w-5" />
                        WhatsApp Chat
                      </a>
                    </Button>
                    <Button className="neo-button-outline w-full justify-start" asChild>
                      <a href="https://calendly.com/thunventures" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-3 h-5 w-5" />
                        Schedule a Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
              Located in the Heart of Berlin
            </h2>
            <p className="text-xl text-gray-600">
              Serving businesses across Germany and Europe
            </p>
          </div>
          
          <div className="neo-card p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-navy">Visit Our Office</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-electric-blue" />
                    <span className="font-medium text-lg">Berlin, Germany</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-electric-blue" />
                    <span className="font-medium text-lg">Monday - Friday: 9:00 AM - 6:00 PM CET</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-8 text-lg leading-relaxed">
                  While we're based in Berlin, we work with clients throughout Europe. 
                  All meetings can be conducted remotely via video call.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-medium">Interactive Map</p>
                  <p className="text-lg">Berlin, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
