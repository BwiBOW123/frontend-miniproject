"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { type } from 'os';

type Props = {
    text?:string
    Isimage: boolean;
  };

const UploadComponent: React.FC<Props> = ({Isimage,text}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [uploadImagesOnly, setUploadImagesOnly] = useState(Isimage);
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
      let selectedFiles = Array.from(event.target.files);
      if (uploadImagesOnly) {
        selectedFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
      }
      setFiles([...files, ...selectedFiles]);
      setProgress(0);
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
    <div className="text-black  flex flex-col justify-center items-center">
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
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"style={{width:'45%'}}> 45%</div>
              </div>
            </>
            
          ))}
        </ul>
        </div>
      </div>
  );
}

export default UploadComponent;
