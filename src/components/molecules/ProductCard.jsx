import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${product.Id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card group cursor-pointer"
      onClick={handleViewDetails}
    >
      <div className="aspect-w-16 aspect-h-12 mb-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded">
            {product.category}
          </span>
          <ApperIcon name="ArrowRight" className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors" />
        </div>
        
        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-gray-500">
            {product.materials.join(', ')}
          </span>
          <Button
            variant="ghost"
            size="sm"
            icon="Eye"
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;