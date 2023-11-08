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
                  <th>ราคา</th>
                  <th>จำนวน</th>
                  <th>ราคารวม</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div className='flex items-center'><Image className=' mr-8' src={'/maxresdefault.jpg'} alt='...' width={200} height={100}/>Item1Item1Item1Item1 </div></td>
                  <td>2000B</td>
                  <td>1</td>
                  <td>2000B <button type="button" className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                      <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                    </svg>
                  <span className="sr-only">Icon description</span></button></td>
                </tr>
                <tr>
                  <td><div className='flex items-center'><Image className=' mr-8' src={'/maxresdefault.jpg'} alt='...' width={200} height={100}/>Item1Item1Item1Item1 </div></td>
                  <td>2000B</td>
                  <td>1</td>
                  <td>2000B <button type="button" className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                      <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                    </svg>
                  <span className="sr-only">Icon description</span></button></td>
                </tr>
                <tr>
                  <td><div className='flex items-center'><Image className=' mr-8' src={'/maxresdefault.jpg'} alt='...' width={200} height={100}/>Item1Item1Item1Item1 </div></td>
                  <td>2000B</td>
                  <td>1</td>
                  <td>2000B <button type="button" className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                      <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                    </svg>
                  <span className="sr-only">Icon description</span></button></td>
                </tr>
            
              </tbody>
              </table>
        <div className='w-3/6'></div>
        <div className="w-1/3 h-auto bg-white drop-shadow-md flex flex-col gap-8 p-8 fixed top-48 right-10">
            <h1 className="text-center text-2xl">ราคารวมทั้งหมด</h1>
            <hr className="o"/>
            <div className='flex justify-between'>
              <h1 >ราคา</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">200B</p>
            </div>
            <div className='flex justify-between'>
              <h1>VAT</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">50B</p>
            </div>
            <div className='flex justify-between'>
              <h1>ราคารวม</h1>
              <p className="text-slate-400 leading-normal mt-2 ml-5">250B</p>
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
