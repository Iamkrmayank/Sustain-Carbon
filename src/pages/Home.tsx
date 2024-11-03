import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, 
  Leaf, 
  BarChart3, 
  ShoppingCart, 
  Award,
  ArrowRight
} from 'lucide-react';

const stats = [
  { label: 'Carbon Credits Traded', value: '2.5M+', unit: 'tons' },
  { label: 'Emissions Reduced', value: '1.8M+', unit: 'tons CO₂' },
  { label: 'Active Users', value: '50K+', unit: 'worldwide' },
  { label: 'Green Projects', value: '500+', unit: 'funded' },
];

const features = [
  {
    icon: <LineChart className="h-6 w-6 text-green-600" />,
    title: 'Carbon Tracking',
    description: 'Monitor and analyze your carbon footprint with real-time tracking and insights.',
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
    title: 'Marketplace',
    description: 'Buy and sell verified carbon credits from sustainable projects worldwide.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
    title: 'Analytics',
    description: 'Detailed analytics and reporting for informed sustainability decisions.',
  },
  {
    icon: <Award className="h-6 w-6 text-green-600" />,
    title: 'Incentive Programs',
    description: 'Earn rewards for your commitment to reducing carbon emissions.',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="Nature background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Sustainable Choices for a Carbon-Free World
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Join the global movement towards sustainability. Track, trade, and reduce carbon emissions while supporting green initiatives worldwide.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-base text-green-100">{stat.label}</p>
                <p className="text-sm text-green-200">{stat.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A complete platform for carbon management
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Everything you need to track, trade, and reduce your carbon footprint in one place.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="grid gap-8 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                      {feature.icon}
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take action?</span>
            <span className="block text-green-200">Start your sustainability journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}