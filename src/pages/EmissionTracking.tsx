import React, { useState } from 'react';
import { Tabs, Activity, Home, Factory, Target, LeafyGreen } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import EmissionInputForm from '../components/emissions/EmissionInputForm';
import EmissionsDashboard from '../components/emissions/EmissionsDashboard';
import EmissionTargets from '../components/emissions/EmissionTargets';
import OffsetRecommendations from '../components/emissions/OffsetRecommendations';

const categories = [
  { id: 'transportation', name: 'Transportation', icon: Activity },
  { id: 'household', name: 'Household', icon: Home },
  { id: 'industry', name: 'Industry', icon: Factory },
];

export default function EmissionTracking() {
  const [activeCategory, setActiveCategory] = useState('transportation');
  const [activeTab, setActiveTab] = useState('input');

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Carbon Emission Tracking"
        description="Monitor and reduce your carbon footprint with real-time tracking and insights."
      />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Category Selector */}
        <div className="mb-8">
          <div className="sm:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Categories">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
                      ${activeCategory === category.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-500 hover:text-gray-700'
                      }
                    `}
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {category.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('input')}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === 'input'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Data Input
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === 'dashboard'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('targets')}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === 'targets'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Targets
              </button>
              <button
                onClick={() => setActiveTab('offsets')}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === 'offsets'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Offset Recommendations
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow rounded-lg p-6">
          {activeTab === 'input' && (
            <EmissionInputForm category={activeCategory} />
          )}
          {activeTab === 'dashboard' && (
            <EmissionsDashboard category={activeCategory} />
          )}
          {activeTab === 'targets' && (
            <EmissionTargets category={activeCategory} />
          )}
          {activeTab === 'offsets' && (
            <OffsetRecommendations category={activeCategory} />
          )}
        </div>
      </div>
    </div>
  );
}