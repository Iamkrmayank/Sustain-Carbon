import React from 'react';
import { Users, TreePine, Award, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const milestones = [
  {
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: 'Founded in 2020',
    description: 'Started with a vision to make carbon trading accessible to everyone.',
  },
  {
    icon: <TreePine className="h-6 w-6 text-green-600" />,
    title: '1M+ Trees Planted',
    description: 'Through our partnerships with global reforestation projects.',
  },
  {
    icon: <Award className="h-6 w-6 text-green-600" />,
    title: 'ISO Certified',
    description: 'Achieved ISO 14064-1:2018 certification for carbon accounting.',
  },
  {
    icon: <Globe className="h-6 w-6 text-green-600" />,
    title: 'Global Impact',
    description: 'Now operating in over 50 countries worldwide.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <PageHeader
        title="About CarbonEx"
        description="We're on a mission to accelerate the world's transition to sustainable practices through innovative carbon trading solutions."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      />

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-4 text-xl text-gray-500">
            To empower individuals and organizations to take meaningful action against climate change through transparent and efficient carbon trading solutions.
          </p>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Journey</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Key milestones in our mission to create a sustainable future.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <Card
                key={milestone.title}
                icon={milestone.icon}
                title={milestone.title}
                description={milestone.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Our Impact</h2>
            <p className="mt-4 text-xl text-green-100">
              Making a measurable difference in the fight against climate change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}