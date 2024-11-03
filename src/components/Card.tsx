import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      {icon && (
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
          {icon}
        </div>
      )}
      <div className={icon ? 'mt-6' : ''}>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}