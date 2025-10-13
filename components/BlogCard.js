import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({id, title, description, image, category}) => {
  return (
    <div className='min-h-[400px] w-[300px] border flex flex-col cursor-pointer hover:shadow-[-7px_7px_0px_#000]'>
        <div id='image' className=" h-[25vh] relative mb-5 border-b">
            <Image
                src={image}
                alt={category}
                fill={true}
            />
        </div>

        <div id="cardContent" className='flex flex-col gap-5 w-[90%] mx-auto'>
            <div className='bg-black text-white inline-block text-sm self-start p-0.5 font-semibold'>{category}</div>

            <h3 className='font-bold'>{title}</h3>

            <p className='text-sm'>{description}</p>

            <Link href={`blogs/${id}`} className='mb-5 self-start font-bold'>Read more -&gt;</Link>
        </div>
    </div>
  )
}

export default BlogCard