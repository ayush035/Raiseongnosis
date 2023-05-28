import React, { useState, useReducer } from 'react'
import { Web3Storage } from 'web3.storage'
import Navbar from '@/components/Navbar'
import Footer from '../components/Footer'

export default function Home () {
 
  return (
    <><Navbar />
    <main className='my-16 rounded-xl bg-slate-900 text-green-400 mx-72'>
<div className='flex justify-center items-center my-6 mx-4'>
<div className='rounded-2xl bg-slate-900'>
<div className=' text-3xl my-4 mx-8 cursor-pointer font-mono font-semibold'>
Upload Posts</div>
</div>
</div>
<div className=" p-2 mx-8 right flex flex-col">
<form className='px-8' id='upload-form' >
<div className=" p-2 mx-4 right flex flex-col">
{/* <label className='my-2 font-mono text-md font-semibold' htmlFor='token'>Paste your web3.storage API token here</label> */}
{/* <input className='text-black px-8 flex w-10/12' type='password' id='token' onChange={e => setToken(e.target.value)} required /> */}
<label className='my-2 font-mono text-md font-semibold' htmlFor='filepicker'>Pick files to Upload</label>
<input type='file' id='filepicker' name='fileList' onChange={e => setFiles(e.target.files)} multiple required />
<label className='my-2 font-mono text-md font-semibold'>Describe your project as enticing as possible !</label>
<input className='text-black px-8 flex w-10/12 ' type='text' placeholder='My Project...'/>
<label className='my-2 font-mono text-md font-semibold'>Wallet Address</label>
<input className='text-black px-8 flex w-10/12 ' type='text' placeholder='Where should we send your funds?'/>



<div className='flex justify-center items-center my-4 mx-6'>
<div className='rounded-2xl bg-slate-800'>
<div className=' text-2xl my-2 mx-3 cursor-pointer font-mono font-semibold hover:text-white'>
<input className="px-8 my-2 cursor-pointer" type='submit' value='Create' id='submit' />
</div>
</div>
</div>
</div>
</form>
</div>
</main>

   <Footer/>
   </>
  )
}