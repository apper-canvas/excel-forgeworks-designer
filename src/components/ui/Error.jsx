import React from 'react';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Error = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry,
  type = 'page'
}) => {
  if (type === 'inline') {
    return (
      <div className="bg-error/10 border border-error/20 rounded-lg p-4 text-center">
        <ApperIcon name="AlertCircle" className="h-6 w-6 text-error mx-auto mb-2" />
        <p className="text-error text-sm font-medium">{message}</p>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            className="mt-3 border-error text-error hover:bg-error hover:text-white"
          >
            Try Again
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <ApperIcon name="AlertTriangle" className="h-8 w-8 text-error" />
      </div>
      
      <h3 className="text-lg font-semibold text-primary mb-2">
        Oops! Something went wrong
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {message}
      </p>
      
      {onRetry && (
        <Button
          variant="primary"
          onClick={onRetry}
          icon="RefreshCw"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default Error;