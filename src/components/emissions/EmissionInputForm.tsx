import React, { useState } from 'react';
import { Calendar, Clock, Info } from 'lucide-react';

interface EmissionInputFormProps {
  category: string;
}

export default function EmissionInputForm({ category }: EmissionInputFormProps) {
  const [formData, setFormData] = useState({
    date: '',
    activity: '',
    amount: '',
    unit: 'kg',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Emission data:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getActivityOptions = () => {
    switch (category) {
      case 'transportation':
        return ['Car Travel', 'Air Travel', 'Public Transport', 'Other'];
      case 'household':
        return ['Electricity', 'Natural Gas', 'Water Usage', 'Waste'];
      case 'industry':
        return ['Manufacturing', 'Logistics', 'Office Operations', 'Other'];
      default:
        return [];
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700">
            Activity Type
          </label>
          <select
            name="activity"
            id="activity"
            value={formData.activity}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            required
          >
            <option value="">Select an activity</option>
            {getActivityOptions().map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="block w-full pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="0.00"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                name="unit"
                id="unit"
                value={formData.unit}
                onChange={handleInputChange}
                className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="kg">kg CO₂</option>
                <option value="tons">tons CO₂</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <div className="mt-1">
            <textarea
              name="notes"
              id="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              className="block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Add any additional details..."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Clear
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Save Entry
        </button>
      </div>
    </form>
  );
}