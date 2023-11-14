
import LineChartComponent from '@/components/LineChartComponent'
import Link from "next/link"
import './dashborad.css'
import Navbar from '@/components/Navbar'

const Dashborad: React.FC = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const dataset = [65, 59, 80, 81, 56, 55, 40];
    return (
        <>
        <Navbar/>
        <div className='container p-20 flex gap-16 flex-wrap justify-center'>
            
            <Link href={'/Postshop'}>
                <button className="w-full text-2xl drop-shadow-md w-full mx-32 w-2/3 h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ โพสต์โปรแกรมขาย</button>
            </Link>
            <LineChartComponent  labels={labels} dataset={dataset} />
            <div className='flex flex-col gap-10'>
                <div className='bg-white drop-shadow-md w-52 h-36 p-8 flex flex-col gap-3 '>
                    <h1 className='text-xl'>จำนวนที่ขายได้</h1>
                    <h1 className='text-center text-3xl font-bold text-blues'>230</h1>
                </div>
                <div className='bg-white drop-shadow-md w-52 h-36 p-8 flex flex-col gap-3 '>
                    <h1 className='text-xl'>รายได้</h1>
                    <h1 className='text-center text-3xl font-bold text-green-400'>20350 ฿</h1>
                </div>
            </div>

        </div>
        </>
        
    )
}

export default Dashborad