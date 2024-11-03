import React from 'react';
import { TreePine, Wind, Sun, Leaf } from 'lucide-react';

interface OffsetRecommendationsProps {
  category: string;
}

const offsetProjects = [
  {
    id: 1,
    name: 'Reforestation Project',
    location: 'Amazon Rainforest',
    impact: '500 tons CO₂/year',
    price: '$15/ton',
    icon: TreePine,
    description: 'Support large-scale reforestation efforts in the Amazon rainforest.',
  },
  {
    id: 2,
    name: 'Wind Farm Development',
    location: 'Texas, USA',
    impact: '1000 tons CO₂/year',
    price: '$12/ton',
    icon: Wind,
    description: 'Invest in new wind farm development for clean energy production.',
  },
  {
    id: 3,
    name: 'Solar Power Initiative',
    location: 'Rajasthan, India',
    impact: '750 tons CO₂/year',
    price: '$10/ton',
    icon: Sun,
    description: 'Support solar power installation in rural communities.',
  },
];

export default function OffsetRecommendations({ category }: OffsetRecommendationsProps) {
  return (
    <div className="space-y-6">
      {/* Current Emissions Status */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">Your Carbon Footprint</h3>
              <p className="text-sm text-gray-500">
                Based on your current emissions, we recommend offsetting 75 tons of CO₂
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Offset Projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offsetProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-500">Impact:</span>
                      <span className="text-green-600">{project.impact}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="font-medium text-gray-500">Price:</span>
                      <span className="text-green-600">{project.price}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Purchase Offset
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Information */}
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-green-900 mb-2">
          Why Offset Your Emissions?
        </h3>
        <p className="text-sm text-green-700">
          Carbon offsetting helps neutralize your environmental impact by investing in projects
          that reduce or remove greenhouse gases from the atmosphere. Choose from verified
          projectsthat have been carefully selected for their impact and transparency.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-green-900">Verified Projects</h4>
            <p className="mt-2 text-sm text-green-700">
              All projects are verified by international standards to ensure real impact.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-green-900">Regular Updates</h4>
            <p className="mt-2 text-sm text-green-700">
              Receive updates about your project's progress and impact.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-green-900">Transparent Pricing</h4>
            <p className="mt-2 text-sm text-green-700">
              Clear pricing with detailed breakdown of costs and impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}