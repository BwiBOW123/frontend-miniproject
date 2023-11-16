'use client'
import Image from "next/image"
import Link from "next/link"
import {getServerSession} from 'next-auth'
import { authOptions } from "@/lib/auth"
import {LoginBTN,LogoutBTN} from '@/components/buttonSign'
import {useSession} from "next-auth/react"
import react,{useState} from 'react'
import { Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';


export default function Navbar(){
    const {data:session} = useSession()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" sticky top-0 z-50 w-auto h-20 bg-custom-blue flex flex-row justify-between content-center items-center text-center px-6 text-xl text-white font-bold">
            <div className="">
                <h1 className="inline ml-2">Software Ecommerce</h1>
            </div>
            <div>
            <ul className="flex flex-row gap-x-5 ">
                
                <Link className=" hover:text-red-500 text-center" href={'/'}>หน้าหลัก</Link>
                <Link className="text-white hover:text-red-500" href={'/cart'}>ตะกร้าสินค้า</Link>

                { session ?
                    <div className="hover:text-red-500">
                <Dropdown label="Developer" inline>
                <Dropdown.Header>
                    <span className="block truncate text-sm font-medium text-white">{session.user?.email}</span>
                </Dropdown.Header>
                <Dropdown.Item className="text-white" icon={HiCog}><Link className="text-white hover:text-red-500" href={'/Postshop'}>POST</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className='text-white hover:text-red-500' icon={HiLogout}><LogoutBTN/></Dropdown.Item>
                </Dropdown>
                    </div>
                    :
                    <>
                        <LoginBTN/>
                    </>
                }
            </ul>
            </div>
        </div>
    )
}