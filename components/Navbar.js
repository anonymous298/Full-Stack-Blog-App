import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const Navbar = () => {
  const { logo } = assets;
  console.log(logo);

  return (
    <>
      <div id="navbar">
        <div id="container" className="w-[80%] flex justify-between items-center mx-auto p-5">
          <div className="logo relative h-[50px] w-[180px]">
            <Image src={logo} alt="logo" fill={true} />
          </div>

          <div>
            <button className="border-2 py-2 px-6 font-semibold shadow-[-7px_7px_0px_#000] transform transition-all hover:scale-105 cursor-pointer">Get started</button>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
