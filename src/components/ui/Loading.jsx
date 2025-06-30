import React from 'react';

const Loading = ({ type = 'page' }) => {
  if (type === 'card') {
    return (
      <div className="card animate-pulse">
        <div className="skeleton h-48 w-full rounded-lg mb-4"></div>
        <div className="space-y-3">
          <div className="skeleton h-4 w-1/4 rounded"></div>
          <div className="skeleton h-6 w-3/4 rounded"></div>
          <div className="skeleton h-4 w-full rounded"></div>
          <div className="skeleton h-4 w-2/3 rounded"></div>
        </div>
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Loading key={index} type="card" />
        ))}
      </div>
    );
  }

  if (type === 'hero') {
    return (
      <div className="animate-pulse">
        <div className="skeleton h-96 w-full rounded-xl mb-8"></div>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="skeleton h-12 w-3/4 mx-auto rounded"></div>
          <div className="skeleton h-6 w-1/2 mx-auto rounded"></div>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="skeleton h-12 w-32 rounded"></div>
            <div className="skeleton h-12 w-32 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-pulse space-y-8">
      <div className="skeleton h-8 w-1/3 rounded"></div>
      <div className="skeleton h-64 w-full rounded-lg"></div>
      <div className="space-y-4">
        <div className="skeleton h-4 w-full rounded"></div>
        <div className="skeleton h-4 w-5/6 rounded"></div>
        <div className="skeleton h-4 w-4/6 rounded"></div>
      </div>
    </div>
  );
};

export default Loading;