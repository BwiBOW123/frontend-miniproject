
import LineChartComponent from '@/components/LineChartComponent'
import './dashborad.css'
const Dashborad: React.FC = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const dataset = [65, 59, 80, 81, 56, 55, 40];
    return (
        <div className='container p-20 flex gap-16 flex-wrap justify-center'>
            <button className="text-2xl drop-shadow-md w-full mx-36 p-8 h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ โพสโปรแกรมขาย</button>
            <LineChartComponent  labels={labels} dataset={dataset} />
            <div className='flex flex-col gap-10'>
                <div className='bg-white drop-shadow-md w-52 h-36 p-8 flex flex-col gap-3 '>
                    <h1 className='text-xl'>จำนวนที่ขายได้</h1>
                    <h1 className='text-center text-3xl font-bold text-blues'>20</h1>
                </div>
                <div className='bg-white drop-shadow-md w-52 h-36 p-8 flex flex-col gap-3 '>
                    <h1 className='text-xl'>รายได้</h1>
                    <h1 className='text-center text-3xl font-bold text-green-400'>20000 ฿</h1>
                </div>
            </div>

        </div>
    )
}

export default Dashborad