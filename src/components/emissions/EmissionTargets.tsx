import React, { useState } from 'react';
import { Target, TrendingDown, CheckCircle } from 'lucide-react';

interface EmissionTargetsProps {
  category: string;
}

export default function EmissionTargets({ category }: EmissionTargetsProps) {
  const [targets, setTargets] = useState([
    {
      id: 1,
      name: 'Annual Reduction',
      current: 900,
      target: 765,
      deadline: '2024-12-31',
      progress: 65,
    },
    {
      id: 2,
      name: 'Monthly Cap',
      current: 75,
      target: 60,
      deadline: '2024-06-30',
      progress: 45,
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Current Targets */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Targets</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {targets.map((target) => (
            <div
              key={target.id}
              className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      {target.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Target: {target.target} tons CO₂
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                          {target.progress}% Complete
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-green-600">
                          {target.current} / {target.target} tons
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                      <div
                        style={{ width: `${target.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Deadline: {new Date(target.deadline).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Set New Target */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Set New Target</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="targetName" className="block text-sm font-medium text-gray-700">
                Target Name
              </label>
              <input
                type="text"
                name="targetName"
                id="targetName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">
                Target Amount (tons CO₂)
              </label>
              <input
                type="number"
                name="targetAmount"
                id="targetAmount"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
              >
                <option value="overall">Overall</option>
                <option value="transportation">Transportation</option>
                <option value="household">Household</option>
                <option value="industry">Industry</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Set Target
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}