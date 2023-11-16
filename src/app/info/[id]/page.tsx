'use client'
import Carousel from "@/components/Carousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import './info.css'
import Navbar from "@/components/Navbar";
import axios from "axios";
import Loading from "@/components/Loading";
import {useSession} from "next-auth/react"
import { useParams } from 'next/navigation'
import Link from "next/link"
type CartProduct = {
  cart_id?: number;
  product_id: number;
  quantity: number;
  email: string;
};



const Info: React.FC = () => {
    const {data:session} = useSession()
    const params = useParams()
    const [m_id, setM_id] = useState<number>(1);
    const [data,SetData] = useState<any>(null)
    const [CartProduct, setCartProduct] = useState<CartProduct>({
      cart_id: 1,
      product_id: 9,
      quantity: 1,
      email:'',
    });
    useEffect(()=>{
        const getData =async ()=>{
            await axios.get('http://localhost:8000/productimagesById?id='+params.id).then((res)=>{
                const data = res.data
                console.log(data)
                SetData(data)
            })
        }
        getData()
    },[])



    const handlerCreateCart = async () => {
      CartProduct.product_id = data[0].ID
      CartProduct.cart_id = m_id
      const mail:any = await session?.user?.email
      CartProduct.email = mail
      try {
        const response = await axios.post('http://127.0.0.1:8000/CartProduct', CartProduct);
        console.log('Member created:', response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }

    return (
      <>
      <Navbar/>
      <div className="container bg-white overflow-x-hidden">
        {data !=null?
          <>
            <div className="w-full flex flex-row gap-10 flex-wrap mx-48 ">
            <Carousel data={data}/>
            <div className="w-1/4 h-48 bg-white drop-shadow-md flex flex-col gap-8 p-8 sticky top-28">
                <h1 className="text-center text-2xl">฿ {data[0].Price}</h1>
                <hr className="o"/>
                <div>
                  <Link href={'/cart'}>
                <button onClick={()=>handlerCreateCart()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">ซื้อสิ้นค้า</button>
                  </Link>
                </div>
            </div>
            <div className="w-2/4 h-auto flex flex-col gap-5 mt-10 mb-20">
              <h1 className=" text-2xl">{data[0].Name}</h1>
              <hr className="t"/>
              <p className="">{data[0].Description}</p>
             
            </div>
          </div>
          </>
          :
          <>
            <Loading/>
          </>
        }
        
      </div>
      </>
      
    )
}

export default Info;
