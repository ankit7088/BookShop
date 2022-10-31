import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (


    
 <div className='relative'>
  <Navbar/>
<div className=''>
  <Sidebar/>
    <main className=' ml-64 pt-20 px-4'>
      <h1 className='text-4xl'>content here</h1>
    </main>
</div>
 </div>
  )
}
