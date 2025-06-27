
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
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
      title: language === "de" ? "Nachricht gesendet!" : "Message Sent!",
      description: language === "de" ? "Wir antworten normalerweise innerhalb von 1 Werktag." : "We typically respond within 1 business day.",
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
      title: language === "de" ? "Büro-Standort" : "Office Location",
      details: "Berlin, Germany",
      subtitle: language === "de" ? "Kunden in ganz Europa" : "Serving clients across Europe"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: language === "de" ? "E-Mail" : "Email Us",
      details: "hello@thunventures.com",
      subtitle: language === "de" ? "Antwort innerhalb von 4 Stunden" : "We respond within 4 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: language === "de" ? "Anrufen" : "Call Us",
      details: "+49 30 1234 5678",
      subtitle: language === "de" ? "Mo-Fr 9:00-18:00 CET" : "Mon-Fri 9:00-18:00 CET"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: language === "de" ? "Öffnungszeiten" : "Business Hours",
      details: language === "de" ? "Mo-Fr: 9:00-18:00" : "Mon-Fri: 9:00-18:00",
      subtitle: "CET (Central European Time)"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-soft-aqua/20 text-electric-blue rounded-full text-sm font-medium mb-6">
            💬 {language === "de" ? "Lassen Sie uns über Ihre Ziele sprechen" : "Let's Talk About Your Goals"}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-navy">
              {language === "de" ? "Kostenlose" : "Get a Free"}
            </span>
            <br />
            <span className="text-electric-blue">
              {language === "de" ? "Beratung" : "Consultation"}
            </span>
            <br />
            <span className="text-navy">
              {language === "de" ? "für Ihr Projekt" : "on Your Project"}
            </span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            {language === "de" 
              ? "Bereit, Ihre digitale Präsenz zu transformieren? Lassen Sie uns besprechen, wie wir Ihrem Unternehmen beim strategischen Wachstum helfen können."
              : "Ready to transform your digital presence? Let's discuss how we can help your business grow strategically."
            }
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-gray-100">
                <CardHeader>
                  <CardTitle className="text-3xl text-navy">
                    {language === "de" ? "Senden Sie uns eine Nachricht" : "Send us a Message"}
                  </CardTitle>
                  <p className="text-charcoal/70 text-lg">
                    {language === "de" 
                      ? "Erzählen Sie uns von Ihrem Projekt und wir melden uns innerhalb von 24 Stunden bei Ihnen."
                      : "Tell us about your project and we'll get back to you within 24 hours."
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-navy font-medium">
                          {language === "de" ? "Name *" : "Name *"}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={language === "de" ? "Ihr vollständiger Name" : "Your full name"}
                          className="border-gray-200 focus:border-electric-blue"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-navy font-medium">
                          {language === "de" ? "E-Mail *" : "Email *"}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={language === "de" ? "ihre@email.com" : "your@email.com"}
                          className="border-gray-200 focus:border-electric-blue"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-navy font-medium">
                        {language === "de" ? "Unternehmen" : "Company"}
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={language === "de" ? "Ihr Unternehmensname (optional)" : "Your company name (optional)"}
                        className="border-gray-200 focus:border-electric-blue"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-navy font-medium">
                        {language === "de" ? "Nachricht *" : "Message *"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder={language === "de" 
                          ? "Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und wie wir helfen können..."
                          : "Tell us about your project, goals, and how we can help..."
                        }
                        className="border-gray-200 focus:border-electric-blue"
                      />
                    </div>
                    
                    <Button type="submit" className="bg-electric-blue hover:bg-electric-blue/90 text-white w-full text-lg py-4">
                      {language === "de" ? "Nachricht senden" : "Send Message"}
                    </Button>
                    
                    <p className="text-center text-charcoal/60 text-sm">
                      {language === "de" 
                        ? "Wir antworten normalerweise innerhalb von 1 Werktag."
                        : "We typically respond within 1 business day."
                      }
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-navy">
                  {language === "de" ? "Kontakt aufnehmen" : "Get in Touch"}
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-electric-blue/10 to-soft-aqua/20 rounded-xl flex items-center justify-center text-electric-blue flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-navy">{info.title}</h3>
                        <p className="text-navy font-medium">{info.details}</p>
                        <p className="text-charcoal/60 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-navy">
                    {language === "de" ? "Andere Kontaktwege?" : "Prefer Other Ways?"}
                  </h3>
                  <div className="space-y-4">
                    <Button className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white w-full justify-start" variant="outline" asChild>
                      <a href="https://wa.me/4930123456789" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-3 h-5 w-5" />
                        {language === "de" ? "WhatsApp Chat" : "WhatsApp Chat"}
                      </a>
                    </Button>
                    <Button className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white w-full justify-start" variant="outline" asChild>
                      <a href="https://calendly.com/thunventures" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-3 h-5 w-5" />
                        {language === "de" ? "Termin vereinbaren" : "Schedule a Call"}
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
              {language === "de" ? "Besuchen Sie uns in Berlin" : "Visit us in Berlin"}
            </h2>
            <p className="text-xl text-charcoal/70">
              Wilmersdorfer Str. 130, 10627 Berlin, Germany
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.1845287423086!2d13.303021615909488!3d52.50280537981226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850e5c1e0b4f9%3A0x4c2f4c4c4c4c4c4c!2sWilmersdorfer%20Str.%20130%2C%2010627%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === "de" ? "Thun Ventures Standort" : "Thun Ventures Location"}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
