"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import './post.css'
import UploadComponent from '@/components/Upload';
import Link from "next/link"
import axios from 'axios';
import {useSession} from "next-auth/react"
import { Session } from 'inspector';
import Navbar from '@/components/Navbar';
import Radio from '@/components/Radio'
interface FormState {
    name: string;
    description: string;
    price: number;
    cart_id: number;
    category_id: number;
    member_id:number
    url_download:string
}
const Post:React.FC = () => {

    const [files, setFiles] = useState<File[]>([]);
    const [progress, setProgress] = useState(0);
    const [dragOver, setDragOver] = useState(false);
    const [uploadImagesOnly, setUploadImagesOnly] = useState(true);
  
  
    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
      });
  };
    const uploadFile = (product_id:number) => {
      if (files) {
        try {
            files.map( async(data)=>{
              const base64 = await fileToBase64(data);
              const dataToSend = {
                  'product_id': product_id,
                  'data': base64
              };
    
              const response = await axios.post('http://127.0.0.1:8000/Uploadimage', dataToSend);
              console.log('Response:', response.data);
            })

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
  
    

    //Session
    const {data:session} = useSession()
    const x = session?.user?.email
    const [formData, setFormData] = useState<FormState>({
        "name": '',
        "description": '',
        "price": 0.00,
        "cart_id": 1,
        "category_id":1,
        "member_id":1,
        "url_download":'ฟหกฟหก',
    }
        );
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { id, value } = e.target;
            if(id === 'price' ){
                setFormData(prevState => ({...prevState,[id]: parseFloat(value),}));
            }else{
                setFormData(prevState => ({...prevState,[id]: value,}));
            }
            
        };

        const handleChange1 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const { id, value } = e.target;
                setFormData(prevState => ({...prevState,[id]: value,}));};

        const handleSubmit = async (e: FormEvent) => {
            e.preventDefault();
            try {
                const res = await axios.get('http://localhost:8000/users?email='+session?.user?.email)
                formData.member_id = res.data.ID
                formData.category_id = parseInt(selectedValue)
                const response = await axios.post('http://127.0.0.1:8000/products', formData);
                await uploadFile(response.data.ID)
                // Handle successful submission here, like redirecting to another page
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle errors here, such as displaying a message to the user
            }
    };


    const [selectedValue, setSelectedValue] = useState('');

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setSelectedValue(id);
    };


    return (
      <div className='container bg-white'>
        <Navbar/>
<form className=' flex flex-col items-center '>
                    <div  className='bg-white drop-shadow-md w-2/4 p-10 mt-10 mb-10'>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">หัวเรื่อง</label>
                            <input id="name" onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text" />
                        </div>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">คำอธิบาย</label>
                            <textarea onChange={handleChange1} id="description" rows={6}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">ราคา</label>
                            <input id="price" onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text"  />
                        </div>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">URL DOWNLOAD</label>
                            <input id="url_download" onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text"  />
                        </div>
                        <div className='mb-6'>
                          <label className="text-xl text-black block mb-2 text-sm font-medium">เลือกหมวดหมู่</label>
                          <div className=' flex gap-6 mt-4'>
                          <Radio 
                id="1"
                name="radio-group"
                value="Web Application"
                checked={selectedValue === 'Option 1'}
                onChange={handleChange3}
            />
            <Radio 
                id="2"
                name="radio-group"
                value="Mobile Application"
                checked={selectedValue === 'Option 2'}
                onChange={handleChange3}
              
            />
            <Radio 
                id="3"
                name="radio-group"
                value="Desktop Application"
                checked={selectedValue === 'Option 2'}
                onChange={handleChange3}
              
            />
            <Radio 
                id="4"
                name="radio-group"
                value="AI"
                checked={selectedValue === 'Option 2'}
                onChange={handleChange3}
              
            />
                          </div>
          
                        </div>



                        
                    </div>
                    <div  className='bg-white drop-shadow-md w-2/4 p-10 mt-10'>
                        <div className='mb-6'>
                        <div id='Upload'  className="text-black  flex flex-col justify-center items-center">
      <div className="w-4/5">
        <div className={`mb-6 border-2 ${dragOver ? 'border-blue-500' : 'border-gray-500'} border-dashed p-6 rounded-md`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
          <div className="flex justify-center items-center h-32">
            <label className="cursor-pointer">
              <p className="text-center mb-2">Drop Image for product 🖼️</p>
              
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
            <li  className="mb-2 flex items-center">
              <div  className="h-6 w-6 mr-2">
                {getFileIcon(file)}
              </div>
              {file.name} <span  className="ml-auto">{Math.round(file.size / 1024)} KB</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
                        </div>
                    </div>
                    <div className='w-2/4 p-10 mt-10'>
                        <button onClick={handleSubmit} type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                    </div>
        </form>
      </div>
        
    )
}

export default Post