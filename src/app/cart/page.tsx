import React from 'react';
import './cart.css'
import Image from 'next/image';

const ShoppingCart: React.FC = () => {
  return (
    <div className="container w-full">
      <div className='flex flex-row gap-10 mt-16 items-center'>
          <table className='ml-20 bg-white drop-shadow-md w-4/6 h-auto text-center w-full my-4 border-separate border-spacing-10 '>
              <thead >
                <tr>
                  <th>สิ้นค้า</th>
                  <th>จำนวน</th>
                  <th>ราคา</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div className='flex items-center'><Image className=' mr-8' src={'/image4.jpg'} alt='...' width={150} height={100}/>Softwere สำหรับธุรกิจ </div></td>
                  <td>1</td>
                  <td className='flex items-center justify-items-center mt-8'>1500B 
                    <button type="button" className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <Image src={'/x.svg'} alt='' className='inline ' width={30} height={30}/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className='flex items-center'><Image className=' mr-8' src={'/image5.jpg'} alt='...' width={150} height={100}/>Softwere สำหรับธุรกิจ </div></td>
                  <td>1</td>
                  <td className='flex items-center justify-items-center mt-8'>1500B 
                    <button type="button" className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <Image src={'/x.svg'} alt='' className='inline ' width={30} height={30}/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><div className='flex items-center'><Image className=' mr-8' src={'/image6.jpg'} alt='...' width={150} height={100}/>Softwere สำหรับ Cloud </div></td>
                  <td>1</td>
                  <td className='flex items-center justify-items-center mt-8'>1000B 
                    <button type="button" className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <Image src={'/x.svg'} alt='' className='inline ' width={30} height={30}/>
                    </button>
                  </td>
                </tr>
            
              </tbody>
              </table>
        <div className='w-3/6'></div>
        <div className="w-1/3 h-auto bg-white drop-shadow-md flex flex-col gap-8 p-8 fixed top-48 right-10">
            <h1 className="text-center text-2xl">ราคารวมทั้งหมด</h1>
            <hr className="o"/>
            <div className='flex justify-between'>
              <h1 >ราคา</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">4000B</p>
            </div>
            <div className='flex justify-between'>
              <h1>VAT</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">50B</p>
            </div>
            <div className='flex justify-between'>
              <h1>ราคารวม</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">4050B</p>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">ชำระสิ้นค้า</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
