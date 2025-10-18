"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    const getEmailData = async () => {
      const response = await axios.get('/api/email')

      if (response.data.success) {
        setEmails(response.data.data)
      }
    }

    getEmailData();
  })

  const handleDelete = async (id, idx) => {
      try {
        const response = await axios.delete(`/api/email?id=${id}`);
  
        setEmails(emails.filter((_, index) => index !== idx))
  
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
        className="mt-4 w-[55vw] border border-black p-3"
      >
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="w-[40%] text-start p-3">EMAIL SUBSCRIPTION</th>
              <th className="w-[40%] pl-5 text-start">DATE</th>
              <th className=" text-start w-[20%]">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {emails.map((item, idx) => {
              const emailDate = new Date(item.date);

              return (
                <tr key={idx}>
                  <td className="p-3 ">
                    <p className="font-semibold">{item.email}</p>
                  </td>

                  <td className="pl-5">
                    <p className="text-md">{emailDate.toDateString()}</p>
                  </td>

                  <td className="">
                    <p
                      className="cursor-pointer hover:text-red-500 inline"
                      onClick={() => handleDelete(item._id, idx)}
                    >
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

export default Page;
