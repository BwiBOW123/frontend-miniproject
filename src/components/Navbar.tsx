'use client'
import Image from "next/image"
import Link from "next/link"
import {getServerSession} from 'next-auth'
import { authOptions } from "@/lib/auth"
import {LoginBTN,LogoutBTN} from '@/components/buttonSign'
import {useSession} from "next-auth/react"

export default function Navbar(){
    const {data:session} = useSession()

    return (
        <div className=" sticky top-0 z-50 w-auto h-20 bg-custom-blue flex flex-row justify-between items-center text-center px-6 text-xl text-white font-bold">
            <div className="">
                <Image className="inline" src={'icon1.svg'} alt="" width={50} height={50}/>
                <h1 className="inline ml-2">Software Ecommerce</h1>
            </div>
            <div>
            <ul className="flex flex-row gap-x-5 ">
                
                <Link className="hover:text-red-500" href={'/'}>หน้าหลัก</Link>
                { session ?
                    <>
                        {session.user?.email}
                        <LogoutBTN/>
                    </>
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