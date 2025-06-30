import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Quality = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      description: 'Quality management systems standard ensuring consistent quality delivery',
      validUntil: '2026-12-31',
      documentUrl: '/certificates/iso-9001-2015.pdf',
      icon: 'Award'
    },
    {
      name: 'AS9100D',
      issuer: 'Aerospace Quality Management',
      description: 'Aerospace quality management system for aviation, space, and defense',
      validUntil: '2025-08-15',
      documentUrl: '/certificates/as9100d.pdf',
      icon: 'Plane'
    },
    {
      name: 'ITAR Registration',
      issuer: 'U.S. Department of State',
      description: 'International Traffic in Arms Regulations compliance',
      validUntil: '2025-03-30',
      documentUrl: '/certificates/itar.pdf',
      icon: 'Shield'
    },
    {
      name: 'NIST 800-171',
      issuer: 'National Institute of Standards',
      description: 'Cybersecurity framework for controlled unclassified information',
      validUntil: '2024-11-20',
      documentUrl: '/certificates/nist-800-171.pdf',
      icon: 'Lock'
    }
  ];

  const qualityProcesses = [
    {
      title: 'Incoming Inspection',
      description: 'All raw materials undergo thorough inspection before processing',
      steps: ['Material certification review', 'Dimensional verification', 'Surface quality check'],
      icon: 'Package'
    },
    {
      title: 'In-Process Control',
      description: 'Continuous monitoring throughout the manufacturing process',
      steps: ['First article inspection', 'Statistical process control', 'Real-time measurements'],
      icon: 'Activity'
    },
    {
      title: 'Final Inspection',
      description: 'Comprehensive quality verification before shipment',
      steps: ['100% dimensional inspection', 'Surface finish verification', 'Documentation review'],
      icon: 'CheckCircle'
    },
    {
      title: 'Calibration Program',
      description: 'Regular calibration of all measurement equipment',
      steps: ['Monthly calibration checks', 'NIST traceable standards', 'Calibration certificates'],
      icon: 'Settings'
    }
  ];

  const qualityMetrics = [
    { label: 'First Pass Yield', value: '99.2%', trend: 'up' },
    { label: 'On-Time Delivery', value: '98.5%', trend: 'up' },
    { label: 'Customer Satisfaction', value: '4.9/5.0', trend: 'stable' },
    { label: 'Defect Rate', value: '0.03%', trend: 'down' }
  ];

  const equipment = [
    {
      name: 'Zeiss Contura G2 CMM',
      description: 'Coordinate measuring machine for precision dimensional inspection',
      specs: ['±0.3 + L/1000 μm accuracy', '700 x 1000 x 600mm measuring volume'],
      image: 'https://images.unsplash.com/photo-1581092580497-e26f4b5b47a8?w=400&h=300&fit=crop'
    },
    {
      name: 'Keyence IM-8000 Series',
      description: 'High-precision optical coordinate measuring system',
      specs: ['±0.5μm accuracy', '3D surface measurement', 'Automated inspection'],
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=300&fit=crop'
    },
    {
      name: 'Surface Roughness Tester',
      description: 'Precision surface finish measurement and analysis',
      specs: ['Ra: 0.01-40μm range', 'Multiple parameters', 'Statistical analysis'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    }
  ];

  const handleDownloadCertificate = (url, name) => {
    // In a real application, this would download the actual certificate
    console.log(`Downloading certificate: ${name} from ${url}`);
    alert(`Certificate download would start for: ${name}`);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
        >
          Quality Standards
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Our commitment to quality is demonstrated through rigorous standards, 
          comprehensive certifications, and continuous improvement processes.
        </motion.p>
      </section>

      {/* Quality Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {qualityMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center card"
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl md:text-4xl font-display font-bold text-accent">
                {metric.value}
              </span>
              <ApperIcon 
                name={metric.trend === 'up' ? 'TrendingUp' : metric.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                className={`ml-2 h-5 w-5 ${
                  metric.trend === 'up' ? 'text-success' : 
                  metric.trend === 'down' ? 'text-success' : 
                  'text-gray-400'
                }`}
              />
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Certifications */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Our Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Recognized standards that validate our commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <ApperIcon name={cert.icon} className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    Issued by: {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Valid until: {new Date(cert.validUntil).toLocaleDateString()}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      icon="Download"
                      onClick={() => handleDownloadCertificate(cert.documentUrl, cert.name)}
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-16 bg-surface rounded-2xl">
        <div className="px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Quality Control Process
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach to ensuring consistent quality at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={process.icon} className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {process.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {process.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Equipment */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Quality Control Equipment
          </h2>
          <p className="text-xl text-gray-600">
            State-of-the-art measurement and inspection equipment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="aspect-w-16 aspect-h-12 mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">
                {item.name}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              
              <ul className="space-y-1">
                {item.specs.map((spec, specIndex) => (
                  <li key={specIndex} className="flex items-center text-sm text-gray-600">
                    <ApperIcon name="Check" className="h-4 w-4 text-success mr-2" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="text-center py-16 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Our Quality Commitment
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-100"
          >
            We guarantee that every component meets or exceeds your specifications. 
            Our quality management system ensures consistent results and continuous improvement.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              icon="FileText"
              className="bg-accent hover:bg-accent/90"
            >
              Download Quality Manual
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon="Phone"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Discuss Your Requirements
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Quality;