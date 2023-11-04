// components/Loading.tsx
"use client"
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader {
          border-top-color: #3498db;
          animation: spin 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
