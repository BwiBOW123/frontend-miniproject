"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import './post.css'
import UploadComponent from '@/components/Upload';

interface FormState {
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
    website: string;
    visitors: number;
    email: string;
    password: string;
    confirmPassword: string;}



const Post:React.FC = () => {

    const [formData, setFormData] = useState<FormState>({
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        website: '',
        visitors: 0,
        email: '',
        password: '',
        confirmPassword: '',});
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({...prevState,[id]: value,}));};
        const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here, such as validation and sending to an API
        console.log(formData);};


    return (
        <form onSubmit={handleSubmit} className='container flex flex-col items-center'>
                    <div  className='bg-white drop-shadow-md w-2/4 p-10 mt-10 mb-10'>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">หัวเรื่อง</label>
                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text" id="firstName" value={formData.firstName} onChange={handleChange}/>
                        </div>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">คำอธิบาย</label>
                            <textarea id="message" rows={6}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div className='mb-6'>
                            <label className="text-xl text-black block mb-2 text-sm font-medium">ราคา</label>
                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text" id="firstName" value={formData.firstName} onChange={handleChange}/>
                        </div>
                        
                    </div>
                    <div  className='bg-white drop-shadow-md w-2/4 p-10 mt-10'>
                        <div className='mb-6'>
                            <UploadComponent Isimage={true} text='Drag and Drop Image 🖼️'/>
                        </div>
                    </div>
                    <div  className='bg-white drop-shadow-md w-2/4 p-10 mt-10'>
                        <div className='mb-6'>
                            <UploadComponent Isimage={false} text='Drag and Drop File 📁'/>
                        </div>
                    </div>
                    <div className='w-2/4 p-10 mt-10'>
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                    </div>
        </form>
    )
}

export default Post