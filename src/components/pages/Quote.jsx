import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { productService } from '@/services/api/productService';
import { quoteService } from '@/services/api/quoteService';
import ApperIcon from '@/components/ApperIcon';

const Quote = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Project Details
    projectName: '',
    industry: '',
    timeline: '',
    
    // Product Selection
    selectedProducts: [],
    customRequirements: '',
    
    // Specifications
    quantity: '',
    material: '',
    tolerances: '',
    finishRequirements: '',
    
    // Additional Information
    additionalNotes: '',
    attachments: []
  });
  
  const [errors, setErrors] = useState({});

  const industries = [
    { value: '', label: 'Select Industry' },
    { value: 'aerospace', label: 'Aerospace' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'medical', label: 'Medical Devices' },
    { value: 'industrial', label: 'Industrial Equipment' },
    { value: 'defense', label: 'Defense & Military' },
    { value: 'energy', label: 'Energy & Power' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'other', label: 'Other' }
  ];

  const timelines = [
    { value: '', label: 'Select Timeline' },
    { value: 'rush', label: 'Rush (1-2 weeks)' },
    { value: 'standard', label: 'Standard (3-4 weeks)' },
    { value: 'extended', label: 'Extended (5-8 weeks)' },
    { value: 'flexible', label: 'Flexible timing' }
  ];

  const materials = [
    { value: '', label: 'Select Material' },
    { value: 'aluminum', label: 'Aluminum' },
    { value: 'steel', label: 'Steel' },
    { value: 'stainless-steel', label: 'Stainless Steel' },
    { value: 'titanium', label: 'Titanium' },
    { value: 'brass', label: 'Brass' },
    { value: 'copper', label: 'Copper' },
    { value: 'plastic', label: 'Engineering Plastics' },
    { value: 'other', label: 'Other (specify in notes)' }
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleProductSelection = (productId) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productId)
        ? prev.selectedProducts.filter(id => id !== productId)
        : [...prev.selectedProducts, productId]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.company.trim()) newErrors.company = 'Company is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    } else if (step === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
      if (!formData.industry) newErrors.industry = 'Industry is required';
      if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    } else if (step === 3) {
      if (formData.selectedProducts.length === 0 && !formData.customRequirements.trim()) {
        newErrors.selectedProducts = 'Please select products or describe custom requirements';
        newErrors.customRequirements = 'Please select products or describe custom requirements';
      }
    } else if (step === 4) {
      if (!formData.quantity.trim()) newErrors.quantity = 'Quantity is required';
      if (!formData.material) newErrors.material = 'Material selection is required';
    }
    
    return newErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    setErrors({});
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const stepErrors = validateStep(5);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await quoteService.create(formData);
      
      toast.success('Quote request submitted successfully! We\'ll contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectName: '',
        industry: '',
        timeline: '',
        selectedProducts: [],
        customRequirements: '',
        quantity: '',
        material: '',
        tolerances: '',
        finishRequirements: '',
        additionalNotes: '',
        attachments: []
      });
      setCurrentStep(1);
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="John Doe"
                icon="User"
              />
              
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder="john@company.com"
                icon="Mail"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                error={errors.company}
                required
                placeholder="ABC Manufacturing"
                icon="Building"
              />
              
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                required
                placeholder="(555) 123-4567"
                icon="Phone"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Project Details
            </h2>
            
            <Input
              label="Project Name"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              error={errors.projectName}
              required
              placeholder="Enter project name"
              icon="Briefcase"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Industry"
                name="industry"
                options={industries}
                value={formData.industry}
                onChange={handleChange}
                error={errors.industry}
                required
              />
              
              <Select
                label="Required Timeline"
                name="timeline"
                options={timelines}
                value={formData.timeline}
                onChange={handleChange}
                error={errors.timeline}
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Product Selection
            </h2>
            
            {loading ? (
              <Loading type="grid" />
            ) : error ? (
              <Error message={error} onRetry={loadProducts} />
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Select Existing Products
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <div
                        key={product.Id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          formData.selectedProducts.includes(product.Id)
                            ? 'border-accent bg-accent/5'
                            : 'border-gray-200 hover:border-secondary'
                        }`}
                        onClick={() => handleProductSelection(product.Id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${
                            formData.selectedProducts.includes(product.Id)
                              ? 'border-accent bg-accent'
                              : 'border-gray-300'
                          }`}>
                            {formData.selectedProducts.includes(product.Id) && (
                              <ApperIcon name="Check" className="h-3 w-3 text-white" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-medium text-primary text-sm">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <Textarea
                    label="Custom Requirements"
                    name="customRequirements"
                    value={formData.customRequirements}
                    onChange={handleChange}
                    error={errors.customRequirements}
                    placeholder="Describe any custom parts or modifications needed..."
                    rows={4}
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Specifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Quantity Required"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                error={errors.quantity}
                required
                placeholder="1000"
                icon="Hash"
              />
              
              <Select
                label="Material"
                name="material"
                options={materials}
                value={formData.material}
                onChange={handleChange}
                error={errors.material}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Tolerance Requirements"
                name="tolerances"
                value={formData.tolerances}
                onChange={handleChange}
                placeholder="±0.001 inches"
                icon="Target"
              />
              
              <Input
                label="Surface Finish"
                name="finishRequirements"
                value={formData.finishRequirements}
                onChange={handleChange}
                placeholder="Ra 32 μin"
                icon="Paintbrush"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Additional Information
            </h2>
            
            <Textarea
              label="Additional Notes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any additional requirements, special instructions, or questions..."
              rows={6}
            />
            
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Quote Summary
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Contact:</span>
                  <span className="text-primary">{formData.name} ({formData.company})</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Project:</span>
                  <span className="text-primary">{formData.projectName}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry:</span>
                  <span className="text-primary">
                    {industries.find(i => i.value === formData.industry)?.label}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="text-primary">
                    {timelines.find(t => t.value === formData.timeline)?.label}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="text-primary">{formData.quantity}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="text-primary">
                    {materials.find(m => m.value === formData.material)?.label}
                  </span>
                </div>
                
                {formData.selectedProducts.length > 0 && (
                  <div>
                    <span className="text-gray-600">Selected Products:</span>
                    <ul className="mt-1 ml-4">
                      {formData.selectedProducts.map(productId => {
                        const product = products.find(p => p.Id === productId);
                        return product ? (
                          <li key={productId} className="text-primary text-xs">
                            • {product.name}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          Request a Quote
        </h1>
        <p className="text-xl text-gray-600">
          Get a customized quote for your manufacturing needs in 5 simple steps
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 py-8">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step === currentStep
                ? 'bg-accent text-white'
                : step < currentStep
                ? 'bg-success text-white'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {step < currentStep ? (
                <ApperIcon name="Check" className="h-5 w-5" />
              ) : (
                step
              )}
            </div>
            
            {step < 5 && (
              <div className={`w-12 h-1 mx-2 ${
                step < currentStep ? 'bg-success' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="card"
      >
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              icon="ChevronLeft"
            >
              Previous
            </Button>
            
            {currentStep < 5 ? (
              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
                icon="ChevronRight"
                iconPosition="right"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                icon={isSubmitting ? "Loader2" : "Send"}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            )}
          </div>
        </form>
      </motion.div>

      {/* Help Section */}
      <div className="text-center py-8">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Need Help with Your Quote?
        </h3>
        <p className="text-gray-600 mb-6">
          Our sales team is ready to assist you with any questions about your project requirements.
        </p>
        <Button
          variant="secondary"
          icon="Phone"
          onClick={() => window.location.href = 'tel:+15551234567'}
        >
          Call Sales Team: (555) 123-4567
        </Button>
      </div>
    </div>
  );
};

export default Quote;