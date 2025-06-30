import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Capabilities = () => {
  const capabilities = [
    {
      title: 'CNC Machining',
      description: 'State-of-the-art 3, 4, and 5-axis CNC machines for complex geometries',
      specs: ['±0.0001" tolerance', '50+ machines', '24/7 operation'],
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop',
      icon: 'Cog'
    },
    {
      title: 'Precision Turning',
      description: 'High-precision turning capabilities for cylindrical components',
      specs: ['Up to 24" diameter', 'Live tooling', 'Sub-spindle operations'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      icon: 'RotateCcw'
    },
    {
      title: 'Multi-Axis Milling',
      description: 'Complex 5-axis milling for aerospace and medical components',
      specs: ['5-axis simultaneous', 'High-speed machining', 'Titanium capable'],
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop',
      icon: 'Wrench'
    },
    {
      title: 'EDM Processing',
      description: 'Wire and sinker EDM for hardened materials and complex shapes',
      specs: ['±0.0002" accuracy', 'Hardened materials', 'Complex geometries'],
      image: 'https://images.unsplash.com/photo-1581092580497-e26f4b5b47a8?w=600&h=400&fit=crop',
      icon: 'Zap'
    }
  ];

  const equipment = [
    {
      category: 'CNC Machining Centers',
      machines: [
        { name: 'Haas VF-4SS', quantity: 8, description: '50" x 20" x 25" travel' },
        { name: 'Mazak Variaxis i-700', quantity: 4, description: '5-axis simultaneous' },
        { name: 'DMG Mori NHX 5500', quantity: 2, description: 'Horizontal machining' }
      ]
    },
    {
      category: 'Turning Centers',
      machines: [
        { name: 'Mazak Quick Turn Nexus 250-II', quantity: 6, description: '10" chuck, Y-axis' },
        { name: 'Haas ST-30', quantity: 4, description: '12" chuck, live tooling' },
        { name: 'Okuma LB35-II', quantity: 3, description: 'Heavy duty turning' }
      ]
    },
    {
      category: 'Quality Control',
      machines: [
        { name: 'Zeiss Contura G2', quantity: 2, description: 'CMM inspection' },
        { name: 'Keyence IM-8000', quantity: 1, description: 'Optical measurement' },
        { name: 'Various Gauges', quantity: 50, description: 'Precision measurement tools' }
      ]
    }
  ];

  const metrics = [
    { label: 'Production Capacity', value: '10,000+ parts/month' },
    { label: 'Machine Utilization', value: '85%' },
    { label: 'On-Time Delivery', value: '98.5%' },
    { label: 'First-Pass Yield', value: '99.2%' }
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
          Production Capabilities
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Our state-of-the-art facility combines advanced technology with skilled craftsmanship 
          to deliver precision manufacturing solutions across multiple industries.
        </motion.p>
      </section>

      {/* Key Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
              {metric.value}
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Manufacturing Capabilities */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Manufacturing Capabilities
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive manufacturing solutions for your most demanding requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <ApperIcon name={capability.icon} className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {capability.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {capability.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="Check" className="h-4 w-4 text-success mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-16 bg-surface rounded-2xl">
        <div className="px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Our Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading machinery for precision manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.machines.map((machine, machineIndex) => (
                    <div key={machineIndex} className="border-l-2 border-accent pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-primary text-sm">
                          {machine.name}
                        </h4>
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                          Qty: {machine.quantity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        {machine.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-gray-600">
            From concept to delivery, we ensure quality at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Design Review', description: 'Thorough analysis of specifications and requirements' },
            { step: '02', title: 'Setup & Programming', description: 'CNC programming and machine setup optimization' },
            { step: '03', title: 'Production', description: 'Precision manufacturing with continuous monitoring' },
            { step: '04', title: 'Quality Control', description: 'Final inspection and certification before delivery' }
          ].map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">
                  {process.step}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">
                {process.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Capabilities;