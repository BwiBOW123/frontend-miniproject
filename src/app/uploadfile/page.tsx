"use client"
import React, { useState } from 'react';

const UploadComponent: React.FC = () => {
  
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
        
        <button className="mb-6 px-4 py-2 border border-white rounded-full hover:bg-gray-800 focus:outline-none">
          See it in action 
          <span className="ml-2">&#x2192;</span>
        </button>

        <div className="mb-6 border-2 border-dashed border-gray-500 p-6 rounded-md">
          <div className="flex justify-center items-center h-32">
            <label className="cursor-pointer">
              {/* Replace with SVG icon for upload */}
              <div className="h-8 w-8 text-white mb-2">
                &#8597; 
              </div>
              <p className="text-center mb-2">drag & drop or click to upload</p>
              
              {/* Hidden Input Element for File Upload */}
              <input 
                type="file"
                className="hidden"
                onChange={handleFileChange}
                multiple
              />
            </label>
          </div>
        </div>

        <ul>
          {/* Generate list items from the state */}
          {files && Array.from(files).map((file, index) => (
            <li key={index} className="mb-2 flex items-center">
              {/* Replace with SVG icon for file */}
              <div className="h-6 w-6 mr-2">
                📁
              </div>
              {file.name} <span className="ml-auto">{Math.round(file.size / 1024)} KB</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default UploadComponent;
