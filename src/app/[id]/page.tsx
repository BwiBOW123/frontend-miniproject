
'use client'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar';
import React from 'react';
import "../globals.css"
import Category from '@/components/Catagory';
import Loading from '@/components/Loading';
import Card from '@/components/Card';
import axios from 'axios';

const getData = async(url:string)=>{
  try {
    const res = await axios.get(url)
    const data = await res.data
    return await data
  } catch (error) {
    return []
  }
}


const GradSchool = async () => {
  const params = useParams()
  const d:any = await getData('http://127.0.0.1:8000/productimagesByCat?id='+params.id)
  let show;
  if(d == null){
    show = <Loading/>
  }else{
    show = d.map((data:any)=>{return <Card image={data.Data} head={data.Name} price={data.Price} des={data.Description}/>})
  }
  return (
    <div className='container'>
      <Navbar/>
      <div className='my-20 container flex flex-col gap-10 justify-center items-center flex-wrap my-28'>
          <h1 className='text-white text-4xl font-bold '>ยินดีต้อนรับเข้าสู่ Software Ecommerce</h1>
          <h1 className='text-white text-lg font-bold'>เรามีซอฟต์แวร์เพื่อเพิ่มประสิทธิภาพการทำงานในหลายๆด้าน</h1>
          
      </div>
      <Category/>
      <div className='bg-white p-16'>
      <div className=' my-10 container flex gap-10 justify-center flex-wrap'>
        {show}
      </div>
      </div>
    </div>
  );
}

export default GradSchool;
