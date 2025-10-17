"use client"

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, {useState} from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [image, setImage] = useState(false);

  console.log(image);

  const [data, setData] = useState({
    title : '',
    description : '',
    category : 'Startup',
    author : 'Talha',
    authorimg : '/author_img.png'
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorimg', data.authorimg);
    formData.append('image', image)

    const response = await axios.post('/api/blog', formData)

    if (response.data.success) {
      toast.success(response.data.msg)
      
      setData({
        title : '',
        description : '',
        category : 'Startup',
        author : 'Talha',
        authorimg : '/profile_icon.png'
      })
      setImage(false)
      
    }

    else {
      toast.error("Error Submitting Blog")
    }
  }

  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl font-bold'>Upload thumbnail</p>

        <label htmlFor="img" className='inline-block'>
          <Image src={image ? URL.createObjectURL(image) : assets.upload_area} alt='upload' width={140} height={70} className='mt-4 cursor-pointer' />
        </label>

        <input type="file" name="image" id="img" hidden required onChange={(e) => setImage(e.target.files[0])} />

        <p className='text-xl font-bold mt-4'>Blog title</p>

        <input type="text" name='title' onChange={handleChange} value={data.title} className='border-2 border-gray-300 px-4 py-3 w-[500px] max-sm:w-full mt-4' placeholder='Enter blog title' />

        <p className='text-xl font-bold mt-4'>Blog Description</p>

        <textarea name="description" onChange={handleChange} value={data.description} className='border-2 border-gray-300 px-4 py-3 w-[500px] max-sm:w-full mt-4'></textarea>

        <p className='text-xl font-bold mt-4'>Blog Category</p>

        <select name="category" onChange={handleChange} value={data.category} className='mt-4 w-40 px-4 py-3 border-2 border-gray-300 text-gray-500'>
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