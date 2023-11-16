
import LineChartComponent from '@/components/LineChartComponent'
import Link from "next/link"
import './dashborad.css'
import Navbar from '@/components/Navbar'


const Dashborad: React.FC = () => {
    const labels = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
    const dataset = [0, 0, 0, 0, 0, 100, 0];
    return (
        <>
        <Navbar/>
        <div className='container bg-white p-20 flex gap-16 flex-wrap justify-center'>
        <LineChartComponent  labels={labels} dataset={dataset} />
            <div className='flex flex-col gap-10'>
                <div className='bg-white drop-shadow-md w-52 h-36 p-8 flex flex-col gap-3 '>
                    <h1 className='text-xl'>จำนวนที่ขายได้</h1>
                    <h1 className='text-center text-3xl font-bold text-blues'>0</h1>
                </div>
                <div className='bg-white drop-shadow-md w-52 h-36 p-8 flex flex-col gap-3 '>
                    <h1 className='text-xl'>รายได้</h1>
                    <h1 className='text-center text-3xl font-bold text-green-400'>0 ฿</h1>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Dashborad