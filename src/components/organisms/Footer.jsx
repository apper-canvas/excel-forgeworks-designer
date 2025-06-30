import React from 'react';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/capabilities', label: 'Capabilities' }
  ];

  const serviceLinks = [
    { path: '/quality', label: 'Quality Standards' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/quote', label: 'Request Quote' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                <ApperIcon name="Zap" className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold">
                ForgeWorks Pro
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of precision manufacturing solutions with over 20 years of experience. 
              We deliver quality products that meet the highest industry standards.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <ApperIcon name="MapPin" className="h-5 w-5 text-accent" />
                <span className="text-gray-300">
                  1234 Industrial Blvd, Manufacturing City, MC 12345
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" className="h-5 w-5 text-accent" />
                <span className="text-gray-300">
                  (555) 123-4567
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="h-5 w-5 text-accent" />
                <span className="text-gray-300">
                  info@forgeworkspro.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 ForgeWorks Pro. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <ApperIcon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <ApperIcon name="Twitter" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <ApperIcon name="Linkedin" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <ApperIcon name="Youtube" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;