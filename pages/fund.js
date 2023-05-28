import Image from 'next/image'
import Navbar from '../components/Navbar'
import Logo from '../public/Logo.png'
import project from '../public/project.jpg'
import Footer from '../components/Footer'
import Link from 'next/link'





export default function profile()   
{

    return (
     <>
  <Navbar/>

  <div className=' flex justify-center'>
    <div className=' text-3xl font-mono font-semibold text-green-500 my-6'>
        Fund Projects
    </div>
  </div>
  <div className='flex'>
  <div className='grid grid-cols-4 gap-2 '>
  <div className=' bg-gray-900 text-white mx-10 my-2 rounded-xl  '>
                <div className="mx-1 my-1 cursor-pointer ">
                    
                    <Image src={Logo} 
                    alt='' height="260px" width='400px'>
                    </Image>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-green-500 font-mono my-2 hover:text-white'>
                        <Link href = '/fund2'> 
                        Fund
                        </Link>
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-900 text-white mx-10 my-2 rounded-xl  '>
                <div className="mx-1 my-1 cursor-pointer">
                    <Image src={project} 
                    alt='' height="260px" width='400px'>
                    </Image>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-green-500 font-mono my-2 hover:text-white'>
                        <Link href='/fund2'>
                        Fund
                        </Link>
                    </div>
                    </div>
                    </div>


    </div>
  </div>
  <Footer/>
  </>
    )
}