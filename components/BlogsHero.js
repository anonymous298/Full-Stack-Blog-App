import React from 'react'
import BlogsListing from './BlogsListing'

const BlogsHero = () => {
  return (
    <>
        <div id="herosubscription" className=' w-[60%] max-md:w-[80%] mx-auto flex flex-col justify-center items-center p-3 gap-y-8 mb-15'>
            <h1 className='text-5xl'>Latest Blogs</h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt exercitationem explicabo eos delectus ullam placeat dolorum alias deleniti, molestias amet?</p>

            <div className=' border-2 w-[75%] max-sm:w-[95%] flex shadow-[-7px_7px_0px_#000] overflow-hidden'>
                <input type="text" placeholder='Enter your email' className='py-3 w-full placeholder:text-gray-600 pl-3 outline-none'/>
                <button className='w-[30%] border-l-2 cursor-pointer transform transition-all hover:scale-105 hover:bg-red-400 hover:text-white'>Subscribe</button>
            </div>
        </div>

        {/* Blogs card listing component */}
        <BlogsListing />

    </>
  )
}

export default BlogsHero