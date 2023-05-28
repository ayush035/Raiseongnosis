import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
// import Upload from '@/components/Upload'
// const inter = Inter({ subsets: ['latin'] })
import d from '../public/d.jpg'
import shield from '../public/shield.png'
import Footer from '@/components/Footer'
import b from'../public/b.jpg'
import m from'../public/m.png'
import e from'../public/e.jpg'


export default function Home() {
  return (
    <>
    <div >
      {/* <Head>
        <title>Raise</title>
        <meta name="description" content="Raise" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Navbar />

  

        

      <div className='grid grid-cols-2'>
        <div className=' flex flex-col=-2'>
      <div className ='my-20 mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105'>
<Image 
src={b}
alt=''
width="400"
height="400"/>
</div>
</div>
<div className=' flex flex-col'>
<div className ='my-20 mx-20 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105'>
<Image 
src={m}
alt=''
width="350"
height="400"/>
</div>
</div></div>
<div className ='my-20 mx-20'>
<Image 
src={e}
alt=''
width="1100"
height="400"/>

</div>
<Footer/>
</div>
</>
  )
}
