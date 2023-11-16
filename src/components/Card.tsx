"use client"
import Image from "next/image"
import { randomUUID } from 'crypto';
import react,{useEffect, useState} from 'react'
import axios from "axios";
import {useSession} from "next-auth/react"
import Link from "next/link"
interface props{
    id :number;
    image :string;
    head?:string
    des?:string
    price?:number
    cart_id?:number
    product_id:number
    quantity?:number
}

type CartProduct = {
    cart_id?: number;
    product_id: number;
    quantity: number;
    email: string;
  };

 export default  function Card({id,image,head,des,price,product_id}:props){
  const [data, setData] = useState(null);
  const {data:session} = useSession()
  const [m_id, setM_id] = useState<number>(1);
  const [CartProduct, setCartProduct] = useState<CartProduct>({
        cart_id: 1,
        product_id: 9,
        quantity: 1,
        email:'',
      });
      
      const handlerCreateCart = async () => {
        CartProduct.product_id = product_id
        CartProduct.cart_id = m_id
        const mail:any = await session?.user?.email
        CartProduct.email = mail
        try {
          const response = await axios.post('http://127.0.0.1:8000/CartProduct', CartProduct);
          console.log('Member created:', response.data);
          // Reset the form or handle the response
        } catch (error) {
          console.error('There was an error!', error);
        }
      }


    const base64String = "data:image/jpeg;"+atob(image);
    return (
        <>
        <Link href={'/info/'+id}>
        <div  className="bg-white drop-shadow-md hover:z-20 hover:scale-125 min-w-fit min-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <>
        <Image className="rounded-t-lg h-96" src={base64String} alt="" width={400} height={400}/>
    </>
    <div className="p-5">
        <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head}</h5>
        </>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}฿</span>
            <Link href={'/cart'}>
            <button onClick={()=>handlerCreateCart()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            เลือกใส่ตะกร้า
            </button>
            </Link>
        </div>
        
    </div>
</div>
        </Link>

        </>
    )
}