"use client"
import React,{ useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import {useSession} from "next-auth/react"
import { loadStripe } from '@stripe/stripe-js';
import Loading from '@/components/Loading';

interface Data {
  ID: number;
  ProductID: number;
  TotalCost: number;
  Quantity : string;
  ProductName : string;
  ProductDesc : string;
  ProductPrice : number;
  ProductImage : string;
  ProductPayment : string;
}

const ShoppingCart: React.FC = () => {
  const [datas, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [m_id, setM_id] = useState<number>(0);
  const {data:session} = useSession()
  const [loading, setLoading] = useState(true);
  const email:any = session?.user?.email
  useEffect(()=>{
    const fetchData=async()=>{
      if(session == null){
        window.location.href = '/';
      }
      await axios.get<Data[]>('http://54.251.12.80:8000/CartProductEmail?id='+email)
      .then(response => {
        setData(response.data)
        console.log(response.data)
        response.data.forEach((d)=>{
          setTotal(d.TotalCost)
        })
      })
      .catch(error => {
        setError('Error fetching data');
        console.error(error);
      }).finally(()=>{
          setLoading(false)
      })}

      fetchData()
  },[total])

  



  const handleDelete = async (itemId:number) => {
    // Filter out the item with the specified ID
    const updatedData = datas.filter(item => item.ID !== itemId);
    await axios.delete('http://54.251.12.80:8000/DeleteProduct?id='+itemId)
    setTotal(0)
    setData(updatedData);
  };


   function x(){
    return datas.map((d,index)=>{
      const base64String = "data:image/jpeg;"+d.ProductImage;
      return (
      <tr id={index.toString()}>
      <td><div className='flex items-center'><Image className=' mr-8' src={base64String} alt='...' width={100} height={100}/>{d.ProductName}</div></td>
      <td>{d.Quantity}</td>
      <td className='text-center'>{d.ProductPrice}B

      <button onClick={()=>handleDelete(d.ID)} type="button" className="px-4 inline ml-6 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
        X
        </button>
        <a href={d.ProductPayment} className=" inline ml-6 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
        Buy
        </a>
      </td>
      </tr>
    )})
  }

  return (
    <div className='container w-full min-h-screen bg-white'>
     <div>
      <Navbar/>
      <div className='flex flex-row gap-10 mt-16 items-center '>
          <table className=' ml-20 bg-white drop-shadow-md w-4/6 h-auto text-center w-full my-4 border-separate border-spacing-10 '>
              <thead >
                <tr>
                  <th>สิ้นค้า</th>
                  <th>จำนวน</th>
                  <th>ราคา</th>
                </tr>
              </thead>
              <tbody>
                {datas == null?
                <>
                  <div></div>
                </>
                :
                <>
                  {x()}
                </>
                }
              </tbody>
              </table>
        <div className='w-4/6'></div>
        <div className="w-1/3 h-auto bg-white drop-shadow-md flex flex-col gap-8 p-8 fixed top-48 right-10">
            <h1 className="text-center text-2xl">ราคารวมทั้งหมด</h1>
            <hr className="o"/>
            <div className='flex justify-between'>
              <h1 >ราคา</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">{total}B</p>
            </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default ShoppingCart;
