import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative">
      {image && (
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 mix-blend-multiply" />
        </div>
      )}
      <div className={`relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ${image ? 'text-white' : 'text-gray-900'}`}>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className={`mt-6 max-w-3xl text-xl ${image ? 'text-gray-300' : 'text-gray-500'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}