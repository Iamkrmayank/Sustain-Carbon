import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CarbonEx</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:items-center sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-3 py-2 text-gray-900 hover:text-green-600 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="inline-flex items-center px-3 py-2 text-gray-900 hover:text-green-600 text-sm font-medium">
                About
              </Link>
              <Link to="/marketplace" className="inline-flex items-center px-3 py-2 text-gray-900 hover:text-green-600 text-sm font-medium">
                Marketplace
              </Link>
              <Link to="/tracking" className="inline-flex items-center px-3 py-2 text-gray-900 hover:text-green-600 text-sm font-medium">
                Track Emissions
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/register" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
              Get Started
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center px-3 py-2 text-gray-900 hover:text-green-600 text-sm font-medium">
              Login
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              About
            </Link>
            <Link to="/marketplace" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Marketplace
            </Link>
            <Link to="/tracking" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Track Emissions
            </Link>
            <Link to="/register" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Get Started
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}