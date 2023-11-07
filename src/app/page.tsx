import Navbar from '@/components/Navbar';
import React from 'react';
import "./globals.css"
import Category from '@/components/Catagory';
import Loading from '@/components/Loading';
import Card from '@/components/Card';


const GradSchool: React.FC = () => {
  return (
    <div className='container'>
      <Category/>
      
      <div className='my-20 container flex gap-10 justify-center flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Loading/>
    </div>
  );
}

export default GradSchool;
