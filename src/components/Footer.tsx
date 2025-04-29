import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Adoptia</h3>
            <p className="text-gray-400 mb-6 max-w-xs">
              Connecting hearts and building families through innovative, compassionate technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#mission" className="text-gray-400 hover:text-white transition duration-300">Our Mission</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition duration-300">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Adoption Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Support Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Agency Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and resources.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-3B7FD9"
              />
              <button
                type="submit"
                className="w-full bg-3B7FD9 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Adoptia. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;