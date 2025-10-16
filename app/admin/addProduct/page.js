"use client"

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title : '',
    description : '',
    category : 'Startup',
    author : 'Talha',
    authorimg : '/author_img.png'
  })

  const handleSubmit = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  console.log(data);

  return (
    <div>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl font-bold'>Upload thumbnail</p>

        <label htmlFor="img">
          <Image src={image ? URL.createObjectURL(image) : assets.upload_area} alt='upload' width={140} height={70} className='mt-4 cursor-pointer' />
        </label>

        <input type="file" name="image" id="img" hidden required onChange={(e) => setImage(e.target.files[0])} />

        <p className='text-xl font-bold mt-4'>Blog title</p>

        <input type="text" name='title' onChange={handleSubmit} value={data.title} className='border-2 border-slate-200 px-4 py-3 w-[500px] max-sm:w-full mt-4' placeholder='Enter blog title' />

        <p className='text-xl font-bold mt-4'>Blog Description</p>

        <textarea name="description" onChange={handleSubmit} value={data.description} className='border-2 border-slate-200 px-4 py-3 w-[500px] max-sm:w-full mt-4'></textarea>

        <p className='text-xl font-bold mt-4'>Blog Category</p>

        <select name="category" onChange={handleSubmit} value={data.category} className='mt-4 w-40 px-4 py-3 border-2 border-slate-200 text-gray-500'>
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <button type="submit" className='bg-black font-bold block w-40 p-3 text-white mt-10 cursor-pointer hover:bg-gray-900'>ADD</button>
      </form>

    </div>
  )
}

export default page