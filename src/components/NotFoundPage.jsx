import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = ({ message = "Your visited page not found. You may go home page." }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center min-h-[calc(100vh-300px)] flex flex-col justify-center items-center">
        {/* Breadcrumbs handled globally, might be empty or just Home / 404 Error */}
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">404 Not Found</h1>
      <p className="text-gray-600 mb-10">{message}</p>
      <Link to="/" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition text-sm font-medium">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage