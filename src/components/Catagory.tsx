import Image from "next/image"


export default function Category(){
    return (
        <div className=" flex justify-center">
            <div className="w-auto p-20 h-48 bg-white rounded-xl flex flex-row justify-center items-center mx-24 gap-x-20">
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <Image className="hover:scale-150" src={'web.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">Web Application</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image className="hover:scale-150" src={'terminal.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">Softwere Basic</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image className="hover:scale-150" src={'app.svg'} alt="" width={60} height={60}/>
                    <p className="font-bold text-xl">Moblid App</p>
                </div>
            </div>
        </div>
    )
}