import React from 'react';

const YourPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <span className="text-2xl">GRAD SCHOOL</span>
            <div className="space-x-4">
              <a href="#" className="hover:underline">HOME</a>
              <a href="#" className="hover:underline">ABOUT US</a>
              <a href="#" className="hover:underline">COURSES</a>
              <a href="#" className="hover:underline">CONTACT</a>
              <a href="#" className="hover:underline">EXTERNAL</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="bg-blue-500 text-white p-16">
          <h1 className="text-4xl mb-4">YOUR CLASSROOM</h1>
          <p className="text-xl">GRADUATE SCHOOL OF MANAGEMENT</p>
          <button className="bg-yellow-500 px-4 py-2 mt-4">DISCOVER MORE</button>
        </div>

        <div className="container mx-auto p-4 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">ALL COURSES</div>
            <div className="bg-white p-4 rounded shadow">VIRTUAL CLASS</div>
            <div className="bg-white p-4 rounded shadow">REAL MEETING</div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2>Why choose Grad School?</h2>
            {/* Add other content here */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          {/* Add footer content here */}
        </div>
      </footer>
    </div>
  );
}

export default YourPage;
