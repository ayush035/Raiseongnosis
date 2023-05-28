import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function profile()   
{

    return (
     <>
  <Navbar/>
  <div className='flex justify-center'>
    <div className='w-1/2 my-10'>
  <div className=" flex flex-col bg-gray-900  rounded-xl p-8 w-1/2 mx-20 my-2 ">
                <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Amount (USD)" />
                {/* <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Enter Wallet Address" /> */}
                <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Add a note" />
                {/* <button className="bg-slate-900 text-purple-500 my-2 py-2 rounded-md font-bold hover:bg-slate-700 text-xl">Upload Files</button> */}
                <hr className="my-2" />
                <button className=" bg-slate-800 text-green-500 my-2 py-2 px-4 mx-auto rounded-md font-bold w-fit text-xl hover:bg-slate-700">Fund</button>
                {/* <span className="-bottom-10 text-sm text-black font-bold">
                    NOTE : NFT will be minted to the entered wallet addresses !</span> */}
                    </div>
  </div>
  </div>
  
  
  
  <Footer/>
  </>
    )
}