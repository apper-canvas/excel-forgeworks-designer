import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    about: 'About Us',
    products: 'Products',
    capabilities: 'Production Capabilities',
    quality: 'Quality Standards',
    contact: 'Contact Us',
    quote: 'Request Quote'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:text-secondary transition-colors">
        <ApperIcon name="Home" className="h-4 w-4" />
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbNameMap[name] || name;

        return (
          <React.Fragment key={name}>
            <ApperIcon name="ChevronRight" className="h-4 w-4 text-gray-400" />
            {isLast ? (
              <span className="text-primary font-medium">{displayName}</span>
            ) : (
              <Link to={routeTo} className="hover:text-secondary transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;