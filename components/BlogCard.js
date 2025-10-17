import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({id, title, description, image, category}) => {
  return (
    <div className='min-h-[400px] max-h-[400px] w-[300px] border flex flex-col hover:shadow-[-7px_7px_0px_#000]'>
        <Link href={`/blogs/${id}`} id='image' className=" h-[25vh] relative mb-5 border-b cursor-pointer">
            <Image
                src={image}
                alt={category}
                fill={true}
            />
        </Link>

        <div id="cardContent" className='flex flex-col gap-5 w-[90%] mx-auto'>
            <div className='bg-black text-white inline-block text-sm self-start p-0.5 font-semibold'>{category}</div>

            <h3 className='font-bold'>{title}</h3>

            <p className='text-sm'>{description}</p>

            <Link href={`/blogs/${id}`} className='mb-5 self-start font-bold flex items-center gap-1 cursor-pointer'>Read more <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></Link>
        </div>
    </div>
  )
}

export default BlogCard