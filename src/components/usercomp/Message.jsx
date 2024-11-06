import React from 'react';

export const showError = (error) => {
  return (
    error && (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg" role="alert">
        <strong className="font-bold text-sm mr-4">Error!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{error}</span>
      </div>
    )
  );
};

// Show success message
export const showSuccess = (message, success) => {
  return (
    success && (
      <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
        <strong className="font-bold text-sm mr-4">Success!</strong>
        <span className="block text-sm sm:inline max-sm:mt-2">{message}</span>
      </div>
    )
  );
};
