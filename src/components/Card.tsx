import Image from "next/image"
import { randomUUID } from 'crypto';


interface props{
    image :string;
    head?:string
    des?:string
    price?:number
}

export default function Card({image,head,des,price}:props){

    const base64String = "data:image/jpeg;"+atob(image);
    return (
        <>

<div  className="bg-white drop-shadow-md hover:z-20 hover:scale-125 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
        <Image className="rounded-t-lg" src={base64String} alt="" width={400} height={400}/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{des}</p>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}฿</span>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buy
            </a>
        </div>
        
    </div>
</div>
        </>
    )
}