"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UploadComponent: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  useEffect(() => {
    // Perform any actions here when files are added, e.g., validate files or set error messages.
  }, [files]);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent); // Check the structure of the progress event.
          const total = progressEvent.total;
          if (total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / total);
            setProgress(percentCompleted);
          }
        }
      });
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error uploading file:', error.response?.data);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const updatedFilesArray = [
        ...(files ? Array.from(files) : []), // Convert the existing FileList to an array, if it exists
        ...Array.from(event.target.files), // Convert the new FileList to an array
      ];
  
      // The state will now be an array of Files instead of a FileList.
      setFiles(updatedFilesArray);
      //uploadFile(files[0]);
      //setProgress(0);
    }
  }
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    setDragOver(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    if (event.dataTransfer.files) {
      const newFiles = Array.from(event.dataTransfer.files);
      const updatedFilesArray = [
        ...(files || []), // Use the existing files array
        ...newFiles, // Add the new files
      ];
      setFiles(updatedFilesArray);
      event.dataTransfer.clearData();
    }
  };

  const getFileIcon = (file: File) => {
    const fileType = file.type;
    const fileName = file.name.toLowerCase();
    
    if (fileType.includes('image')) {
      return '🖼️'; // Image
    } else if (fileName.endsWith('.csv')) {
      return '📊'; // CSV
    } else if (fileName.endsWith('.zip')) {
      return '🗜️'; // ZIP
    } else if (fileType.includes('video')) {
      return '🎥'; // Video
    } else if (fileName.endsWith('.txt')) {
      return '📄'; // Text
    } else if (fileName.endsWith('.pdf')) {
      return '📕'; // PDF
    } else if (fileName.endsWith('.js') || fileName.endsWith('.jsx') || fileName.endsWith('.ts') || fileName.endsWith('.tsx') || fileName.endsWith('.html') || fileName.endsWith('.css')) {
      return '💻'; // Code
    } else {
      return '📁'; // Default file icon
    }
  };

  

  return (
    <div className="bg-white text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-2/6 mt-10">
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Download</button>
        <ul className='text-black bg-white drop-shadow-md p-10 mt-5'>
        <li key={1} className="mb-4 flex items-center ">

              <div className="h-6 w-6 mr-2">
                📁
              </div>
              {/* Display file name and size */}
              Helloworld1 <span className="ml-auto">{Math.round(2048 / 1024)} KB</span>
      
            </li>
        <li key={1} className="mb-4 flex items-center">

              <div className="h-6 w-6 mr-2">
                📁
              </div>
              {/* Display file name and size */}
              Helloworld1 <span className="ml-auto">{Math.round(2048 / 1024)} KB</span>
      
            </li>
        <li key={1} className="mb-4 flex items-center">

              <div className="h-6 w-6 mr-2">
                📁
              </div>
              {/* Display file name and size */}
              Helloworld1 <span className="ml-auto">{Math.round(2048 / 1024)} KB</span>
      
            </li>
        </ul>
        </div>
      </div>
  );
}

export default UploadComponent;
