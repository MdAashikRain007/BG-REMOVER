import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;