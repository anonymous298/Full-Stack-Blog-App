"use client"

import React, { useState } from "react";
import { blog_data } from "@/Assets/assets";
import BlogCard from "./BlogCard";

const BlogsListing = () => {

    const [categoryState, setCategoryState] = useState('All')

    const updatedData = categoryState === 'All' ? blog_data : blog_data.filter((item) => item.category == categoryState)

    console.log(updatedData)

  return (
    <div className="flex flex-col gap-5 items-center">
      <div id="categorieButtons" className="flex font-semibold gap-5">
        <button onClick={() => setCategoryState('All')} className={`${categoryState == 'All' ? 'bg-black transform scale-105 text-white' : ''} cursor-pointer p-2 px-3`}>All</button>
        <button onClick={() => setCategoryState('Technology')} className={`${categoryState == 'Technology' ? 'bg-black transform scale-105 text-white' : ''} cursor-pointer p-2`}>Technology</button>
        <button onClick={() => setCategoryState('Startup')} className={`${categoryState == 'Startup' ? 'bg-black transform scale-105 text-white' : ''} cursor-pointer p-2`}>Startup</button>
        <button onClick={() => setCategoryState('Lifestyle')} className={`${categoryState == 'Lifestyle' ? 'bg-black transform scale-105 text-white' : ''} cursor-pointer p-2`}>Lifestyle</button>
      </div>

      <div id="blogsContainer" className="flex flex-wrap gap-8 items-center justify-center">
        {updatedData.map((item, idx) => {
          return <BlogCard key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} category={item.category}  />;
        })}
      </div>
    </div>
  );
};

export default BlogsListing;
