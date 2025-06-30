import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Precision',
      description: 'We deliver exceptional accuracy in every component we manufacture'
    },
    {
      icon: 'Clock',
      title: 'Reliability',
      description: 'Consistent quality and on-time delivery you can count on'
    },
    {
      icon: 'Heart',
      title: 'Customer Focus',
      description: 'Your success is our priority, from concept to completion'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'Embracing new technologies to solve complex manufacturing challenges'
    }
  ];

  const team = [
    {
      name: 'Michael Johnson',
      role: 'CEO & Founder',
      experience: '25+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Sarah Chen',
      role: 'VP of Operations',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Engineer',
      experience: '22+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      role: 'Quality Director',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const milestones = [
    { year: '2004', event: 'ForgeWorks Pro founded with a vision for precision manufacturing' },
    { year: '2008', event: 'Achieved ISO 9001:2015 certification for quality management' },
    { year: '2012', event: 'Expanded facility to 50,000 sq ft with advanced CNC equipment' },
    { year: '2016', event: 'Obtained AS9100D certification for aerospace manufacturing' },
    { year: '2020', event: 'Implemented Industry 4.0 technologies and digital manufacturing' },
    { year: '2024', event: 'Celebrating 20 years of manufacturing excellence' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
        >
          About ForgeWorks Pro
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          For over two decades, we've been at the forefront of precision manufacturing, 
          delivering exceptional quality and innovative solutions to our clients worldwide.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary mb-6">
            Our Story
          </h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2004 by visionary engineer Michael Johnson, ForgeWorks Pro began as a 
              small precision machining shop with a big dream: to become the most trusted name 
              in custom manufacturing solutions.
            </p>
            
            <p>
              Starting with just three employees and a handful of machines, we've grown into a 
              comprehensive manufacturing facility spanning 50,000 square feet, equipped with 
              state-of-the-art CNC machines, quality control systems, and a team of 75+ 
              skilled professionals.
            </p>
            
            <p>
              Today, we serve clients across aerospace, automotive, medical, and industrial 
              sectors, maintaining our commitment to precision, quality, and customer satisfaction 
              that has defined us from the beginning.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
            alt="Manufacturing facility"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-4">
              <ApperIcon name="Target" className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary">
              Our Mission
            </h3>
          </div>
          
          <p className="text-gray-600">
            To provide exceptional precision manufacturing services that exceed our clients' 
            expectations through innovative solutions, superior quality, and unwavering 
            commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-4">
              <ApperIcon name="Eye" className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary">
              Our Vision
            </h3>
          </div>
          
          <p className="text-gray-600">
            To be the global leader in precision manufacturing, recognized for our innovation, 
            quality, and ability to transform complex challenges into successful solutions 
            for our partners.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-surface rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={value.icon} className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                {value.title}
              </h3>
              
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the experts behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              
              <h3 className="text-lg font-semibold text-primary mb-1">
                {member.name}
              </h3>
              
              <p className="text-accent font-medium mb-2">
                {member.role}
              </p>
              
              <p className="text-sm text-gray-600">
                {member.experience} experience
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600">
            Key milestones in our 20-year history
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {milestone.year}
                </span>
              </div>
              
              <div className="card flex-1">
                <p className="text-gray-600">
                  {milestone.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;