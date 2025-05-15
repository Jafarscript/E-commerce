/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { allProductsData, getProductById } from '../data';

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter(x => x);

  const formatBreadcrumbName = (name) => {
    if (allProductsData.some(p => p.id === name)) {
        const product = getProductById(name);
        return product ? product.name : name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };
  
  if (pathnames.length === 0 && location.pathname === '/') return null; // No breadcrumbs on homepage itself

  return (
    <div className="container max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
      <Link to="/" className="hover:text-gray-700">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
            <span className="mx-1">/</span>
            {isLast ? (
              <span className="text-gray-900">{formatBreadcrumbName(name)}</span>
            ) : (
              <Link to={routeTo} className="hover:text-gray-700">{formatBreadcrumbName(name)}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs