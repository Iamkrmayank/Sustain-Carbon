import React from 'react';
import PageHeader from '../components/PageHeader';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Dashboard"
        description="Track your carbon footprint and manage your credits."
      />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Dashboard content will be implemented later */}
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Dashboard content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}