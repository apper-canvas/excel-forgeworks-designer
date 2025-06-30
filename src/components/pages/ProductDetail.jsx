import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { productService } from '@/services/api/productService';
import ApperIcon from '@/components/ApperIcon';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await productService.getById(parseInt(id));
      setProduct(data);
    } catch (err) {
      setError('Product not found or failed to load.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={loadProduct} />;
  }

  if (!product) {
    return <Error message="Product not found" />;
  }

  return (
    <div className="space-y-8">
      {/* Product Images and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-accent' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              {product.name}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Available Materials
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((material) => (
                <span
                  key={material}
                  className="px-3 py-1 bg-surface text-gray-700 rounded-md border"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Specifications
              </h3>
              <div className="bg-surface rounded-lg p-4">
                <dl className="grid grid-cols-1 gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="font-medium text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                      </dt>
                      <dd className="text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              as={Link}
              to="/quote"
              variant="primary"
              size="lg"
              icon="MessageSquare"
              className="flex-1"
            >
              Request Quote
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="secondary"
              size="lg"
              icon="Phone"
              className="flex-1"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-12 bg-surface rounded-xl">
        <div className="px-8">
          <h2 className="text-2xl font-display font-bold text-primary mb-8 text-center">
            Why Choose This Product?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Award" className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Manufactured to the highest standards with rigorous quality control
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Zap" className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick turnaround times without compromising on quality
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Settings" className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">
                Tailored to your specific requirements and applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-display font-bold text-primary mb-4">
          Interested in More Products?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our complete range of precision-manufactured components
        </p>
        <Button
          as={Link}
          to="/products"
          variant="secondary"
          icon="ArrowLeft"
        >
          Back to All Products
        </Button>
      </section>
    </div>
  );
};

export default ProductDetail;