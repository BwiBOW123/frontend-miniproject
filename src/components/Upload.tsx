"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setFips } from 'crypto';


type Props = {
    text?:string
    Isimage: boolean;
  };


  
const UploadComponent: React.FC<Props> = ({Isimage,text}) => {

  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [uploadImagesOnly, setUploadImagesOnly] = useState(Isimage);


  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};
  const uploadFile = async () => {
    if (files) {
      try {
          const base64 = await fileToBase64(files[0]);
          const dataToSend = {
              'product_id': 4,
              'data': base64
          };

          const response = await axios.post('http://127.0.0.1:8000/Uploadfile', dataToSend);
          console.log('Response:', response.data);
      } catch (error) {
          console.error('Error:', error);
      }
  }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
        setFiles(Array.from(file));
        setProgress(0);
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
      let droppedFiles = Array.from(event.dataTransfer.files);
      if (uploadImagesOnly) {
        droppedFiles = droppedFiles.filter(file => file.type.startsWith('image/'));
      }
      setFiles([...files, ...droppedFiles]);
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
    <div id='Upload'  className="text-black  flex flex-col justify-center items-center">
      <div className="w-4/5">
        <div className={`mb-6 border-2 ${dragOver ? 'border-blue-500' : 'border-gray-500'} border-dashed p-6 rounded-md`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
          <div className="flex justify-center items-center h-32">
            <label className="cursor-pointer">
              {/* Replace with SVG icon for upload */}
              <p className="text-center mb-2">{text}</p>
              
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
        <button onClick={uploadFile}>Upload</button>
        <ul>
          {files && Array.from(files).map((file, index) => (
            <>
            <li key={index} className="mb-2 flex items-center">
              {/* SVG icon for file or any other markup */}
              <div className="h-6 w-6 mr-2">
                {getFileIcon(file)}
              </div>
              {/* Display file name and size */}
              {file.name} <span className="ml-auto">{Math.round(file.size / 1024)} KB</span>
            </li>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"style={{width:progress}}> {progress}</div>
            </div>
            </>
            
          ))}
        </ul>
        </div>
      </div>
  );
}

export default UploadComponent;
