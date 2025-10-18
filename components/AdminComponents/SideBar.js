import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='w-[26vw] bg-slate-100 border-2 min-h-screen'>
        <Link href={'/'} id="sidebarLogo" className='p-3 flex justify-center items-center border-b-2 cursor-pointer'>
            <Image src={assets.logo} alt='logo' width={150} height={150} />
        </Link>

        <div id="adminButtons" className='flex flex-col items-end gap-y-6 mt-20'>
            <Link href={'/admin/addProduct'} className=' bg-white p-3 w-[85%] shadow-[-7px_7px_0px_#000] border flex gap-x-3 items-center cursor-pointer transform hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path></svg>
                <p>Add blogs</p>
            </Link>

            <Link href={'/admin/blogList'} className=' bg-white p-3 w-[85%] shadow-[-7px_7px_0px_#000] border flex gap-x-3 items-center cursor-pointer transform hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path></svg>
                <p>Blost lists</p>
            </Link>

            <Link href={'/admin/subscriptions'} className=' bg-white p-3 w-[85%] shadow-[-7px_7px_0px_#000] border flex gap-x-3 items-center cursor-pointer transform hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                <p>Subscriptions</p>
            </Link>
        </div>

    </div>
  )
}

export default SideBar