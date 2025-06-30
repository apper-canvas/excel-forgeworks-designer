import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/molecules/ContactForm';
import ApperIcon from '@/components/ApperIcon';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Phone',
      value: '(555) 123-4567',
      description: 'Mon-Fri, 8AM-6PM EST',
      icon: 'Phone'
    },
    {
      title: 'Email',
      value: 'info@forgeworkspro.com',
      description: 'We respond within 24 hours',
      icon: 'Mail'
    },
    {
      title: 'Address',
      value: '1234 Industrial Blvd',
      description: 'Manufacturing City, MC 12345',
      icon: 'MapPin'
    },
    {
      title: 'Hours',
      value: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM EST',
      icon: 'Clock'
    }
  ];

  const departments = [
    {
      name: 'Sales & Quotes',
      email: 'sales@forgeworkspro.com',
      phone: '(555) 123-4567 ext. 101',
      description: 'New projects and quote requests'
    },
    {
      name: 'Engineering',
      email: 'engineering@forgeworkspro.com',
      phone: '(555) 123-4567 ext. 102',
      description: 'Technical specifications and design'
    },
    {
      name: 'Quality Assurance',
      email: 'quality@forgeworkspro.com',
      phone: '(555) 123-4567 ext. 103',
      description: 'Quality concerns and certifications'
    },
    {
      name: 'Customer Service',
      email: 'support@forgeworkspro.com',
      phone: '(555) 123-4567 ext. 104',
      description: 'Order status and general inquiries'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
        >
          Contact Us
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Ready to discuss your manufacturing needs? Our expert team is here to help 
          you find the perfect solution for your project.
        </motion.p>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <ApperIcon name={info.icon} className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-primary mb-2">
              {info.title}
            </h3>
            
            <p className="text-accent font-medium mb-1">
              {info.value}
            </p>
            
            <p className="text-gray-600 text-sm">
              {info.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Main Contact Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card"
        >
          <h2 className="text-2xl font-display font-bold text-primary mb-6">
            Send Us a Message
          </h2>
          
          <ContactForm />
        </motion.div>

        {/* Map and Additional Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <ApperIcon name="MapPin" className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500">1234 Industrial Blvd, Manufacturing City, MC 12345</p>
            </div>
          </div>

          {/* Directions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Directions & Parking
            </h3>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <ApperIcon name="Car" className="h-4 w-4 text-secondary mt-0.5" />
                <p>Free parking available in our main lot</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <ApperIcon name="MapPin" className="h-4 w-4 text-secondary mt-0.5" />
                <p>Located 5 minutes from Highway 95, Exit 23</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <ApperIcon name="Building" className="h-4 w-4 text-secondary mt-0.5" />
                <p>Visitor entrance at the main reception area</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-surface rounded-2xl">
        <div className="px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600">
              Reach out directly to the right department for faster service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {dept.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <ApperIcon name="Mail" className="h-4 w-4 text-secondary" />
                    <a href={`mailto:${dept.email}`} className="text-accent hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <ApperIcon name="Phone" className="h-4 w-4 text-secondary" />
                    <a href={`tel:${dept.phone}`} className="text-accent hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-8">
            <ApperIcon name="AlertTriangle" className="h-12 w-12 text-accent mx-auto mb-4" />
            
            <h3 className="text-xl font-semibold text-primary mb-4">
              Need Urgent Support?
            </h3>
            
            <p className="text-gray-600 mb-6">
              For urgent production issues or emergency support outside business hours, 
              please contact our emergency hotline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="btn-primary inline-flex items-center justify-center"
              >
                <ApperIcon name="Phone" className="mr-2 h-5 w-5" />
                Emergency: (555) 123-4567
              </a>
              
              <a
                href="mailto:emergency@forgeworkspro.com"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <ApperIcon name="Mail" className="mr-2 h-5 w-5" />
                Emergency Email
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;