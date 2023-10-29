import React from 'react';

const RegistrationForm: React.FC = () => {
  return (
    <div className="bg-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">Registration Form</h1>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="First name" className="p-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Last name" className="p-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="p-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Password" className="p-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-400" />
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
