import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import "./globals.css"
import Category from '@/components/Catagory';
import Loading from '@/components/Loading';

const GradSchool: React.FC = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Category/>
      <Loading/>
    </div>
  );
}

export default GradSchool;
