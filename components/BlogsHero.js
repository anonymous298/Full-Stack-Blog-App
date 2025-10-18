"use client"

import React, { useState } from 'react'
import BlogsListing from './BlogsListing'
import axios from 'axios'
import { toast } from 'react-toastify'

const BlogsHero = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = async () => {
    const formData = new FormData()

    formData.append('email', email)

    const response = await axios.post('/api/email', formData)

    if (response.data.success) {
      setEmail('')
      toast.success(response.data.msg)  
    }

    else {
      toast.error(response.data.msg)
    }
  }

  return (
    <>
        <div id="herosubscription" className=' w-[60%] max-md:w-[80%] mx-auto flex flex-col justify-center items-center p-3 gap-y-8 mb-15'>
            <h1 className='text-5xl'>Latest Blogs</h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt exercitationem explicabo eos delectus ullam placeat dolorum alias deleniti, molestias amet?</p>

            <div className=' border-2 w-[75%] max-sm:w-[95%] flex shadow-[-7px_7px_0px_#000] overflow-hidden'>
                <input onChange={handleChange} value={email} type="text" placeholder='Enter your email' className='py-3 w-full placeholder:text-gray-600 pl-3 outline-none'/>
                <button onClick={handleSubmit} className='w-[30%] border-l-2 cursor-pointer transform transition-all hover:scale-105 hover:bg-red-400 hover:text-white'>Subscribe</button>
            </div>
        </div>

        {/* Blogs card listing component */}
        <BlogsListing />

    </>
  )
}

export default BlogsHero