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
        <ul>
        <li key={1} className="mb-2 flex items-center">
              <div className="h-6 w-6 mr-2">
              📁
              </div>

               asssweordasd<span className="ml-auto">{Math.round(1000 / 1024)} KB</span>
              
            </li>
        </ul>
        </div>
      </div>
  );
}

export default UploadComponent;
