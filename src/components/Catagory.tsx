import Image from "next/image"
import Link from "next/link"


export default function Category(){
    return (
        <div className="mt-20 flex justify-center m-10">
            <div className="w-auto p-20 h-48 bg-white rounded-xl flex flex-row justify-center items-center mx-24 gap-x-20">
                <Link href={'/1'}>
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <Image className="hover:scale-150" src={'web.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">Web Application</p>
                </div>
                </Link>
                <Link href={'/2'}>
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image className="hover:scale-150" src={'terminal.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">Softwere</p>
                </div>
                </Link>
                <Link href={'/3'}>
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image className="hover:scale-150" src={'app.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">Moblid App</p>
                </div>
                </Link>
                <Link href={'/4'}>
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image className="hover:scale-150" src={'AI.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">AI</p>
                </div>
                </Link>



            </div>
        </div>
    )
}