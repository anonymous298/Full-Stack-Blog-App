"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogsData = async () => {
      const response = await axios.get("/api/blog");

      if (response.data.success) {
        setBlogs(response.data.data);
      }
    };

    getBlogsData();
  }, []);

  const deleteBlog = async (id, idx) => {
    try {
      const response = await axios.delete(`/api/blog?id=${id}`);

      setBlogs(blogs.filter((_, index) => index !== idx))

      if (response.data.success) {
        toast.success(response.data.msg)
      }
      else {
        toast.error(response.data.msg)
      }
    }catch (err){
      console.log(err)
    }
  }

  return (
    <div className="p-5 ml-5">
      <h3 className="mt-5 text-xl font-semibold">All blogs</h3>

      <div
        id="blogListContainer"
        className="mt-4 w-[60vw] border border-black p-3"
      >
        <table>
          <thead>
            <tr className="">
              <th className="w-[25%] text-start p-3">AUTHOR NAME</th>
              <th className="w-[50%] pl-5 text-start">BLOG TITLE</th>
              <th className=" text-start w-[20%]">DATE</th>
              <th className="w-[10%] text-start">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((item, idx) => {
              const blogDate = new Date(item.date);

              return (
                <tr key={idx}>
                  <td className="p-3">
                    <div className="flex items-center justify-start gap-x-3">
                      <Image
                        src={"/author_img.png"}
                        alt="logo"
                        width={40}
                        height={40}
                      />
                      <p className="font-semibold">{item.author}</p>
                    </div>
                  </td>

                  <td className="pl-5">
                    <p className="text-sm">{item.title}</p>
                  </td>

                  <td>
                    <p className="text-sm">{blogDate.toDateString()}</p>
                  </td>

                  <td>
                    <p className="text-center cursor-pointer hover:text-red-500" onClick={() => deleteBlog(item._id, idx)}>
                      x
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
