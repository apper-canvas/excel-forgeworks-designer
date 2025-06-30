import React from 'react';

const Textarea = ({
  label,
  placeholder,
  error,
  required = false,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={`form-input resize-vertical ${error ? 'border-error focus:ring-error' : ''} ${className}`}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  );
};

export default Textarea;