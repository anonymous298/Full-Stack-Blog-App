import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const Navbar = () => {
  return (
    <div className='p-2 flex justify-center items-center border-2 w-full'>
        <div className='w-[90%] flex justify-between items-center'>
            <h3 className='text-lg font-bold'>Admin Panel</h3>

            <Image src={assets.profile_icon} alt='logo' width={50} height={50} />
        </div>
    </div>
  )
}

export default Navbar