import Image from "next/image"
import Link from "next/link"


export default function Navbar(){
    return (
        <div className="sticky top-0 z-50 w-auto h-20 bg-custom-blue flex flex-row justify-between items-center text-center px-6 text-xl text-white font-bold">
            <div className="">
                <Image className="inline" src={'icon1.svg'} alt="" width={50} height={50}/>
                <h1 className="inline ml-2">LOGO</h1>
            </div>
            <div>
            <ul className="flex flex-row gap-x-5 ">
                
                <Link className="hover:text-red-500" href={''}>Home</Link>
                <Link className="hover:text-red-500" href={''}>Page1</Link>
                <Link className="hover:text-red-500" href={''}>Page2</Link>
                <Link className="hover:text-red-500" href={''}>Page3</Link>
                <Link className="hover:text-red-500" href={''}>เข้าสู่ระบบ</Link>
            </ul>
            </div>
        </div>
    )
}