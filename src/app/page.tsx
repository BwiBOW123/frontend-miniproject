import React from 'react';

const GradSchool: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white h-screen flex flex-col">
      
      {/* Top Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <div className="font-bold text-2xl">
          GRAD SCHOOL
        </div>
        <ul className="flex space-x-6">
          <li>HOME</li>
          <li>ABOUT US ▾</li>
          <li>COURSES</li>
          <li>CONTACT</li>
          <li>EXTERNAL</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-lg mb-1">
            GRADUATE SCHOOL OF MANAGEMENT
          </div>
          <div className="text-8xl font-bold">
            YOUR CLASSROOM
          </div>
          <button className="mt-6 px-8 py-4 bg-yellow-500 text-black font-bold rounded">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="flex justify-around items-center bg-gray-800 py-6">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            📚
          </div>
          ALL COURSES
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2">
            🖥️
          </div>
          VIRTUAL CLASS
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2">
            📅
          </div>
          REAL MEETING
        </div>
      </div>

      {/* Additional Section */}
      <div className="py-6 px-8 bg-gray-800 w-full text-center">
        <h2 className="text-2xl mb-4">
          Why choose Grad School?
        </h2>
        {/* Add more content here as per the original design */}
      </div>

    </div>
  );
}

export default GradSchool;
