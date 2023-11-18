import React from 'react';

interface PopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 text-center">
        <div className="text-red-600 mb-4">
          <svg className="mx-auto h-12 w-12 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
            <path d="M9 9l6 6m0-6l-6 6" stroke="red" strokeWidth="2" />
          </svg>
        </div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-5 text-gray-600">
          {message}
        </p>
        <div className="mt-4">
          <button 
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
