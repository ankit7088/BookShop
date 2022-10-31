import React from 'react'

const Navbar = () => {
  return (
<div className='w-full h-[66px] bg-red-400 fixed flex items-center p-4 justify-between'>
   <h1 className='text-2xl font-bold text-white'>BookShop</h1>
   <input type="text" placeholder="search" className="flex-1 input w-full max-w-xs lg:max-w-md text-lg" />
   
   <div className='flex justify-center items-center gap-4'>
   <span className='btn'>Sell</span>
   <span className='btn'>Cart</span>
 <div className='flex justify-center items-center w-12 h-12 bg-stone-800 rounded-full'>
    <span className='text-2xl'>S</span>
   </div>
   </div>
</div>
  )
}

export default Navbar