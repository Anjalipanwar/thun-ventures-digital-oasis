
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <span className="text-2xl font-bold">Thun Ventures</span>
            <p className="text-gray-300 leading-relaxed">
              Helping small and medium-sized businesses navigate the digital landscape with smart strategies and collaborative partnerships.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-soft-aqua cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-soft-aqua cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-soft-aqua cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-soft-aqua cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-soft-aqua transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-soft-aqua transition-colors font-medium">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-soft-aqua transition-colors font-medium">Services</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-soft-aqua transition-colors font-medium">Packages</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 font-medium">Web Design</li>
              <li className="text-gray-300 font-medium">SEO & Content Strategy</li>
              <li className="text-gray-300 font-medium">Performance Marketing</li>
              <li className="text-gray-300 font-medium">Social Media Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Berlin, Germany</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>hello@thunventures.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+49 30 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Thun Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
