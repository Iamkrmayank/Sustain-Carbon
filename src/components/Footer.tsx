import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CarbonEx</span>
            </div>
            <p className="text-gray-600 text-sm">
              Empowering sustainable choices for a carbon-free world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/marketplace" className="text-gray-600 hover:text-green-600 text-sm">
                  Carbon Credits
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-gray-600 hover:text-green-600 text-sm">
                  Emission Tracking
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-green-600 text-sm">
                  Green Projects
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-gray-600 hover:text-green-600 text-sm">
                  NFT Certificates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/learn" className="text-gray-600 hover:text-green-600 text-sm">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-green-600 text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-green-600 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-green-600 text-sm">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-600 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-green-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-green-600 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} CarbonEx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}