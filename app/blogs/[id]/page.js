"use client"

import { blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const {id} = useParams()
    const [currentData, setCurrentData] = useState({})

    useEffect(() => {
      setCurrentData(blog_data.find((item) => item.id == id))
    }, [id])

    // console.log(currentData)

  return (
    <div>
      {/* Using Navbar Component */}
      <div id="navbarsection" className='bg-gray-200 h-full pb-35'>
        <Navbar />

        <div id="blogdetail" className='w-[50%] text-center flex flex-col items-center gap-y-6 mx-auto mt-15'>
          <h1 className='font-bold text-4xl'>{currentData.title}</h1>

          <div id='author' className='flex flex-col items-center'>
            {currentData.image && <Image src={currentData.author_img} alt='author' className='size-13 outline-2 outline-white rounded-full' />}
            <p>{currentData.author}</p>
          </div>
          
        </div>

      </div>

      <div id="blogImage" className='max-w-[700px] outline-3 outline-white mt-[-100px] mx-auto'>
        {currentData.image && <Image src={currentData.image} alt='blog' width={1280} height={720} />}
      </div>

      <div id="blogdata" className='max-w-[700px] mx-auto'>
        <h1 className='font-bold text-2xl my-10'>Introduction:</h1>

        <p>{currentData.description}</p>

        <h3 className='font-bold text-2xl my-5'>Step 1: Self-Reflection and Goal Setting</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum, nostrum cupiditate repudiandae voluptates obcaecati commodi? Consequuntur corrupti aperiam nesciunt recusandae esse quibusdam, quaerat deserunt, et saepe suscipit eaque similique.</p>

        <h3 className='font-bold text-2xl my-5'>Step 2: Self-Reflection and Goal Setting</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum, nostrum cupiditate repudiandae voluptates obcaecati commodi? Consequuntur corrupti aperiam nesciunt recusandae esse quibusdam, quaerat deserunt, et saepe suscipit eaque similique.</p>

        <h3 className='font-bold text-2xl my-5'>Step 3: Self-Reflection and Goal Setting</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum, nostrum cupiditate repudiandae voluptates obcaecati commodi? Consequuntur corrupti aperiam nesciunt recusandae esse quibusdam, quaerat deserunt, et saepe suscipit eaque similique.</p>

        <div id="shareicons" className='font-bold text-2xl my-7'>
          <h3 className='mb-2'>Share this article on</h3>

          <div className="icons flex gap-x-5">
              <div className="icon bg-gray-200 size-10 flex justify-center items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" className="hover:fill-blue-500 cursor-pointer" viewBox="0 0 256 256"><path d="M240,149.31c0,16.11-3.17,29.89-9.17,39.84-7.43,12.33-19,18.85-33.39,18.85-27.94,0-47.78-37-68.78-76.22C111.64,100,92.35,64,74,64c-9.38,0-19.94,10-28.25,26.67A138.18,138.18,0,0,0,32,149.31c0,13.2,2.38,24.12,6.88,31.58S49.82,192,58.56,192c15.12,0,30.85-24.54,44.23-48.55a8,8,0,0,1,14,7.8C101.46,178.71,83.07,208,58.56,208c-14.41,0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84A154.81,154.81,0,0,1,31.42,83.54C42.82,60.62,57.94,48,74,48c27.94,0,47.77,37,68.78,76.22C159.79,156,179.08,192,197.44,192c8.74,0,15.18-3.63,19.68-11.11S224,162.51,224,149.31a138.18,138.18,0,0,0-13.74-58.64C202,74,191.39,64,182,64c-8.36,0-17.68,7.48-28.51,22.88a8,8,0,1,1-13.08-9.21c9-12.74,23-29.67,41.59-29.67,16.05,0,31.17,12.62,42.57,35.54A154.81,154.81,0,0,1,240,149.31Z"></path></svg></div>
              <div className="icon bg-gray-200 size-10 flex justify-center items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" className="hover:fill-gray-500 cursor-pointer" viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg></div>
              <div className="icon bg-gray-200 size-10 flex justify-center items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" className="hover:fill-red-500 cursor-pointer" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg></div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Page