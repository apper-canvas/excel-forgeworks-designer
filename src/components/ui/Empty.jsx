import React from 'react';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  title = "No items found",
  description = "We couldn't find any items matching your criteria.",
  icon = "Package",
  action,
  actionLabel = "Browse Products",
  type = 'page'
}) => {
  if (type === 'search') {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="Search" className="h-6 w-6 text-gray-400" />
        </div>
        
        <h3 className="text-lg font-medium text-primary mb-2">
          No search results
        </h3>
        
        <p className="text-gray-500 text-sm">
          Try adjusting your search terms or browse our products
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="w-20 h-20 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <ApperIcon name={icon} className="h-10 w-10 text-secondary" />
      </div>
      
      <h3 className="text-xl font-semibold text-primary mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        {description}
      </p>
      
      {action && (
        <Button
          variant="primary"
          onClick={action}
          icon="ArrowRight"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default Empty;