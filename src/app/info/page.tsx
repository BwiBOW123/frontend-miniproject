'use client'
import Carousel from "@/components/Carousel";
import Image from "next/image";
import React from "react";
import './info.css'

const Info: React.FC = () => {
    return (
      <div className="container mx-auto px-4 mt-10">
        <div className="w-full flex flex-row gap-10 flex-wrap mx-48 ">
            <Carousel/>
            <div className="w-1/4 h-auto bg-white drop-shadow-md flex flex-col gap-8 p-8 sticky top-28">
                <h1 className="text-center text-2xl">฿ 3000</h1>
                <hr className="o"/>
                <div>
                  <h1 >แพ็กเกจ</h1>
                  <p className="text-slate-400 leading-normal mt-2 ml-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                  <h1>ดูข้อมูลแพ็กเกจ</h1>
                  <p className="text-slate-400 leading-normal mt-2 ml-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">ซื้อสิ้นค้า</button>
                </div>
            </div>
            <div className="w-2/4 h-auto flex flex-col gap-5 mt-10">
              <h1 className=" text-2xl">หัวข้อเรื่อง แบบโลโก้บริษัท Professional สไตล์</h1>
              <hr className="t"/>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi saepe quam quia unde quod itaque ducimus inventore eaque possimus.</p>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, numquam!</p>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur voluptatem qui nemo necessitatibus quidem, quibusdam quam reiciendis, odio repellat officia libero ipsa enim blanditiis provident incidunt commodi neque. Totam alias incidunt maiores. Obcaecati error rerum omnis nemo est dicta.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam incidunt fuga quia, rem adipisci quibusdam eius! Id ipsum eius officiis eos doloremque dolorum pariatur accusamus dicta nesciunt vel quibusdam tempora, adipisci quas.</p>
            </div>
          </div>

        
      </div>
    )
}

export default Info;
