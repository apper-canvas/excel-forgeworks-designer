import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Home = () => {
  const capabilities = [
    {
      icon: 'Cog',
      title: 'Precision Machining',
      description: 'Advanced CNC machining with tolerances as tight as ±0.0001"'
    },
    {
      icon: 'Zap',
      title: 'Fast Turnaround',
      description: 'Quick prototyping and production with delivery in 2-5 days'
    },
    {
      icon: 'Shield',
      title: 'Quality Assured',
      description: 'ISO 9001:2015 certified with 100% inspection guarantee'
    },
    {
      icon: 'Users',
      title: 'Expert Team',
      description: '20+ years of manufacturing experience and engineering expertise'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: 'Award' },
    { name: 'AS9100D', icon: 'Star' },
    { name: 'ITAR Registered', icon: 'Shield' },
    { name: 'NIST Compliant', icon: 'CheckCircle' }
  ];

  const stats = [
    { label: 'Years Experience', value: '20+' },
    { label: 'Projects Completed', value: '5,000+' },
    { label: 'Quality Rating', value: '99.8%' },
    { label: 'On-Time Delivery', value: '98.5%' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6"
          >
            Precision Manufacturing
            <span className="block text-accent">Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-100"
          >
            Delivering high-quality custom manufacturing solutions with unmatched precision, 
            reliability, and customer satisfaction for over two decades.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              as={Link}
              to="/quote"
              variant="primary"
              size="lg"
              icon="MessageSquare"
              className="bg-accent hover:bg-accent/90"
            >
              Request Quote
            </Button>
            <Button
              as={Link}
              to="/products"
              variant="secondary"
              size="lg"
              icon="Package"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Products
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art equipment and experienced professionals ensure every project 
            meets the highest standards of quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ApperIcon name={capability.icon} className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                {capability.title}
              </h3>
              
              <p className="text-gray-600">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-surface rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Quality Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Certified to the highest industry standards for your peace of mind
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                <ApperIcon name={cert.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary text-sm">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Get a custom quote for your manufacturing needs. Our expert team is ready to 
            discuss your requirements and provide competitive pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              to="/quote"
              variant="primary"
              size="lg"
              icon="MessageSquare"
            >
              Get Your Quote
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="secondary"
              size="lg"
              icon="Phone"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;